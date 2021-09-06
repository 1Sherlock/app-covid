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