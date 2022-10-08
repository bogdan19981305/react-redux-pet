import React from "react";
import {Icon, Input} from "Components";
import Form from "Blocks/Form";
import styles from './Item.module.css';

const Item = ({name,label,icon,inputType,...props}) => {

    const ctx = Form.useFormContext();

    const fieldInputStrategy = {
        text: <Input {...ctx} id={name} name={name} {...props} />
    }

    return (
        <div className={styles.item}>
            <div className={styles.item__withIcon}>
                {icon && <Icon icon={icon} />}
                <label className={styles.item__label} htmlFor={name}>{label}</label>
            </div>
            {fieldInputStrategy[inputType]}
        </div>
    )
}

export default Item;