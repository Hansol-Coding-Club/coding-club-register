import React, { useState } from 'react';
import {InputField} from "../widget/InputField";
import NextButton from "../widget/NextButton";
import "../../css/SecondRegisterForm.css"
import {RESULT_PAGE} from "../../js/RouteLink";
import {User} from "../../js/User";

const MAL_INPUT_WIDTH = "680px"
const MAL_INPUT_HEIGHT = "300px"

const PORTFOLIO_INPUT_WIDTH = "680px"
const PORTFOLIO_INPUT_HEIGHT = "50px"

const SecondRegisterForm = () => {
    const [mal, setMal] = useState("");
    const [portfolio, setPortfolio] = useState("");

    const handleNextClick = () => {
        if (mal === "" || portfolio === "") {
            alert("모든 필드를 채워주세요.");
            return false;
        } else {
            User.mal = mal;
            User.portfolio = portfolio;
            return true;
        }
    };

    return (
        <div className="container">
            <div className="header">Codingclub 동아리 부원모집</div>

            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
                <InputField
                    label="하고싶은 말 (자유 기입)"
                    placeholder="하고싶은 말을 자유롭게 작성해주세요."
                    width={MAL_INPUT_WIDTH}
                    height={MAL_INPUT_HEIGHT}
                    value={mal}
                    onChange={e => setMal(e.target.value)}
                />
            </div>

            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "40px"}}>
                <InputField
                    label="포트폴리오 (있을시에만 기입)"
                    placeholder="http://"
                    width={PORTFOLIO_INPUT_WIDTH}
                    height={PORTFOLIO_INPUT_HEIGHT}
                    value={portfolio}
                    onChange={e => setPortfolio(e.target.value)}
                />
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <NextButton text="다음으로" goto={RESULT_PAGE} onClick={handleNextClick}/>
            </div>
        </div>
    );
}

export default SecondRegisterForm;