import React, { Component } from 'react';
import axios from '../../axios-base';
import './CovidIndia.css';


class CovidIndia extends Component {
    //state are managed internally
    state = {
        posts: [],
        loading: false
    }

    componentDidMount() {
        axios.get('/countries')
            .then(response => {
                console.log((response.data[2]));
                this.setState({ posts: response.data[2], loading: true });
            }).catch(error => {
                console.log(error)
            });
    };


    //when we have to access state object like posts[] we will write like this.state.Posts
    //we have write "this" to access particular object in a class based component

    render() {

        let orderSummary = null;

        if (this.state.loading) {
            orderSummary = <section className="covid-information pb-5" id="covidIndia">
                <div className="container">
                    <div className="main-div text-center pt-5">
                        <h2 className="text-uppercase">COVID-19 updates (India)</h2>
                        <hr className="w-50" />
                        <div className="main-data pt-5">
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-4 col-12 my-2">
                                    <p className="lead totalConfirmed pt-3  animate__bounce">Total Confirmed Cases <br />  {this.state.posts.cases}</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 my-2">
                                    <p className="lead totalDeaths pt-3 animate__bounce">Total Death Cases  <br /> {this.state.posts.deaths}</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 my-2">
                                    <p className="lead totalRecovered pt-3 animate__bounce">Total Recovered Cases  <br /> {this.state.posts.recovered}</p>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-lg-4 col-md-4 col-12 my-2">
                                    <p className="lead totalActiveCases pt-3 animate__bounce">Total Active Cases <br />  {this.state.posts.active}</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 my-2">
                                    <p className="lead totalCriticalCases pt-3 animate__bounce">Total Critical Cases  <br /> {this.state.posts.critical}</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 my-2">
                                    <p className="lead totalTests pt-3 animate__bounce">Total Tests Done  <br /> {this.state.posts.totalTests}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        } else {
            orderSummary = <h2 className="text-center pt-5">Loading...</h2>
        }

        return (
            orderSummary
        );
    }
}

export default CovidIndia;