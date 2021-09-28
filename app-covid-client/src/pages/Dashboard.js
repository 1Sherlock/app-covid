import React, {useEffect, useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalFooter} from 'reactstrap';
import {Link} from "react-router-dom";
import Layout from "../components/Layout";
import {deleteResult, getResults, updateState} from "../redux/actions/resultAction";
import {connect} from "react-redux";
import PaginationComponent from "../components/PaginationComponent";

const Dashboard = (props) => {

    useEffect(() => {
        props.getResults(0, "");
    }, []);

    const addResult = () => {
        props.history.push("/addresult");
    };

    const showInfo = (id) => {
        props.history.push("/testResult/" + id);
    };

    const getData = (payload) => {
        props.getResults(payload.page, "");
    }
    console.log(props);



    return (
        <Layout location={props.history.location.pathname}>
            <div className="container">
                <div className="d-flex my-3 justify-content-between users-number-row">
                    <div className="">
                        <h4>Количество пользователей: <span className="text-danger">{props.totalElements}</span></h4>
                    </div>

                    <div className="d-flex">
                        <button onClick={addResult} className="btn btn-primary mr-4 px-4 font-weight-bold shadow-none"
                                type="button" name="search">+
                        </button>

                        <div className="input-group">
                            <input className="form-control py-2 shadow-none" onChange={(e) => props.getResults(0, e.target.value)} type="search" placeholder="Поиск..."
                                   id="example-search-input"/>
                            <span className="input-group-append">
                                   <button className="btn btn-primary shadow-none" type="button">
                                       <img src="search.png" alt=""/>
                                   </button>
                               </span>
                        </div>
                    </div>
                </div>

                <div className="part-table">
                    <table className="table table-bordered table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Полное имя</th>
                                <th>Дата рождения</th>
                                <th>Серия и номер паспорта</th>
                                <th>Пол</th>
                                <th>Действие</th>
                                <th/>
                                <th/>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                        {props.results.map(item => (
                            <tr>
                                <td>{item.fullName}</td>
                                <td>{item.birthDate}</td>
                                <td>{item.passportNumber}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button onClick={() => showInfo(item.id)} className="btn btn-primary btn-sm shadow-none">
                                        Посмотреть
                                    </button>
                                </td>
                                <td>
                                    <a href={"https://webtopdf.expeditedaddons.com/?api_key=53YH4OUM7G8Q9BJI4NVF6CW590X0SDZT7L1KEA8R3621P2&content=https://app-server-app.herokuapp.com/sertificate/" + item.id} target="_blank">
                                        <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="file-pdf"
                                             width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path
                                                d="M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-.7-29.9 8.3-33.4 21.4-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" />
                                        </svg>
                                    </a>
                                </td>
                                <td>
                                    <button className="btn btn-success btn-sm shadow-none" onClick={() => props.history.push("/addresult", {item})}>
                                        Изменить
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm shadow-none" onClick={() => props.updateState({isDeleteModalShow: true, selectedId: item.id})}>
                                        <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                             width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path
                                                d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>

                <PaginationComponent
                    totalPages={props.totalPages}
                    currentPage={props.page}
                    getPageData={getData}
                />
            </div>

            <Modal isOpen={props.isDeleteModalShow} toggle={() => props.updateState({isDeleteModalShow: false, selectedId: null})}>
                <ModalHeader>
                    Вы уверены, что хотите удалить?
                </ModalHeader>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={props.deleteResult}>Удалить</button>
                    <button className="btn btn-secondary" onClick={() => props.updateState({isDeleteModalShow: false, selectedId: null})}>Отменить</button>
                </ModalFooter>
            </Modal>


        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        results: state.user.results,
        isDeleteModalShow: state.user.isDeleteModalShow,
        selectedId: state.user.selectedId,
        totalElements: state.user.totalElements,
        totalPages: state.user.totalPages,
        page: state.user.page,
    }
}

export default connect(mapStateToProps, {getResults, deleteResult, updateState})(Dashboard);