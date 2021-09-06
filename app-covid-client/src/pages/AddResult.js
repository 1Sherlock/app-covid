import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {getLocations} from "../redux/actions/locationAction";
import {getLabos} from "../redux/actions/laboAction";
import {connect} from "react-redux";
import {save} from "../redux/actions/resultAction";

const AddResult = (props) => {
    useEffect(() => {
        props.getLabos();
        props.getLocations();
    }, [])
    return (
        <Layout>

            <div className="container py-3">
                <h3 className="text-uppercase">Добавить новое</h3>

                <AvForm onValidSubmit={(e, v) => props.save(v, props.history, props.location.state ? props.location.state.item.id : null )} model={props.location.state ? {...props.location.state.item, laboratory: props.location.state.item.laboratory.id, place: props.location.state.item.place.id}:{}}>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Информация о пользователе</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <AvField type="text" label={<>ID <span className="text-danger"> * </span></>}
                                     className="shadow-none" placeholder="id" required
                                     name="serial"/>

                            <AvField type="text" label={<>Полное имя <span className="text-danger"> * </span></>}
                                     className="shadow-none" placeholder="Полное имя"
                                     required name="fullName"/>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <AvField type="text" className="shadow-none"
                                     label={<> Дата рождения <span className="text-danger"> * </span></>}
                                     placeholder="Дата рождения"
                                     required name="birthDate"/>

                            <AvField name="gender" type="select" className="shadow-none" required
                                     label={<>Пол <span className="text-danger"> * </span></>}>
                                <option>-- Выберите пол --</option>
                                <option value="Mужчина / Male">Mужчина</option>
                                <option value="Женщина / Female">Женщина</option>
                            </AvField>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <AvField type="text" label={<> Адрес <span className="text-danger"> * </span></>}
                                     className="shadow-none" placeholder="Адрес " required
                                     name="address"/>

                            <AvField type="text" className="shadow-none" label={<>Серия и номер паспорта <span
                                className="text-danger"> * </span></>}
                                     placeholder="Серия и номер паспорта " required name="passportNumber"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Анализ</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <AvField type="text" label={<> Метод исследования Ru <span
                                    className="text-danger"> * </span></>} className="shadow-none"
                                       placeholder="Метод исследования Ru " required name="methodRu"/>
                            </div>

                                <AvField type="text" label={<>Метод исследования En <span
                                    className="text-danger"> * </span></>} className="shadow-none"
                                       placeholder="Метод исследования En" required name="methodEn"/>
                        </div>

                        <div className="col-md-4 col-sm-6">
                                <AvField name="laboratory" type="select" label={<>Лаборатория (название) <span
                                    className="text-danger"> * </span></>} className="shadow-none" required>
                                    <option>-- Выберите --</option>
                                    {props.labos.map(item => (
                                        <option
                                            value={item.id}>{item.nameRu}
                                        </option>
                                    ))}
                                </AvField>

                                <AvField name="place" className="shadow-none" type="select" label={<> Место забора анализа <span
                                    className="text-danger"> * </span></>} required>
                                    <option>-- Выберите --</option>
                                    {props.locations.map(item => (
                                        <option
                                            value={item.id}>{item.nameRu}
                                        </option>
                                    ))}
                                </AvField>
                        </div>

                        <div className="col-md-4 col-sm-6">

                                <AvField name="status" label={<> Статус <span className="text-danger"> * </span></>} className="shadow-none" required type="select">
                                    <option>-- Выберите статус --</option>
                                    <option value="Positive / Положительный"> Positive / Положительный</option>
                                    <option value="Negative / Отрицательный"> Negative / Отрицательный</option>
                                </AvField>

                                <AvField label={<>Дата сдачи анализа <span
                                    className="text-danger"> * </span></>} type="text" className="shadow-none"
                                       placeholder="Дата сдачи анализа  " required name="analiseDate"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Добавить</button>
                        <span className="text-danger"> *</span>
                        <small>- Ячейки, которые нужно заполнить!</small>
                    </div>
                </AvForm>

            </div>

        </Layout>

    );
};

const mapStateToProps= (state) => {
    return {
        labos: state.labo.labos,
        locations: state.location.locations
    }
}

export default connect(mapStateToProps, {getLabos, getLocations, save})(AddResult);