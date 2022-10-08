import React from "react";
import {Item} from "./common";
import styles from './Form.module.css';
import { Form as FormikForm,FormikProvider,useFormik } from 'formik';

const AuthFormContext = React.createContext(null);

function useFormContext() {
    const context = React.useContext(AuthFormContext);

    if (!context) {
        throw new Error('This component must be used within a <Form> component.');
    }

    return context;
}

const Form = ({children,onSubmit,initialValues,className,...props}) => {

    const formData = useFormik({
        initialValues,
        onSubmit
    });

    return (
        <FormikProvider value={formData}>
            <FormikForm
                className={`
                ${styles.form}
                ${className}
            `}
                {...props}
            >
                {children}
            </FormikForm>
        </FormikProvider>
    );
};

export {

}

Form.Item = Item;
Form.useFormContext = useFormContext;

export default Form;