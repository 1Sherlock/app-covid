import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from "react-router-dom";
import Layout from "../components/Layout";

const Dashboard = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const addResult = () => {
      props.history.push("/addresult");
    };

    const showInfo = () => {
      props.history.push("/testResult/id");
    };

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
       <Layout>
           <div className="container">
               <div className="d-flex my-3 justify-content-between users-number-row">
                   <div className="">
                       <h4>Пользователи <small className="text-danger">902 ta</small></h4>
                   </div>

                   <div className="d-flex">
                       <button onClick={addResult} className="btn btn-primary mr-4 px-4 font-weight-bold shadow-none" type="button" name="search">+
                       </button>

                       <div className="input-group">
                           <input className="form-control py-2 shadow-none" type="search" placeholder="Поиск..."
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
                           <th></th>
                           <th></th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button onClick={showInfo} className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm shadow-none">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td>Mary</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>Moe</td>
                           <td>
                               <button className="btn btn-primary btn-sm shadow-none">
                                   Посмотреть
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-success btn-sm shadow-none">
                                   Изменить
                               </button>
                           </td>
                           <td>
                               <button className="btn btn-outline-danger btn-sm">
                                   <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="delete"
                                        width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                       <path
                                           d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                                   </svg>
                               </button>
                           </td>
                       </tr>

                       </tbody>
                   </table>
               </div>

               <div className="d-flex justify-content-start">
                   <ul className="pagination">
                       <li className="page-item active"><a className="page-link" href="#">1</a></li>
                       <li className="page-item"><a className="page-link" href="#">2</a></li>
                       <li className="page-item"><a className="page-link" href="#">3</a></li>
                       <li className="page-item"><a className="page-link" href="#"> 95 </a></li>
                       <li className="page-item"><a className="page-link" href="#"> » </a></li>
                   </ul>
               </div>
           </div>
       </Layout>
    );
};

export default Dashboard;