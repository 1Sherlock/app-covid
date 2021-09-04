import React from 'react';
import Layout from "../components/Layout";

const AddLocation = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <form action="">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h4 className="text-uppercase">Добавить новое</h4>

                                    <div className="form-group">
                                        <label htmlFor="id"> Названия на русском <span className="text-danger"> * </span></label>
                                        <input type="text" className="form-control shadow-none" placeholder="Названия на русском" required
                                               name="location-ru"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="id"> Названия на английском<span className="text-danger"> * </span></label>
                                        <input type="text" className="form-control shadow-none" placeholder="Названия на английском"
                                               required name="location-en"/>
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-primary" name="enter-location" type="submit" id="send-to-location">Добавить</button>
                                        <span className="text-danger"> *</span>
                                        <small>- Ячейки, которые нужно заполнить!</small>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AddLocation;