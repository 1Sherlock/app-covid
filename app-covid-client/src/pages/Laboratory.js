import React from 'react';
import Layout from "../components/Layout";

const Laboratory = (props) => {

    const addLab = () => {
        props.history.push("/addlab");
    };

    return (
        <Layout>
            <div className="container">
                <div className="d-flex my-3 justify-content-between users-number-row">
                    <div className="">
                        <h4>Лаборатория (название)</h4>
                    </div>

                    <div className="d-flex">
                        <button onClick={addLab} className="btn btn-primary mr-4 px-4 font-weight-bold shadow-none" type="button"
                                name="search"> +
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

                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>название (ru)</th>
                        <th>название (en)</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="py-2 "> OOO DIL SHIFO FARM</td>
                        <td className="py-2 "> DIL SHIFO FARM</td>
                        <td className="py-2 d-flex align-items-center justify-content-center">
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
                        <td className="py-2">OOO VERSUS MEDICAL</td>
                        <td className="py-2">LTD VERSUS MEDICAL</td>
                        <td className="py-2 d-flex align-items-center justify-content-center">
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
                        <td className="py-2">JACKSOFT MEDICAL DIAGNOSTICS SERVICES MCHJ QK</td>
                        <td className="py-2">JACKSOFT MEDICAL DIAGNOSTICS SERVICES</td>
                        <td className="py-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-outline-danger btn-sm shadow-none">
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
        </Layout>
    );
};

export default Laboratory;