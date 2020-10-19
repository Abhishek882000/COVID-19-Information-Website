import React, { Component } from 'react';
import axios from 'axios';

class CovidNews extends Component {

    state = {
        news: [],
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0feb22e923ba460abbcf87a53a9fc251')
            .then(response => {
                console.log(response.data);
                let filteredResponseData = response.data.articles.splice(0, 8)
                this.setState({ news: filteredResponseData });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <section className="covidNews pt-5 pb-5" id="covidNews">
                <h2 className="text-uppercase text-center">Top Health news Headlines</h2>
                <hr className="w-50" />
                <div className="container pt-5">
                    {this.state.news.map(news => (
                        <div className="alert alert-primary text-center" role="alert" key={news.title}>
                            <strong>{news.title}</strong>
                            <br />
                            <a href={news.url} className="text-uppercase text-center">Link To News</a>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default CovidNews;