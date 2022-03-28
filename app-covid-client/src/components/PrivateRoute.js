import React, {useState} from 'react';
import axios from "axios";
import {API_PATH, CONFIG, TOKEN_NAME} from "../tools/constants";
import {Route, Redirect} from "react-router-dom";
// import NotFound from "../pages/NotFound";
// import AdminLayout from "./AdminLayout";
import {connect} from "react-redux";
import {updateState} from "../redux/actions/authAction";
import NotFound from "../pages/NotFound";

const PrivateRoute = (props) => {
    const [show, setShow] = useState(false);

    axios.get(API_PATH + "user/me", CONFIG)
        .then((res) => {
            const role = res.data.roles;
            props.updateState({me: res.data});
            if (props.role === "admin") {
                role.filter(item => item.name === "ROLE_ADMIN").length > 0 ?
                    setShow(true) : setShow(false)
            } else {
                setShow(true)
            }
        })
        .catch(() => {
            setShow(false)
        })

    return (localStorage.getItem(TOKEN_NAME) ?
        show ? <Route {...props}/> : <Route component={NotFound}/>
        : <Redirect to="/"/>
    )
};

export default connect(null, {updateState})(PrivateRoute);


