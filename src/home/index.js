import React from 'react'

import Carousel from './carousel.js'
import About from './about.js'
import OurTour from './ourTour.js'
import Booking from './booking.js'
import Contact from '../include/contact.js'

import {NavLinksDOM} from '../include/header'

import './home.css'


class  App extends React.Component{
    constructor() {
        super();
        document.getElementsByTagName("body")[0].onscroll = function() {

        }
    }
    render () {
        return (
            <>
                <div id="carousel" className="slider-area position-relative fix">
                    <Carousel />
                </div>
                <section id="about" className="about-area section-padding3 position-relative">
                    <About />
                </section>
                <section id="our_tour" className="home-blog section-padding3">
                    <OurTour />
                </section>
                <section id="booking" className="service-are section-padding3">
                    <Booking />
                </section>
                <section id="contact" className="service-area section-padding3">
                    <Contact />
                </section>
            </>
        );
    }
    componentDidMount() {
        console.log("HOME PAFE MOUNTED")
        this.scrollAction();
    }

    scrollAction = () => {
        const nav = NavLinksDOM();
        this.removeClass(nav);
        nav.home.classList.add("active");	
        document.getElementsByTagName('body')[0].onscroll = () => {
            var y_scroll_pos = window.pageYOffset;
            
            var about = document.getElementById("about").offsetTop;
            var booking = document.getElementById("booking").offsetTop;
            var contact = document.getElementById("contact").offsetTop;
    
            if(y_scroll_pos < about) {
                this.removeClass(nav);
                nav.home.classList.add("active");	
            }
            else if(y_scroll_pos > about-20 && y_scroll_pos<booking)
            {
                this.removeClass(nav);
                nav.about.classList.add("active");
            }
            else if(y_scroll_pos > booking-20 && y_scroll_pos<contact)
            {
                this.removeClass(nav);
                nav.booking.classList.add("active");
            }
    
            else if(y_scroll_pos>contact-20)
            {
                this.removeClass(nav);
                nav.contact.classList.add("active");
            }
        }
    }
    
    removeClass(nav) {
        nav.home.classList.remove("active");
        nav.about.classList.remove("active");
        nav.tour.classList.remove("active");
        nav.booking.classList.remove("active");
        nav.contact.classList.remove("active");
    }
}

export default App;

