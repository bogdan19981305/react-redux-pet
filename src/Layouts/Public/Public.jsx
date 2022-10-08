import React from "react";
import { Outlet } from "react-router-dom";
import Header from 'Layouts/Header';
import Footer from "Layouts/Footer";
import {Button,Link} from "Components";

const Public = () => (
    <>
        <Header className='d-flex jc-items-end align-items-center'>
            <Link>Pricing</Link>
            <Link>About</Link>
            <Link to='auth/sign-in'>
                <Button>Sign in</Button>
            </Link>
        </Header>
        <Outlet />
        <Footer />
    </>
);

export default Public;