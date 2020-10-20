import React from "react"

import {HeroSectionData} from './data/herosection'
class App extends React.Component {
    render() {
        var id = this.props.params.id;
        
        var HeroFound = HeroSectionData.find((hero) => {
            if(hero.id == id){
                return hero;
            }
        })

        return (
            <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2 pt-70 text-center">
                                    <h2>{HeroFound.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;