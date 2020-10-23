import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'

import {BookingList} from './data/booking.js' 
const App = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-11 col-sm-11">
                    <div className="section-tittle text-center mb-90">
                        <h2>You can also book with us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {BookingList.map((value, index) => {
                    return (
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-caption text-center mb-30">
                            <div className="service-icon" >
                                <i className={value.icon}></i>
                            </div> 
                            <div className="service-cap">
                                <h4><Link to="">{value.title}</Link></h4>
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