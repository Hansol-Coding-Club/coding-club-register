import React from 'react';
import '../../css/StartForm.css';
import NextButton from "../widget/NextButton";
import {START_FORM_CONTENT, START_FORM_TITLE} from "../../js/texts";
import {FIRST_REGISTER_PAGE} from "../../js/RouteLink";

const StartForm = () => {

    return(
        <div className="centered-square">
            <p className="title">{formatStringToJsx(START_FORM_TITLE)}</p>
            <p className="context">{formatStringToJsx(START_FORM_CONTENT)}</p>
            <div className="center-button">
                <NextButton goto={FIRST_REGISTER_PAGE}/>
            </div>
        </div>
    );
}

function formatStringToJsx(str) {
    return str.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>)
}

export default StartForm;