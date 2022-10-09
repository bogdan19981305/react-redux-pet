import React from "react";
import {Outlet} from "react-router-dom";
import {connect} from "react-redux";

const Auth = (props) => {

    console.log(props);

    return (
        <Outlet />
        )
}

export default connect((data => ({data})))(Auth);