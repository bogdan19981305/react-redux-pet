import React from "react";
import styles from './Button.module.css';

const buttonColorStrategy = {
    primary: styles['button__color-primary'],
    accent: styles['button__color-accent']
}

const buttonTypeStrategy = {
    solid: styles['button__type-solid'],
    primary: styles['button__type-primary']
}

const buttonSizeStrategy = {
    small: styles['button__size-small'],
    middle: styles['button__size-middle'],
    large: styles['button__size-large']
}

const Button = ({
                    children,
                    buttonType = 'solid',
                    className = '',
                    color = 'primary',
                    size = 'small',
                    ...props
}) => (
    <button
        className={`
            ${styles.button}
            ${buttonColorStrategy[color]}
            ${buttonTypeStrategy[buttonType]}
            ${buttonSizeStrategy[size]}
            ${className}
        `}
        {...props}
    >
        {children}
    </button>
);

export default Button;