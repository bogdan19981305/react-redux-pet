import React from "react";
import styles from './Button.module.css';
import Icon from "../Icon";

const buttonColorStrategy = {
    primary: styles['button__color-primary'],
    accent: styles['button__color-accent'],
    glow: styles['button__color-glow']
}

const buttonTypeStrategy = {
    solid: styles['button__type-solid'],
    primary: styles['button__type-primary']
}

const buttonSizeStrategy = {
    xsm: styles['button__size-extraSmall'],
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
                    icon,
                    ...props
}) => (
    <button
        className={`
            ${styles.button}
            ${buttonTypeStrategy[buttonType]}
            ${buttonSizeStrategy[size]}
            ${buttonColorStrategy[color]}
            ${className}
        `}
        {...props}
    >
        {icon && <Icon icon={icon} />}
        {children}
    </button>
);

export default Button;