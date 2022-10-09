import React from "react";
import {Outlet,Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Auth = () => {
    const currentUser = useSelector(({auth}) => auth.currentUser);
    if(currentUser) return <Navigate to='/admin/view-site' />

    return (
        <Outlet />
        )
}

export default Auth