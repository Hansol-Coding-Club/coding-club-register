import { FORM_ } from "../../js/texts";
import NextButton from "../widget/NextButton";
import React, {useEffect, useState} from "react";
import { PAGE_ } from "../../js/RouteLink";
import { User } from "../../js/User";
import { db } from "../../js/firebase";
import { ref, set } from "firebase/database";
import styles from '../../css/form/ResultForm.module.css';

const ResultForm = () => {
    const [title, setTitle] = useState("잠시만 기다려주세요..");
    const [content, setContent] = useState("");
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        if (isUserEmpty()) {
            setTitle("비정상적인 방법으로\n페이지에 접근하셨습니다.");
            setContent("처음부터 다시 시도해주세요.");
            setShowButton(true);
        } else {
            set(ref(db, 'users/' + User.studentNumber), User)
                .then(() => {
                    setTitle(FORM_.RESULT_TITLE);
                    setContent(FORM_.RESULT_CONTENT);
                    setShowButton(true);
                })
                .catch((error) => {
                    setTitle("데이터 전송에 실패했습니다. 오류: " + error.message);
                    setContent("처음부터 다시 시도해주십시오.");
                    setShowButton(true);
                });
        }
        console.log(User);
    }, []);

    return(
        <>
            <div className={styles['centered-square']}>
                <p className={styles.title}>{formatStringToJsx(title)}</p>
                <p className={styles.context}>{formatStringToJsx(content)}</p>
                <div className={styles['center-button']}>
                    {showButton && <NextButton goto={PAGE_.START}/>}
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

const isUserEmpty = () =>
    isEmpty(User.studentNumber) &&
    isEmpty(User.name) &&
    isEmpty(User.phoneNumber) &&
    isEmpty(User.language);

const isEmpty = (value) => {
    return (value === "" || value === null);
}

export default ResultForm;