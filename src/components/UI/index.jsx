import React from "react"

//Styles
import "./UI.scss"

export const FieldText = ({ code }) => {

    return (
        <div className="field__text">
            <span>{code}</span>
        </div>
    )
}

export const FieldResult = ({ code }) => {

    return (
        <div className="field__result">
            <span>{code}</span>
        </div>
    )
}

export const Input = ({ placeholder, onChange, value, ...props }) => {

    return (
        <input
            className="field__input"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    )
}

export const Button = ({ children, onClick, type }) => {

    return (
        <button
            className="field__button"
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}