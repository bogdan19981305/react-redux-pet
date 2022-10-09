import {Button, Link, Logo,User} from "Components";
import Aside from "../Aside";
import {Navigate, Outlet} from "react-router-dom";
import Header from "../Header";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "Redux/actions";

const Private = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(({auth}) => auth.currentUser);

    if(!currentUser) return <Navigate to='auth/sign-in' />

    return (
        <div>
            <Header color='primary' className='d-flex jc-between align-items-center'>
                <Logo/>
                <div className='d-flex align-items-center gap-800'>
                    <Button color='glow' size='xsm'>Pro plan</Button>
                    <Link onClick={() => dispatch(authActions.SignOut())}>
                        <User.Avatar />
                    </Link>
                </div>
            </Header>
            <div className='d-flex'>
                <Aside />
                <Outlet />
            </div>
        </div>

    )
};

export default Private;