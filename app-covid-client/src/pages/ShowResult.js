import React from 'react';
import Layout from "../components/Layout";

const ShowResult = () => {
    return (
        <Layout>

            <div className="bg-light pt-3">
                <div className="container bg-white border p-md-4 p-3">
                    <h4 className="mb-md-4 mb-3">Подтверждение результата теста COVID-19</h4>

                    <div className="">
                        <table className="table table-striped table-bordered">
                            <tbody>
                            <tr>
                                <td className="font-weight-bold">Полное имя</td>
                                <td>BABAJONOV GAYRAT</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">Дата рождения</td>
                                <td>15.10.1985</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">Пол</td>
                                <td>Mужчина / Male</td>
                            </tr>
                            <tr>
                                <td className="font-weight-bold">Адрес</td>
                                <td>-</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 className="mb-3">Анализ</h4>

                    <div className="">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>Номер</th>
                                <th>Дата регистрации</th>
                                <th>Статус</th>
                                <th>Метод исследования</th>
                                <th>Лаборатория</th>
                                <th>Станция</th>
                                <th>Распечатать</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>7116</td>
                                <td>04.09.2021 15:16</td>
                                <td>Negative / Отрицательный</td>
                                <td>Полимеразная цепная реакция в реальном времени (ПЦР)</td>
                                <td>JACKSOFT MEDICAL DIAGNOSTICS SERVICES MCHJ QK / JACKSOFT MEDICAL DIAGNOSTICS
                                    SERVICES
                                </td>
                                <td>
                                    JACKSOFT MEDICAL DIAGNOSTICS SERVICES MCHJ QK / JACKSOFT MEDICAL DIAGNOSTICS
                                    SERVICES
                                </td>
                                <td className="text-center text-primary">
                                    <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="file-pdf"
                                         width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7-3.8-21.3-19.5-29.6-32.9-30.2-15.8-.7-29.9 8.3-33.4 21.4-6.6 24-.7 56.8 10.1 98.6-13.6 32.4-35.3 79.5-51.2 107.5-29.6 15.3-69.3 38.9-75.2 68.7-1.2 5.5.2 12.5 3.5 18.8 3.7 7 9.6 12.4 16.5 15 3 1.1 6.6 2 10.8 2 17.6 0 46.1-14.2 84.1-79.4 5.8-1.9 11.8-3.9 17.6-5.9 27.2-9.2 55.4-18.8 80.9-23.1 28.2 15.1 60.3 24.8 82.1 24.8 21.6 0 30.1-12.8 33.3-20.5 5.6-13.5 2.9-30.5-6.2-39.6-13.2-13-45.3-16.4-95.3-10.2-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7 6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4-4.9-19.9-5.6-48.1-2.7-51.4.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2-21.6 4.9-41.3 13-58.9 20.2-4.2 1.7-8.3 3.4-12.3 5 13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6 40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"></path>
                                    </svg>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default ShowResult;