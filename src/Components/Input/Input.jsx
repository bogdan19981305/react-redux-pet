import React from "react";
import styles from './Input.module.css';
import {FastField} from "formik";

const Input = ({className,...props}) => (
        <FastField
            placeholder={props.placeholdre || 'type something...'}
            className={`
            ${styles.input}
            ${className}
        `}
            {...props}
        />

);

export default Input;