import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

import {OurTourList} from './data/ourTour'
const App = () => {
    return (
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                        <div className="section-tittle text-center mb-90">
                            <h2>Our Tours</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {OurTourList.map((value, index) => {
                        return (
                            <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                                <div className="home-blog-single mb-30">
                                    <div className="blog-img-cap">
                                        <div className="blog-img">
                                            <div id={"tour"+(index+1)} className="carousel slide" data-ride="carousel">
                                                
                                                <ol className="carousel-indicators">
                                                    {value.carousel.map((value, index) => {
                                                        if(index === 0) {
                                                            return (
                                                                <li data-target={"#tour"+(index+1)} key={index} data-slide-to={(index).toString()} className="active"></li>
                                                            );
                                                        }
                                                        else {
                                                            return (
                                                                <li data-target={"#tour"+(index+1)} key={index} data-slide-to={(index).toString()}></li>
                                                            );
                                                        }
                                                    })}
                                                </ol>
                                                <div className="carousel-inner">
                                                    {value.carousel.map((value, index) => {
                                                        if(index === 0) {
                                                            return (
                                                                <div key={index} className="carousel-item active">
                                                                    <img className="d-block w-100 carousel-img" src={(value)} alt="First slide" />
                                                                </div>
                                                            );
                                                        }
                                                        else {
                                                            return (
                                                                <div key={index} className="carousel-item">
                                                                    <img className="d-block w-100 carousel-img" src={(value)} alt="First slide" />
                                                                </div>
                                                            );
                                                        }
                                                    })}
                                                    
                                                </div>
                                                <a className="carousel-control-prev" href={"#tour"+(index+1)} role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href={"#tour"+(index+1)} role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="blog-cap">
                                            <h3><Link to={value.exploreLink}>{value.title}</Link></h3>
                                            <Link to={value.exploreLink} className="more-btn">Explore »</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
    
    );
}

export default App;