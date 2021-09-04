import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";


const Layout = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div id="forDashboard">
            <div className="border-bottom">
                <nav className="navbar navbar-expand-md container navbar-light my-2">
                    <Link to="/dashboard" className="navbar-brand font-weight-bold text-primary">Covid-19</Link>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-item-dropdown">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret>
                                    <img src="/user.png" alt="" className="mr-3"/> Covid Admin
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Link to="/" className="text-decoration-none text-dark"> Выход </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="border-bottom link-row">
                <nav className="navbar navbar-expand-md container navbar-light my-1">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="/dashboard" className="text-decoration-none text-dark"><img src="/menu.png" alt="" className="mr-1"/> Пользователи</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/laboratory" className="text-decoration-none text-dark px-md-5 px-0"><img
                                src="/menu.png" alt="" className="mr-1"/> Лаборатория (название)</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/sampling" className="text-decoration-none text-dark"><img src="/menu.png" alt=""
                                                                                                  className="mr-1"/> Место
                                забора анализа</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {props.children}

        </div>
    );
};

export default Layout;