import React from 'react';
import styles from '../../css/form/StartForm.module.css';
import NextButton from "../widget/NextButton";
import { FORM_ } from "../../js/texts";
import { PAGE_ } from "../../js/RouteLink";
import { User } from "../../js/User";

const StartForm = () => {
    resetUser(User);
    return (
        <>
            <div className={styles['centered-square']}>
                <p className={styles.title}>{formatStringToJsx(FORM_.START_TITLE)}</p>
                <p className={styles.context}>{formatStringToJsx(FORM_.START_CONTENT)}</p>
                <div className={styles['center-button']}>
                    <NextButton goto={PAGE_.FIRST_REGISTER}/>
                </div>
            </div>
        </>
    );
}

const resetUser = (user) => {
    for (let key in user) {
        if (user.hasOwnProperty(key)) {
            user[key] = null;
        }
    }
    return true;
}

const formatStringToJsx = (str) => {
    return str.split('\n').map((line, index) =>
        <React.Fragment
            key={index}>{line}<br/>
        </React.Fragment>
    );
}

export default StartForm;