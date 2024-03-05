import React from 'react';
import '../../css/form/StartForm.css';
import NextButton from "../widget/NextButton";
import {START_FORM_CONTENT, START_FORM_TITLE} from "../../js/texts";
import {FIRST_REGISTER_PAGE} from "../../js/RouteLink";
import {User} from "../../js/User";

const StartForm = () => {
    resetUser(User);
    return(
        <>
            <div className="centered-square">
                <p className="title">{formatStringToJsx(START_FORM_TITLE)}</p>
                <p className="context">{formatStringToJsx(START_FORM_CONTENT)}</p>
                <div className="center-button">
                    <NextButton goto={FIRST_REGISTER_PAGE}/>
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