import React from "react";
import HeroBackground from 'Assets/Images/Hero-xl.png';
import styles from './Home.module.css';
import {Button} from "Components";

const Home = () => (
    <div className={`${styles.homepage} d-flex`}>
        <div className="container d-flex align-items-center direction-column">
            <img
                alt='hero bg'
                className={styles.homepage__background}
                src={HeroBackground}
            />
            <h1>Rival<b className='text-color-800'>CMS</b></h1>
            <h2 className='padding-bottom-xl-300'>Fresh new way to build sites</h2>
            <Button size='large' className='margin-bottom-500'>Get started free</Button>
        </div>
    </div>
);

export default Home;