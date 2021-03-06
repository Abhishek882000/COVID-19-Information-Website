import React from 'react';
import './Navigation.css'

const navigation = () => {
    return (
        <section className="navigation">
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand font-weight-bold" href="/">COVID-19 INFORMATION</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutCovid">About Covid</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#covidIndia" aria-haspopup="true" aria-expanded="false">
                                Covid Updates
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#symptoms" tabIndex="-1" aria-disabled="true">Symptoms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#prevention" tabIndex="-1" aria-disabled="true">Prevention</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#covidNews" tabIndex="-1" aria-disabled="true">News</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </section>
    );
};

export default navigation;