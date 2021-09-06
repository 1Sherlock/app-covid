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
    }, []);

    const submit = (e) => {
        e.preventDefault();
        props.save(
            {
                serial: e.target.serial.value,
                fullName: e.target.fullName.value,
                birthDate: e.target.birthDate.value,
                gender: e.target.gender.value,
                address: e.target.address.value,
                passportNumber: e.target.passportNumber.value,
                methodRu: e.target.methodRu.value,
                methodEn: e.target.methodEn.value,
                laboratory: e.target.laboratory.value,
                place: e.target.place.value,
                status: e.target.status.value,
                analiseDate: e.target.analiseDate.value,
            },
            props.history,
            props.location.state ? props.location.state.item.id : null
        )
    }
    return (
        <Layout>

            <div className="container py-3">
                <h3 className="text-uppercase">Добавить новое</h3>

                {/*<AvForm onValidSubmit={(e, v) => props.save(v, props.history, props.location.state ? props.location.state.item.id : null )} model={props.location.state ? {...props.location.state.item, laboratory: props.location.state.item.laboratory.id, place: props.location.state.item.place.id}:{}}>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-md-12">*/}
                {/*            <p className="font-weight-bold">Информация о пользователе</p>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <AvField type="text" label={<>ID <span className="text-danger"> * </span></>}*/}
                {/*                     className="shadow-none" placeholder="id" required*/}
                {/*                     name="serial"/>*/}

                {/*            <AvField type="text" label={<>Полное имя <span className="text-danger"> * </span></>}*/}
                {/*                     className="shadow-none" placeholder="Полное имя"*/}
                {/*                     required name="fullName"/>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <AvField type="text" className="shadow-none"*/}
                {/*                     label={<> Дата рождения <span className="text-danger"> * </span></>}*/}
                {/*                     placeholder="Дата рождения"*/}
                {/*                     required name="birthDate"/>*/}

                {/*            <AvField name="gender" type="select" className="shadow-none" required*/}
                {/*                     label={<>Пол <span className="text-danger"> * </span></>}>*/}
                {/*                <option>-- Выберите пол --</option>*/}
                {/*                <option value="Mужчина / Male">Mужчина</option>*/}
                {/*                <option value="Женщина / Female">Женщина</option>*/}
                {/*            </AvField>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <AvField type="text" label={<> Адрес <span className="text-danger"> * </span></>}*/}
                {/*                     className="shadow-none" placeholder="Адрес " required*/}
                {/*                     name="address"/>*/}

                {/*            <AvField type="text" className="shadow-none" label={<>Серия и номер паспорта <span*/}
                {/*                className="text-danger"> * </span></>}*/}
                {/*                     placeholder="Серия и номер паспорта " required name="passportNumber"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="row">*/}
                {/*        <div className="col-md-12">*/}
                {/*            <p className="font-weight-bold">Анализ</p>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*            <div className="form-group">*/}
                {/*                <AvField type="text" label={<> Метод исследования Ru <span*/}
                {/*                    className="text-danger"> * </span></>} className="shadow-none"*/}
                {/*                       placeholder="Метод исследования Ru " required name="methodRu"/>*/}
                {/*            </div>*/}

                {/*                <AvField type="text" label={<>Метод исследования En <span*/}
                {/*                    className="text-danger"> * </span></>} className="shadow-none"*/}
                {/*                       placeholder="Метод исследования En" required name="methodEn"/>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}
                {/*                <AvField name="laboratory" type="select" label={<>Лаборатория (название) <span*/}
                {/*                    className="text-danger"> * </span></>} className="shadow-none" required>*/}
                {/*                    <option>-- Выберите --</option>*/}
                {/*                    {props.labos.map(item => (*/}
                {/*                        <option*/}
                {/*                            value={item.id}>{item.nameRu}*/}
                {/*                        </option>*/}
                {/*                    ))}*/}
                {/*                </AvField>*/}

                {/*                <AvField name="place" className="shadow-none" type="select" label={<> Место забора анализа <span*/}
                {/*                    className="text-danger"> * </span></>} required>*/}
                {/*                    <option>-- Выберите --</option>*/}
                {/*                    {props.locations.map(item => (*/}
                {/*                        <option*/}
                {/*                            value={item.id}>{item.nameRu}*/}
                {/*                        </option>*/}
                {/*                    ))}*/}
                {/*                </AvField>*/}
                {/*        </div>*/}

                {/*        <div className="col-md-4 col-sm-6">*/}

                {/*                <AvField name="status" label={<> Статус <span className="text-danger"> * </span></>} className="shadow-none" required type="select">*/}
                {/*                    <option>-- Выберите статус --</option>*/}
                {/*                    <option value="Positive / Положительный"> Positive / Положительный</option>*/}
                {/*                    <option value="Negative / Отрицательный"> Negative / Отрицательный</option>*/}
                {/*                </AvField>*/}

                {/*                <AvField label={<>Дата сдачи анализа <span*/}
                {/*                    className="text-danger"> * </span></>} type="text" className="shadow-none"*/}
                {/*                       placeholder="Дата сдачи анализа  " required name="analiseDate"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="form-group">*/}
                {/*        <button className="btn btn-primary" type="submit">Добавить</button>*/}
                {/*        <span className="text-danger"> *</span>*/}
                {/*        <small>- Ячейки, которые нужно заполнить!</small>*/}
                {/*    </div>*/}
                {/*</AvForm>*/}

                <form onSubmit={submit}>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Информация о пользователе</p>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="id"> ID <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="id" required
                                       name="serial" id="id" defaultValue={props.location.state ? props.location.state.item.serial: ""}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="fullName"> Полное имя <span className="text-danger"> * </span></label>
                                <input type="text" className="form-control shadow-none" placeholder="Полное имя"
                                       required name="fullName" id="fullName" defaultValue={props.location.state ? props.location.state.item.fullName: ""}/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="data-birthday"> Дата рождения <span className="text-danger"> * </span></label>
                                <input id="data-birthday" type="text" className="form-control shadow-none" placeholder="Дата рождения"
                                       required name="birthDate" defaultValue={props.location.state ? props.location.state.item.birthDate: ""}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="gender"> Пол <span className="text-danger"> * </span></label>
                                <select name="gender" id="gender" className="form-control shadow-none" required defaultValue={props.location.state ? props.location.state.item.gender: ""}>
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
                                       name="address" id="testId" defaultValue={props.location.state ? props.location.state.item.address: ""}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="passport-number"> Серия и номер паспорта <span
                                    className="text-danger"> * </span></label>
                                <input id="passport-number" type="text" className="form-control shadow-none"
                                       placeholder="Серия и номер паспорта " required name="passportNumber" defaultValue={props.location.state ? props.location.state.item.passportNumber: ""}/>
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
                                       placeholder="Метод исследования Ru " required name="methodRu" defaultValue={props.location.state ? props.location.state.item.methodRu: ""}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="methodEn"> Метод исследования En <span
                                    className="text-danger"> * </span></label>
                                <input id="methodEn" type="text" className="form-control shadow-none"
                                       placeholder="Метод исследования En" required name="methodEn" defaultValue={props.location.state ? props.location.state.item.methodEn: ""}/>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="lab-name"> Лаборатория (название) <span
                                    className="text-danger"> * </span></label>
                                <select id="lab-name" name="laboratory" className="form-control shadow-none" required defaultValue={props.location.state ? props.location.state.item.laboratory.id: ""}>
                                    <option>-- Выберите --</option>
                                    {props.labos.map(item => (
                                        <option
                                            value={item.id}>{item.nameRu}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="loc"> Место забора анализа  <span className="text-danger"> * </span></label>
                                <select id="loc" name="place" className="form-control shadow-none" required defaultValue={props.location.state ? props.location.state.item.place.id: ""}>
                                    <option>-- Выберите --</option>
                                    {props.locations.map(item => (
                                        <option
                                            value={item.id}>{item.nameRu}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="covid-status"> Статус   <span className="text-danger"> * </span></label>
                                <select id="covid-status" name="status" className="form-control shadow-none" required defaultValue={props.location.state ? props.location.state.item.status: ""}>
                                    <option value="">-- Выберите статус --</option>
                                    <option value="Positive / Положительный"> Positive / Положительный </option>
                                    <option value="Negative / Отрицательный"> Negative / Отрицательный </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="data-analise">Дата сдачи анализа  <span
                                    className="text-danger"> * </span></label>
                                <input id="data-analise" type="text" className="form-control shadow-none"
                                       placeholder="Дата сдачи анализа  " required name="analiseDate" defaultValue={props.location.state ? props.location.state.item.analiseDate: ""}/>
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

const mapStateToProps= (state) => {
    return {
        labos: state.labo.labos,
        locations: state.location.locations
    }
}

export default connect(mapStateToProps, {getLabos, getLocations, save})(AddResult);