import React from 'react'

class Footer extends React.Component {
    clearPlaceHoleder(id) {
        document.getElementById(id).placeholder = "";
    }
    setPlaceHoleder(id, text) {
        document.getElementById(id).placeholder = text;
    }
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-11 col-sm-11">
                        <div className="section-tittle text-center mb-90">
                            <h2>Get in Touch</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <form className="form-contact" onSubmit={() => false} name="contact_form" ref="contact_form" acceptCharset="utf-8" id="contact_form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" name="name" id="subject" type="text" onFocus={() => this.clearPlaceHoleder("subject")}  onBlur={() => this.setPlaceHoleder("subject", "Enter Name")} placeholder="Enter your Name" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="phone" id="phone" type="tel" onFocus={() => this.clearPlaceHoleder("phone")} onBlur={() => this.setPlaceHoleder("phone", "Enter your phone number")} placeholder="Enter your phone number" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email" onFocus={() => this.clearPlaceHoleder("email")} onBlur={() => this.setPlaceHoleder("email", "Enter your email address")} placeholder="Enter your Email address" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onFocus={() => this.clearPlaceHoleder("message")} onBlur={() => this.setPlaceHoleder("message", "Enter Message")} placeholder=" Enter Message" required></textarea>
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <div className='captcha-verify center-fluid'>
                                        <div className='g-recaptcha' data-sitekey='6LfAz9UZAAAAAF0nCmpMbSisr1zXft2XE-8U-uR5'></div>
                                    </div>
                                </div>

                            </div>
                            <div className="form-group mt-3">
                                <input className="button button-contactForm boxed-btn" type="submit" id="submit" value="Send" name="contactForm" />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>+91 7568084398 - whatsapp</h3>
                                <h3>+91 9079384839</h3>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>thepushkarroute@gmail.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;