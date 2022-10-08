import React from "react";
import styles from './Header.module.css';

const Header = ({children,className = '',...props}) => (
    <header
        className={`${styles.header} ${className}`}
        {...props}
    >
        {children}
    </header>
)

export default Header;
