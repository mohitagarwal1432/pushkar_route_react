import React, {useEffect} from "react"
import {useParams, withRouter} from 'react-router-dom'

import {HeroSectionData} from './data/herosection'

import HeroSection from './herosection'
import AboutSection from './aboutsection'
import ErrorSection from '../error'
import Contact from '../include/contact.js'

import {NavLinksDOM} from '../include/header'

const App = () => {
    window.scrollTo(0, 0);
    document.getElementsByTagName("body")[0].onscroll = function() {

    }
    var params = useParams();
    var id = params.id;
    
    var HeroFound = HeroSectionData.find((hero) => hero.id === id)

    useEffect(() => {
        const NavLinks = NavLinksDOM();
        scrollAction(NavLinks)
    }, [])

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

const scrollAction = (nav) => {
    removeClass(nav);
    nav.tour.classList.add("active");	
    document.getElementsByTagName('body')[0].onscroll = () => {
        var y_scroll_pos = window.pageYOffset;
        var contact = document.getElementById("contact").offsetTop;
        if(y_scroll_pos>contact-20)
        {
            removeClass(nav);
            nav.contact.classList.add("active");
        }
        else {
            removeClass(nav);
            nav.tour.classList.add("active");
        }
    }
}

const removeClass = (nav) => {
    nav.home.classList.remove("active");
    nav.about.classList.remove("active");
    nav.tour.classList.remove("active");
    nav.booking.classList.remove("active");
    nav.contact.classList.remove("active");
}


export default withRouter(App);

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