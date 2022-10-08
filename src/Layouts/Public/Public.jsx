import React from "react";
import { Outlet } from "react-router-dom";
import Header from 'Layouts/Header';
import Link from "Components/Link";
import {Button} from "Components";

const Public = () => (
    <>
        <Header className='d-flex jc-items-end align-items-center'>
            <Link>Pricing</Link>
            <Link>About</Link>
            <Button>Sign in</Button>
        </Header>
        <Outlet />
        <footer>footer</footer>
    </>
);

export default Public;