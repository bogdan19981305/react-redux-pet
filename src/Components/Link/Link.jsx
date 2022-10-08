import React from "react";
import {Link as RouterLink} from "react-router-dom";
import styles from './Link.module.css';

const Link = ({className = '',...props}) => <RouterLink className={`${styles.link} ${className}`} {...props} />

export default Link;