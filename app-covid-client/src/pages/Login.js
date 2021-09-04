import React from 'react';
import {Link} from "react-router-dom";

const Login = (props) => {

    const login = () => {
        props.history.push("/dashboard");
    };

    return (
        <div id="login">
            <div className="border-bottom">
                <nav className="navbar navbar-expand-lg navbar-light bg-white container">
                    <Link to="/" className="navbar-brand text-primary font-weight-bold">
                        Covid-19
                    </Link>
                </nav>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 offset-4 pt-md-5 pt-3">
                        <form action="">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h2 className="text-center mb-3">Kirish </h2>

                                    <div className="form-group">
                                        <input type="text" className="form-control shadow-none" placeholder="Login" name="login"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control shadow-none" placeholder="Parol" name="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="save" id="forSave" value="1"/>
                                        <label htmlFor="forSave" className="ml-2"> Eslab qol </label>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" type="submit" name="Kirish" onClick={login}>Kirish</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;