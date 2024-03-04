import {RESULT_FORM_CONTENT, RESULT_FORM_TITLE} from "../../js/texts";
import NextButton from "../widget/NextButton";
import React, {useEffect, useState} from "react";
import {START_PAGE} from "../../js/RouteLink";
import "../../css/form/ResultForm.css"
import {User} from "../../js/User";
import {db} from "../../js/firebase";
import { ref, set } from "firebase/database";

const ResultForm = () => {
    const [title, setTitle] = useState("잠시만 기다려주세요..");
    const [content, setContent] = useState("")

    useEffect(() => {
        let isUserEmpty = (isEmpty(User.studentNumber) && isEmpty(User.name) && isEmpty(User.phoneNumber) && isEmpty(User.languague))

        if (isUserEmpty) {
            setTitle("비정상적인 방법으로\n페이지에 접근하셨습니다.");
            setContent("처음부터 다시 시도해주세요.");
        } else {
            set(ref(db, 'users/' + User.studentNumber), User)
                .then(() => {
                    setTitle(RESULT_FORM_TITLE);
                    setContent(RESULT_FORM_CONTENT);
                })
                .catch((error) => {
                    setTitle("데이터 전송에 실패했습니다. 오류: " + error.message);
                    setContent("처음부터 다시 시도해주십시오.")
                });
        }
        console.log(User);
    }, []);

    return(
        <div className="centered-square">
            <p className="title">{formatStringToJsx(title)}</p>
            <p className="context">{formatStringToJsx(content)}</p>
            <div className="center-button">
                <NextButton goto={START_PAGE} onClick={resetUser(User)}/>
            </div>
        </div>
    );
}

function formatStringToJsx(str) {
    return str.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>)
}

function resetUser(user) {
    for (let key in user) {
        if (user.hasOwnProperty(key)) {
            user[key] = null;
        }
    }
    return true;
}

function isEmpty(value) {
    return (value === "" || value === null);
}

export default ResultForm;