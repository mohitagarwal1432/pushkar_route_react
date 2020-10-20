import React from 'react'

import {CarouselList} from './data/carousel.js' 
const App = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {CarouselList.map((value, index) => {
                    if(index === 0) {
                        return (
                            <li data-target="#carouselExampleIndicators" key={index} data-slide-to={(index).toString()} className="active"></li>
                        );
                    }
                    else {
                        return (
                            <li data-target="#carouselExampleIndicators" key={index} data-slide-to={(index).toString()}></li>
                        );
                    }
                })}
                
            </ol>
            <div className="carousel-inner">
                {CarouselList.map((value, index) => {
                    if(index === 0) {
                        return (
                            <div key={index} className="carousel-item active">
                                <img className="d-block w-100 carousel-img" src={(value.src)} alt="First slide" />
                            </div>
                        );
                    }
                    else {
                        return (
                            <div key={index} className="carousel-item">
                                <img className="d-block w-100 carousel-img" src={(value.src)} alt="First slide" />
                            </div>
                        );
                    }
                })}
                
            </div>
            
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default App;