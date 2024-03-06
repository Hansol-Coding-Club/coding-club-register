import {toast, ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';


const WarningToast = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1300}
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

const showWarningToast = () => toast.error("모든 필수 필드를 채워주세요.")


export { WarningToast, showWarningToast };