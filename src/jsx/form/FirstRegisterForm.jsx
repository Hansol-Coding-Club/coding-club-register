import React, { useState } from 'react';
import '../../css/form/FirstRegisterForm.css'
import { LANGUAGE_ } from "../../js/texts";
import NextButton from "../widget/NextButton";
import InputField from "../widget/InputField";
import { PAGE_ } from "../../js/RouteLink";
import { User } from "../../js/User.js"
import {showWarningToast, WarningToast} from "../widget/WarningToast";

const NUM_INPUT_WIDTH = "325px"
const NUM_INPUT_HEIGHT = "50px"

const PHONE_NUM_INPUT_WIDTH = "680px"
const PHONE_NUM_INPUT_HEIGHT = "50px"


const FirstRegisterForm = () => {
    const [studentNumber, setStudentNumber] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [language, setLanguage] = useState("");
    const [libraryAndFramework, setLibraryAndFramework] = useState("");
    const handleNextClick = () => {
        if (studentNumber === "" || name === "" || phoneNumber === "" || language === "") {
            showWarningToast();
            return false;
        } else {
            User.studentNumber = studentNumber;
            User.name = name;
            User.phoneNumber = phoneNumber;
            User.languague = language;
            User.libraryAndFramework = libraryAndFramework;
            return true;
        }
    };

    return (
        <>
            <WarningToast/>
            <div className="container">
                <div className="header">Codingclub 동아리 부원모집</div>
                <div className="form">
                    <div className="input-student-number">
                        <div>
                            <InputField
                                label="학번" placeholder="예) 20904"
                                redStar={true}
                                width={NUM_INPUT_WIDTH}
                                height={NUM_INPUT_HEIGHT}
                                value={studentNumber}
                                onChange={e => setStudentNumber(e.target.value)}
                            />
                        </div>

                        <InputField
                            label="이름"
                            placeholder="이름을 입력해주세요."
                            redStar={true}
                            width={NUM_INPUT_WIDTH}
                            height={NUM_INPUT_HEIGHT}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-phone-number">
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

                    <div className="input-language">
                        <InputField
                            label="다룰수 있는 개발 언어"
                            placeholder="없는경우 '없다' 혹은 'X'를 기입해주세요."
                            redStar={true}
                            width={PHONE_NUM_INPUT_WIDTH}
                            height={PHONE_NUM_INPUT_HEIGHT}
                            value={language}
                            onChange={e => setLanguage(e.target.value)}
                        />
                    </div>

                    <div className="description-language">
                        <p>{LANGUAGE_.DESCRIPTION}</p>
                    </div>

                    <div className="input-library-framework">
                        <InputField
                            label="사용해본 라이브러리/프레임워크/툴 (자유 기입)"
                            placeholder="예) 유니티, 스프링, 리액트 등.."
                            width={PHONE_NUM_INPUT_WIDTH}
                            height={PHONE_NUM_INPUT_HEIGHT}
                            value={libraryAndFramework}
                            onChange={e => setLibraryAndFramework(e.target.value)}
                        />
                    </div>

                    <div className="next-button-to-second-form">
                        <NextButton
                            text="다음으로"
                            goto={PAGE_.SECOND_REGISTER}
                            onClick={handleNextClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};


export default FirstRegisterForm;