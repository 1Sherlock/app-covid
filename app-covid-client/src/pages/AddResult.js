import React from 'react';
import Layout from "../components/Layout";

const AddResult = () => {
    return (
        <Layout>

            <div className="container py-3">
                <h3 className="text-uppercase">Добавить новое</h3>

                <form action="">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Информация о пользователе</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="id"> ID <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="id" required
                                       name="test-id" id="id"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fullName"> Полное имя <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="Полное имя"
                                       required name="test-id" id="fullName"/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="data-birthday"> Дата рождения <span className="text-danger"> * </span></label>
                                <input id="data-birthday" type="text" className="form-control shadow-none" placeholder="Дата рождения"
                                       required name="birthday"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender"> Пол <span className="text-danger"> * </span></label>
                                <select name="gender" id="gender" className="form-control shadow-none" required>
                                    <option value="">-- Выберите пол --</option>
                                    <option value="Mужчина / Male">Mужчина</option>
                                    <option value="Женщина / Female">Женщина</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="testId"> Адрес <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="Адрес " required
                                       name="test-id" id="testId"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="passport-number"> Серия и номер паспорта <span
                                    className="text-danger"> * </span></label>
                                <input id="passport-number" type="text" className="form-control shadow-none"
                                       placeholder="Серия и номер паспорта " required name="passport-id"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Анализ</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="methodRu"> Метод исследования Ru <span
                                    className="text-danger"> * </span></label>
                                <input id="methodRu" type="text" className="form-control shadow-none"
                                       placeholder="Метод исследования Ru " required name="method_ru"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="methodEn"> Метод исследования En <span
                                    className="text-danger"> * </span></label>
                                <input id="methodEn" type="text" className="form-control shadow-none"
                                       placeholder="Метод исследования En" required name="method_en"/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="lab-name"> Лаборатория (название) <span
                                    className="text-danger"> * </span></label>
                                <select id="lab-name" name="laboratory" className="form-control shadow-none" required>
                                    <option value="">-- Выберите --</option>
                                    <option
                                        value="JACKSOFT MEDICAL DIAGNOSTICS SERVICES MCHJ QK / JACKSOFT MEDICAL DIAGNOSTICS SERVICES"> JACKSOFT
                                        MEDICAL DIAGNOSTICS SERVICES MCHJ QK
                                    </option>
                                    <option value="OOO VERSUS MEDICAL / LTD VERSUS MEDICAL"> OOO VERSUS MEDICAL</option>
                                    <option value="DIL SHIFO FARM / DIL SHIFO FARM">  DIL SHIFO FARM </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="loc"> Место забора анализа  <span className="text-danger"> * </span></label>
                                <select id="loc" name="location" className="form-control shadow-none" required>
                                    <option value="">-- Выберите --</option>
                                    <option
                                        value="JACKSOFT MEDICAL DIAGNOSTICS SERVICES MCHJ QK / JACKSOFT MEDICAL DIAGNOSTICS SERVICES"> JACKSOFT
                                        MEDICAL DIAGNOSTICS SERVICES MCHJ QK
                                    </option>
                                    <option value="OOO VERSUS MEDICAL / LTD VERSUS MEDICAL"> OOO VERSUS MEDICAL</option>
                                    <option value="DIL SHIFO FARM / DIL SHIFO FARM"> OOO DIL SHIFO FARM </option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="covid-status"> Статус   <span className="text-danger"> * </span></label>
                                <select id="covid-status" name="status" className="form-control shadow-none" required>
                                    <option value="">-- Выберите статус --</option>
                                    <option value="Positive / Положительный"> Positive / Положительный </option>
                                    <option value="Negative / Отрицательный"> Negative / Отрицательный </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="data-analise">Дата сдачи анализа  <span
                                    className="text-danger"> * </span></label>
                                <input id="data-analise" type="text" className="form-control shadow-none"
                                       placeholder="Дата сдачи анализа  " required name="tested-data"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" name="enter-data" type="submit" id="send">Добавить</button>
                        <span className="text-danger"> *</span>
                        <small>- Ячейки, которые нужно заполнить!</small>
                    </div>
                </form>

            </div>

        </Layout>

    );
};

export default AddResult;