import {RESULT_FORM_CONTENT, RESULT_FORM_TITLE} from "../../js/texts";
import NextButton from "../widget/NextButton";
import React, { useState } from "react";
import {START_PAGE} from "../../js/RouteLink";
import "../../css/ResultForm.css"
import {User} from "../../js/User";
import {db} from "../../js/firebase";
import { ref, set } from "firebase/database";

const ResultForm = () => {
    const [title, setTitle] = useState(RESULT_FORM_TITLE);
    const [content, setContent] = useState(RESULT_FORM_CONTENT)

    const isUserEmpty = Object.values(User).every(x => (x === null));

    if (isUserEmpty) {
        setTitle("비정상적인 방법으로 페이지에 접근하셨습니다.");
        setContent("");
    } else {
        set(ref(db, 'users/' + User.studentNumber), User)
            .then(() => {})
            .catch((error) => {
                setTitle("데이터 전송에 실패했습니다. 오류: " + error.message);
                setContent("처음부터 다시 시도해주십시오.")
            });
    }

    return(
        <div className="centered-square">
            <p className="title">{formatStringToJsx(title)}</p>
            <p className="context">{formatStringToJsx(content)}</p>
            <div className="center-button">
                <NextButton goto={START_PAGE}/>
            </div>
        </div>
    );
}

function formatStringToJsx(str) {
    return str.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>)
}

export default ResultForm;