import React from 'react';
import '../../css/form/StartForm.css';
import NextButton from "../widget/NextButton";
import { FORM_ } from "../../js/texts";
import { PAGE_ } from "../../js/RouteLink";
import { User } from "../../js/User";

const StartForm = () => {
    resetUser(User);
    return(
        <>
            <div className="centered-square">
                <p className="title">{formatStringToJsx(FORM_.START_TITLE)}</p>
                <p className="context">{formatStringToJsx(FORM_.START_CONTENT)}</p>
                <div className="center-button">
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