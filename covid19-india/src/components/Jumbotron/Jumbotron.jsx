import React from 'react';
import './Jumbotron.css';

const jumbotron = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 bigText text-uppercase">Let's fight together & stay safe in COVID-19</h1>
                    <p className="text-center pt-3 lead">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                    <button type="button" className="btn btn-light d-block mx-auto mt-5 btn-lg"><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" className="link">Learn More About COVID-19</a></button>
                </div>
            </div>
        </div>
    );
}

export default jumbotron;