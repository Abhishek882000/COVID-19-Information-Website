import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Jumbotron from './components/Jumbotron/Jumbotron';
import CovidIndia from './containers/CovidIndia/CovidIndia';
import PreventCovidSection from './components/PreventCovidSection/PreventCovidSection';
import AboutCovid19 from './components/AboutCovid19/AboutCovid19';
import SymptomsOfCoronaVirus from './components/SymptomOfCoronaVirus/SymptomOfCoronaVirus';
import Footer from './components/Footer/Footer';
import CovidNews from './containers/CovidNews/CovidNews';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Jumbotron />
      <AboutCovid19 />
      <CovidIndia />
      <SymptomsOfCoronaVirus />
      <PreventCovidSection />
      <CovidNews />
      <Footer />
    </div>
  );
}

export default App;
