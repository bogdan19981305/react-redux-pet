import React from "react";
import styles from './Input.module.css';

const Input = ({className,...props}) => (
    <input
        type='text'
        className={`
            ${styles.input}
            ${className}
        `}
        {...props}
    />
);

export default Input;