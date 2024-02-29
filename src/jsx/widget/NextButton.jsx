import "../../css/NextButton.css"
import { useNavigate } from 'react-router-dom';

const NextButton = ({text = "신청하기", imgSrc = "/red.png", goto, onClick }) => {
    const navigate = useNavigate();

    const handleNextButtonClick = () => {
        if (onClick && onClick() === false) {
            return;
        }
        navigate(goto);
    };

    return(
        <button className="button" onClick={handleNextButtonClick}>
            <span>{text}</span>
            <img className="button-icon" src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt=""/>
        </button>
    )
}

export default NextButton;