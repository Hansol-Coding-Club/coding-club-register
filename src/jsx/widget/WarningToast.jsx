import {toast, ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';


const WarningToast = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1700}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}

const inputEmptyWarning = () => toast.error("모든 필수 필드를 채워주세요.");
const studentNumberInvalidWarning = () => toast.error("학번은 숫자 5글자로 입력해주세요");
const phoneNumberInvalidWarning = () => toast.error("올바른 형식의 전화번호를 입력해주세요");

export { WarningToast, inputEmptyWarning, studentNumberInvalidWarning, phoneNumberInvalidWarning };