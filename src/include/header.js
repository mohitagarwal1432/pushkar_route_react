import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import { ScrollController } from "../home/index";

import './header.css'

class Header extends React.Component {
    
    render() {
        return (
            <div id="home" className="header-area header-transparent pt-20">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-6">
                                <div className="logo">
                                    <Link to="/index"><img style={{width:"100%"}} src="photos/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10">
                                <div className="menu-main d-flex align-items-center justify-content-end">
                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li id="homeNav"><Link to="/index#home">Home</Link></li>
                                                <li id="aboutNav"><Link to="/index#about">About</Link></li>
                                                <li id="tourNav"><a>Tours</a>
                                                    <ul className="submenu">
                                                        <li><Link to="/city_walking_tour">City walking tour</Link></li>
                                                        <li><Link to="/evening_walking_tour">Evening walking tour</Link></li>
                                                        <li><Link to="/half_day_tour">Half day tour</Link></li>
                                                        <li><Link to="/camel_safari_jeep_safari_and_quad_biking">Camel safari, Jeep safari and Quad biking</Link></li>
                                                        {/* <li><a href="hiking_and_trekking_tour">Hiking and Trekking tour</a></li>
                                                        <li><a href="tour_of_three_pushkar">Tour of three Pushkar</a></li>
                                                        <li><a href="hidden_glittings_of_pushkar">Hidden glitterings Gems of Pushkar</a></li>
                                                        <li><a href="pushkar_holi_festival">Pushkar holi festival</a></li>
                                                        <li><a href="special_pushkar_fair">Special Pushkar Fair</a></li> */}
                                                    </ul>
                                                </li>
                                                <li id="bookingNav"><Link to="/index#booking">Booking</Link></li>

                                                <li id="contactNav"><Link to="/#contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                        <a href="https://www.tripadvisor.com/Attraction_Review-g319729-d17548354-Reviews-VISHWNATH_PARASHAR-Pushkar_Ajmer_District_Rajasthan.html" className="btn header-btn" target="_blank">Enquire Now</a>
                                    </div>
                                </div>
                            </div>   
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export const NavLinksDOM = () => {
    return ({
        home : document.getElementById("homeNav"),
        about : document.getElementById("aboutNav"),
        tour: document.getElementById("tourNav"),
        booking : document.getElementById("bookingNav"),
        contact : document.getElementById("contactNav")
    })
}


export default Header;