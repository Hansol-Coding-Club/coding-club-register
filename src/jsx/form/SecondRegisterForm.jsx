import React, { useState } from 'react';
import InputField from "../widget/InputField";
import NextButton from "../widget/NextButton";
import styles from '../../css/form/SecondRegisterForm.module.css';
import { PAGE_ } from "../../js/RouteLink";
import { User } from "../../js/User";

const MAL_INPUT_WIDTH = "680px"
const MAL_INPUT_HEIGHT = "300px"

const PORTFOLIO_INPUT_WIDTH = "680px"
const PORTFOLIO_INPUT_HEIGHT = "50px"

const SecondRegisterForm = () => {
    const [mal, setMal] = useState("");
    const [portfolio, setPortfolio] = useState("");

    const handleNextClick = () => {
        User.하고싶은말 = mal;
        User.포트폴리오 = portfolio;
        return true;
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>Codingclub 동아리 부원모집</div>
                <div className={styles['input-mal']}>
                    <InputField
                        label="하고싶은 말 (자유 기입)"
                        placeholder="하고싶은 말을 자유롭게 작성해주세요."
                        width={MAL_INPUT_WIDTH}
                        height={MAL_INPUT_HEIGHT}
                        value={mal}
                        onChange={e => setMal(e.target.value)}
                    />
                </div>

                <div className={styles['input-portfolio']}>
                    <InputField
                        label="포트폴리오 (있을시에만 기입)"
                        placeholder="http://"
                        width={PORTFOLIO_INPUT_WIDTH}
                        height={PORTFOLIO_INPUT_HEIGHT}
                        value={portfolio}
                        onChange={e => setPortfolio(e.target.value)}
                    />
                </div>

                <div className={styles['next-button-to-result']}>
                    <NextButton
                        text="다음으로"
                        goto={PAGE_.RESULT}
                        onClick={handleNextClick}
                        imgSrc={"/NextIcon.png"}
                    />
                </div>
            </div>
        </>
    );
}

export default SecondRegisterForm;