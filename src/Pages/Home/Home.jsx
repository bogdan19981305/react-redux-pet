import React from "react";
import heroBackgroundXl from 'Assets/Images/Hero-xl.png';
import heroBackgroundSm from 'Assets/Images/Hero-sm.png';
import {ReactComponent as TableAsset} from "Assets/Images/table-asset.svg";
import styles from './Home.module.css';
import {Button, Link} from "Components";

const Home = () => (
    <div className={`${styles.homepage} d-flex`}>
        <div className="container d-flex align-items-center direction-column">
            <picture>
                <source srcSet={heroBackgroundXl} media="(min-width: 768px)" />
                <img className={styles.homepage__background} alt='hero bg' src={heroBackgroundSm} />
            </picture>
            <h1>Rival<b className='text-color-800 text-center'>CMS</b></h1>
            <h2 className='padding-bottom-xl-300 text-center'>Fresh new way to build sites</h2>
            <Link to='auth/sign-in'>
                <Button size='large' className='margin-bottom-500'>Get started free</Button>
            </Link>
            <p>*no card needed</p>
            <TableAsset className={styles.homepage__tableAsset} />
        </div>
    </div>
);

export default Home;