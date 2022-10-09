import React from "react";
import {Icon,Input} from "Components";
import styles from './Item.module.css';
import {useField} from "formik";

const Item = ({label,autocomplete = '',icon,inputType,...props}) => {

    const [field,meta] = useField(props);

    const errorClassName = (meta.error && meta.touched) ? styles['item__withError'] : null;
    const checkedClassName = (!meta.error && meta.touched) ? styles['item__checked'] : null

    const fieldInputStrategy = {
        text: <Input autoComplete={autocomplete} className={`${errorClassName} ${checkedClassName}`} {...field} />,
        password: <Input autoComplete={autocomplete} type='password' className={`${errorClassName} ${checkedClassName}`} {...field} />
    }

    return (
        <div className={styles.item}>
            <div className={styles.item__withIcon}>
                {icon && <Icon icon={icon} />}
                <label className={styles.item__label} htmlFor={props.name}>{label}</label>
            </div>
            {fieldInputStrategy[inputType]}
            {meta.touched && meta.error ? (
                <p className="text-error-400 text-end">{meta.error}</p>
            ) : null}
        </div>
    )
}

export default Item;