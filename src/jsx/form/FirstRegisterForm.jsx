import React, { useState } from 'react';
import styles from '../../css/form/FirstRegisterForm.module.css';
import { LANGUAGE_ } from "../../js/texts";
import NextButton from "../widget/NextButton";
import InputField from "../widget/InputField";
import { PAGE_ } from "../../js/RouteLink";
import { User } from "../../js/User.js"
import {
    inputEmptyWarning,
    phoneNumberInvalidWarning,
    studentNumberInvalidWarning,
    WarningToast
} from "../widget/WarningToast";

const NUM_INPUT_WIDTH = "43vw"
const NUM_INPUT_HEIGHT = "45px"

const PHONE_NUM_INPUT_WIDTH = "90vw"
const PHONE_NUM_INPUT_HEIGHT = "45px"



const FirstRegisterForm = () => {
    const [studentNumber, setStudentNumber] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [language, setLanguage] = useState("");
    const [libraryAndFramework, setLibraryAndFramework] = useState("");

    const handleNextClick = () => {
        let warning;

        User.학번 = studentNumber;
        User.이름 = name;
        User.전화번호 = phoneNumber;
        User.언어 = language;
        User.라이브러리프레임워크 = libraryAndFramework;

        if (studentNumber === "" || name === "" || phoneNumber === "" || language === "") {
            inputEmptyWarning();
            warning = false;
        }

        if (isInvalidStudentNumber(studentNumber)) {
            studentNumberInvalidWarning();
            warning = false;
        }

        if (isInvalidPhoneNumber(phoneNumber)) {
            phoneNumberInvalidWarning();
            warning = false;
        }

        if (!warning) return warning;
        return true;
    };

    return (
        <>
            <WarningToast/>
            <div className={styles.container}>
                <div className={styles.header}>Codingbu 동아리 부원모집</div>
                <div className={styles['input-student-number']}>
                    <div className={styles.studentNumber}>
                        <InputField
                            label="학번" placeholder="예) 20904"
                            redStar={true}
                            width={NUM_INPUT_WIDTH}
                            height={NUM_INPUT_HEIGHT}
                            value={studentNumber}
                            onChange={e => setStudentNumber(e.target.value)}
                        />
                    </div>

                    <div className={styles.name}>
                        <InputField
                            label="이름"
                            placeholder="예) 홍길동"
                            redStar={true}
                            width={NUM_INPUT_WIDTH}
                            height={NUM_INPUT_HEIGHT}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                </div>

                <div className={styles['input-phone-number']}>
                    <InputField
                        label="전화번호"
                        placeholder="010-1234-5678"
                        redStar={true}
                        width={PHONE_NUM_INPUT_WIDTH}
                        height={PHONE_NUM_INPUT_HEIGHT}
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className={styles['input-language']}>
                    <InputField
                        label="다룰 수 있는 개발 언어"
                        placeholder="없는 경우 '없다' 혹은 'X'를 기입해주세요."
                        redStar={true}
                        width={PHONE_NUM_INPUT_WIDTH}
                        height={PHONE_NUM_INPUT_HEIGHT}
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                    />
                </div>

                <div className={styles['description-language']}>
                    <p>{LANGUAGE_.DESCRIPTION}</p>
                </div>

                <div className={styles['input-library-framework']}>
                    <InputField
                        label="사용해본 라이브러리/프레임워크/툴 (자유 기입)"
                        placeholder="예) 유니티, 스프링, 리액트 등.."
                        width={PHONE_NUM_INPUT_WIDTH}
                        height={PHONE_NUM_INPUT_HEIGHT}
                        value={libraryAndFramework}
                        onChange={e => setLibraryAndFramework(e.target.value)}
                    />
                </div>

                <div className={styles['next-button-to-second-form']}>
                    <NextButton
                        text="다음으로"
                        goto={PAGE_.SECOND_REGISTER}
                        onClick={handleNextClick}
                        imgSrc='/NextIcon.png'
                    />
                </div>
            </div>
        </>
    );
};

const isInvalidStudentNumber = (studentNumber) => {
    const regex = /^\d{5}$/;
    return !(regex.test(studentNumber));
}

const isInvalidPhoneNumber = (phoneNumber) => {
    const regex = /^01(?:0|1|[6-9])(?:-?\d{4}){2}$/;
    return !(regex.test(phoneNumber));
}

export default FirstRegisterForm; 