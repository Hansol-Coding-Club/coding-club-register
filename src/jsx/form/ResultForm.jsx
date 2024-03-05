import { FORM_ } from "../../js/texts";
import NextButton from "../widget/NextButton";
import React, {useEffect, useState} from "react";
import { PAGE_ } from "../../js/RouteLink";
import "../../css/form/ResultForm.css"
import { User } from "../../js/User";
import { db } from "../../js/firebase";
import { ref, set } from "firebase/database";

const ResultForm = () => {
    const [title, setTitle] = useState("잠시만 기다려주세요..");
    const [content, setContent] = useState("");
    const [showButton, setShowButton] = useState(false); // Add this line

    useEffect(() => {
        const isUserEmpty = (
            isEmpty(User.studentNumber) &&
            isEmpty(User.name) &&
            isEmpty(User.phoneNumber) &&
            isEmpty(User.language));

        if (isUserEmpty) {
            setTitle("비정상적인 방법으로\n페이지에 접근하셨습니다.");
            setContent("처음부터 다시 시도해주세요.");
        } else {
            set(ref(db, 'users/' + User.studentNumber), User)
                .then(() => {
                    setTitle(FORM_.RESULT_TITLE);
                    setContent(FORM_.RESULT_CONTENT);
                    setShowButton(true); // Add this line
                })
                .catch((error) => {
                    setTitle("데이터 전송에 실패했습니다. 오류: " + error.message);
                    setContent("처음부터 다시 시도해주십시오.")
                });
        }
        console.log(User);
    }, []);

    return(
        <>
            <div className="centered-square">
                <p className="title">{formatStringToJsx(title)}</p>
                <p className="context">{formatStringToJsx(content)}</p>
                <div className="center-button">
                    {showButton && <NextButton goto={PAGE_.START}/>} // Modify this line
                </div>
            </div>
        </>
    );
}

const formatStringToJsx = (str) => {
    return str.split('\n').map((line, index) =>
        <React.Fragment
            key={index}>{line}<br/>
        </React.Fragment>
    );
}


const isEmpty = (value) => {
    return (value === "" || value === null);
}

export default ResultForm;