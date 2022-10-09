import React from "react";
import {Link as RouterLink} from "react-router-dom";
import styles from './Link.module.css';

const Link = ({className = '',color = 'white',...props}) => {

    const linkColorStrategy = {
        white: styles['link__color-white'],
        blue: styles['link__color-blue']
    }

    return (
        <RouterLink
            className={`
                ${styles.link}
                ${linkColorStrategy[color]}
                ${className}
            `}
            {...props}
        />
    )
};

export default Link;