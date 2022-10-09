import React from "react";
import {Item} from "./common";
import styles from './Form.module.css';
import { Form,Formik } from 'formik';

const FormComponent = ({
    children,
    className,
    initialValues = {},
    onSubmit = data => console.log(data),
    ...props
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            {...props}
        >
            <Form
                className={`
            ${styles.form}
            ${className}
        `}
            >
                {children}
            </Form>
        </Formik>
    );
};

FormComponent.Item = Item;

export default FormComponent;