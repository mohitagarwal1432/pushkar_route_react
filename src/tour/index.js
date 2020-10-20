import React from "react"
import {Link, useParams, withRouter} from 'react-router-dom'

import {HeroSectionData} from './data/herosection'

import HeroSection from './herosection'
import AboutSection from './aboutsection'
import ErrorSection from '../error'
import Contact from '../include/contact.js'

import {NavLinksDOM} from '../include/header'


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         document.getElementsByTagName("body")[0].onscroll = function() {

//         }
//         this.state = {
//             reload: false
//         }
//         this.params = props.match.params;
//         this.id = this.params.id;
//         console.log(props);
//         this.HeroFound = HeroSectionData.find((hero) => {
//             if(hero.id == this.id){
//                 return hero;
//             }
//         })
        
//     }
//     shouldComponentUpate(){
//         return true;
//     }
//     static getDerivedStateFromProps(props, state) {
//         return {reload: true };
//     }
     
//      componentDidUpdate(prevProps, prevState) {
//         return true;
//      }
//     render() {   
//         if(this.HeroFound) {
//             return (
//                 <>
//                     <HeroSection params={this.params}/>
//                     <AboutSection params={this.params}/>
//                 </>
//             );
//         }
//         else {
//             return (
//                 <ErrorSection />
//             );
//         }
//     }
//}

const App = () => {
    window.scrollTo(0, 0);
    document.getElementsByTagName("body")[0].onscroll = function() {

    }
    var params = useParams();
    var id = params.id;
    
    var HeroFound = HeroSectionData.find((hero) => {
        if(hero.id == id){
            return hero;
        }
    })

    if(HeroFound) {
        return (
            <>
                <HeroSection params={params}/>
                <AboutSection params={params}/>
                <section id="contact" className="service-area section-padding3">
                    <Contact />
                </section>
            </>
        );
    }
    else {
        return (
            <ErrorSection />
        );
    }

    
}


export default withRouter(App);