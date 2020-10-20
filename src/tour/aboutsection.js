import React from "react"

import {AboutSectionData} from './data/aboutsection'
class App extends React.Component {

    carousel(CarouselList) {
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

    render() {
        var id = this.props.params.id;
        
        var Found = AboutSectionData.find((hero) => {
            if(hero.id == id){
                return hero;
            }
        })
        var CarouselList = Found.CarouselList;
        return (
            <section className="about-area section-padding3 position-relative">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-11">
                            <div className="about-img ">
                                {this.carousel(CarouselList)}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-caption">
                                <div className="section-tittle section-tittle3 mb-35">
                                    <span>{Found.boldText}</span>
                                </div>
                                <p className="mb-30 pera-bottom">{Found.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;