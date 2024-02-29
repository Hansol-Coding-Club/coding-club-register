import React, { useState } from 'react';
import '../../css/FirstRegisterForm.css'
import {LANGUAGE_DESCRIPTION} from "../../js/texts";
import NextButton from "../widget/NextButton";
import {InputField} from "../widget/InputField";
import {SECOND_REGISTER_PAGE} from "../../js/RouteLink";
import {User} from "../../js/User.js"

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
        if (studentNumber === "" || name === "" || phoneNumber === "" || language === "" || libraryAndFramework === "") {
            alert("모든 필드를 채워주세요.");
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
        <div className="container">
            <div className="header">Codingclub 동아리 부원모집</div>
            <div className="form">
                <div style={{display: "flex", marginLeft: '40px', marginBottom: "20px"}}>
                    <div style={{marginRight: "30px"}}>
                        <InputField label="학번" placeholder="예) 20904" redStar={true}
                                    width={NUM_INPUT_WIDTH} height={NUM_INPUT_HEIGHT}
                                    value={studentNumber} onChange={e => setStudentNumber(e.target.value)}/>
                    </div>
                    <InputField label="이름" placeholder="이름을 입력해주세요." redStar={true}
                                width={NUM_INPUT_WIDTH} height={NUM_INPUT_HEIGHT}
                                value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
                    <InputField label="전화번호" placeholder="01012345678" redStar={true}
                                width={PHONE_NUM_INPUT_WIDTH}
                                height={PHONE_NUM_INPUT_HEIGHT}
                                value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                </div>

                <div style={{display: "flex", justifyContent: "space-around",}}>
                    <InputField label="다룰수 있는 개발 언어" placeholder="없는경우 '없다' 혹은 'X'를 기입해주세요." redStar={true}
                                width={PHONE_NUM_INPUT_WIDTH}
                                height={PHONE_NUM_INPUT_HEIGHT}
                                value={language} onChange={e => setLanguage(e.target.value)}/>
                </div>

                <div style={{display: "flex", marginLeft: "40px", marginBottom: "20px"}}>
                    <p style={{fontSize: '10px', color: "grey"}}>{LANGUAGE_DESCRIPTION}</p>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", marginBottom: "40px"}}>
                    <InputField label="사용해본 라이브러리/프레임워크/툴 (자유 기입)" placeholder="예) 유니티, 스프링, 리액트 등.."
                                width={PHONE_NUM_INPUT_WIDTH}
                                height={PHONE_NUM_INPUT_HEIGHT}
                                value={libraryAndFramework} onChange={e => setLibraryAndFramework(e.target.value)}/>
                </div>

                <div style={{display: "flex", justifyContent: "center"}}>
                    <NextButton text="다음으로" goto={SECOND_REGISTER_PAGE} onClick={handleNextClick}/>
                </div>

            </div>
        </div>
    );
};


export default FirstRegisterForm;