import React from "react";
import "../../css/widget/InputField.css";

export const InputField = ({label, placeholder, redStar, width, height, onChange}) => {
    return (
        <div className="input-container">
            <label className="input-label">
                {label}
                {redStar && <span className="red-star"> *</span>}
            </label>
            <textarea className="input-box" placeholder={placeholder} onChange={onChange}
                    style={{width: width, height: height,}}
                    onWheel={(e) => e.stopPropagation()} />
        </div>
    );
}