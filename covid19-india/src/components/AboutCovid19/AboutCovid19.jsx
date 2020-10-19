import React from 'react';
import Corona from '../../assets/corona-min.jpg';
import './AboutCovid19.css';

const aboutCovid19 = () => {
    return (
        <section className="aboutCovid19 pt-5 pb-5" id="aboutCovid">
            <div className="container">
                <h2 className="text-center text-uppercase">About Covid-19</h2>
                <hr className="w-25" />
                <div className="row pt-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={Corona} alt="Not Showing" className="img-fluid coronaImg" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <h4>What is COVID-19 (Corona Virus)</h4>
                        <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
                        <p>Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.</p>
                        <p>The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default aboutCovid19;