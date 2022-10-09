import React from "react";
import styles from './Footer.module.css';
import Link from "Components/Link";
import {Logo} from "Components";

const links = [
    {
        children: 'Register',
        to: '/auth/register',
        key: 1
    },
    {
        children: 'Terms & conditions',
        to: '/',
        key: 2
    },
    {
        children: 'Privacy policy',
        to: '/',
        key: 3
    },
    {
        children: 'Documentation',
        to: '/',
        key: 4
    },
    {
        children: 'Pricing',
        to: '/',
        key: 5
    },
    {
        children: 'Our blog',
        to: '/',
        key: 6
    },
]

const Footer = () => (
    <footer className={styles.footer}>
        <div className="container d-flex direction-column text-center gap-800 jc-around align-items-center">
            {links.map(link => <Link {...link} />)}
            <Logo />
        </div>
    </footer>
);

export default Footer;