import React from "react";
import styles from './Header.module.css';

const headerColorStrategy = {
    transparent: styles['header__color-transparent'],
    primary: styles['header__color-primary'],
}

const Header = ({children,color='transparent',className = '',...props}) => (
    <header
        className={`
            ${styles.header}
            ${headerColorStrategy[color]}
            ${className}
             `}
        {...props}
    >
        {children}
    </header>
)

export default Header;
