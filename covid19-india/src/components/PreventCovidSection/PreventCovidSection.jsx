import React from 'react';
import './PreventCovidSection.css'
import Image1 from '../../assets/liquid-soap (1).png'
import Image2 from '../../assets/social-distancing.png'
import Image3 from '../../assets/wear.png'
import Image4 from '../../assets/do-not-touch (1).png'
import Image5 from '../../assets/no-group.png'
import Image6 from '../../assets/stay-home.png'
import Image7 from '../../assets/fever (1).png'

const preventCovidSection = () => {
    const style = {
        backgroundColor: '#ccc'
    }


    return (
        <section className="preventCovidSection pb-5" style={style} id="prevention">
            <div className="container pt-5">
                <h2 className="text-center text-uppercase">Steps to prevent the spread of COVID-19</h2>
                <hr className="w-50" />
                <div className="steps pt-4">
                    <div className="row my-1 text-center pt-4">
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image1} alt="Clean Hands" className="img-fluid d-block mx-auto" />
                            <p>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image2} alt="Safe Distance" className="img-fluid d-block mx-auto" />
                            <p>Maintain a safe distance from anyone who is coughing or sneezing.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image3} alt="Wear Mask" className="img-fluid d-block mx-auto" />
                            <p>Wear a mask when physical distancing is not possible.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image4} alt="Don't touch eyes" className="img-fluid d-block mx-auto" />
                            <p>Don’t touch your eyes, nose or mouth.</p>
                        </div>
                    </div>
                    <div className="row my-1 pt-3 text-center">
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image1} alt="Cover Nose" className="img-fluid d-block mx-auto" />
                            <p>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image5} alt="Avoid Crowd" className="img-fluid d-block mx-auto" />
                            <p>Avoid crowded places and close contact with anyone that has fever or cough.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image6} alt="Stay Home" className="img-fluid d-block mx-auto" />
                            <p>Stay home if you feel unwell.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 my-1">
                            <img src={Image7} alt="Fever" className="img-fluid d-block mx-auto" />
                            <p>If you have a fever, cough and difficulty breathing, seek medical attention..</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default preventCovidSection;