import React from 'react';
import Image1 from '../../assets/fever-sym.png'
import Image2 from '../../assets/cough.png'
import Image3 from '../../assets/tiredness.png'
import Image4 from '../../assets/sore-throat.png'
import Image5 from '../../assets/pain.png'
import Image6 from '../../assets/breathing.png'
import Image7 from '../../assets/headache.png'
import Image8 from '../../assets/rash.png'

const symptomsOfCoronaVirus = () => {
    return (
        <section className="symptom-Of-CoronaVirus pt-5 pb-5" id="symptoms">
            <div className="container">
                <div className="inside-container">
                    <h2 className="text-center text-uppercase">Symptoms of covid-19</h2>
                    <hr className="w-50" />
                    <div className="row my-1 text-center pt-5">
                        <div className="col-lg-3 col-md-3 col-12  my-1">
                            <img src={Image1} alt="fever-sym" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">Fever</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12  my-1">
                            <img src={Image2} alt="cough" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">Dry Cough</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12  my-1">
                            <img src={Image3} alt="tiredness" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">Tiredness</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12  my-1">
                            <img src={Image4} alt="sore-throat" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">Sore-Throat</p>
                        </div>
                    </div>
                    <div className="row my-1 text-center pb-5">
                        <div className="col-lg-3 col-md-3 col-12">
                            <img src={Image5} alt="pain" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">Chest Pain Or Pressure</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <img src={Image6} alt="breathing" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">Difficulty Breathing</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <img src={Image7} alt="headache" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">Headache</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <img src={Image8} alt="rash" className="img-fluid d-block mx-auto" />
                            <p className="lead pt-3">A Rash On Skin</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default symptomsOfCoronaVirus;