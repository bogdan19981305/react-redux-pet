import React from "react";
import styles from './Logo.module.css';
import Link from "../Link";
import {Icon} from "Components";

const Logo = () => (
    <Link to='/' className={styles.logo}>
        <Icon icon='logo' />
        <p className={styles.logoLabel}>Rival<b className='text-color-400 text-weight-400'>CMS</b></p>
    </Link>
);

export default Logo;

