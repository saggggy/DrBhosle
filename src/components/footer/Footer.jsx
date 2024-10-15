import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import '../CSS/Style.css';
import { Link } from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [subscribeSuccess, setSubscribeSuccess] = useState(false);
    const [emailValid, setEmailValid] = useState(true); // Track if email is valid

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate email format
        if (!validateEmail(email)) {
            setEmailValid(false);
            return;
        }
        // Simulate subscription success
        // You can add actual subscription logic here
        setSubscribeSuccess(true);
        // Clear input after successful submission (optional)
        setEmail('');
    };

    const validateEmail = (email) => {
        // Basic email validation regex (simplified)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleClose = () => {
        setSubscribeSuccess(false);
    };

    const handleContactUs = () => {
        // Navigate to Contact Us page
        // Replace with your actual route or link
        // window.location.href = '/contact-us'; // Example
        alert('Navigate to Contact Us page'); // Placeholder for demonstration
    };

    return (
        <div className="footer container-fluid text-white p-0 ">
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                    <h3 className="f-title f_600 text-black f_size_18 text-start">Link</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/career">Career</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                    <h3 className="f-title f_600 text-black f_size_18 text-start">Get in Touch</h3>
                                    <p className='text-dark'>Stay updated with our latest templates and extensions!</p>
                                    <form onSubmit={handleSubmit} className="f_subscribe_two mailchimp" noValidate={true}>
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            className={`form-control memail ${!emailValid ? 'is-invalid' : ''}`}
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                        />
                                        {!emailValid && (
                                            <div className="invalid-feedback">
                                                Please enter a valid email address.
                                            </div>
                                        )}
                                        <button className="btn btn_get btn_get_two mt-3" type="submit" style={{ backgroundColor: '#bd7b49', color: '#ffffff' }}>
                                            Subscribe
                                        </button>
                                        {subscribeSuccess && (
                                            <div className="mchimp-sucmessage">
                                                <p style={{ color: '#ffffff', marginTop: '10px' }}>
                                                    Your message sent to SoulMate Infotech Team successfully..!
                                                </p>
                                                <button className="btn btn-sm btn-secondary mt-2" onClick={handleClose}>
                                                    Close
                                                </button>
                                                <button className="btn btn-sm btn-primary mt-2 ml-2" onClick={handleContactUs}>
                                                    Contact Us
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-social-icon wow fadeInLeft custom-footer-social" data-wow-delay="0.6s">
                                    <span className='follow-us fw-bold text-black'>Follow us</span>
                                    <div className="social-icons">
                                        <Link to="https://www.facebook.com/dramitbhosle?mibextid=LQQJ4d" className="social-icon rounded-circle facebook-bg"><FontAwesomeIcon icon={faFacebook} className="icon-white" /></Link>
                                        <Link to="https://x.com/dramitbhosle?s=11" className="social-icon rounded-circle twitter-bg"><FontAwesomeIcon icon={faTwitter} className="icon-white" /></Link>
                                        <Link to="https://www.instagram.com/dramitbhosle?igsh=MXJnYWl4dmI2aXN4aw%3D%3D&utm_source=qr" className="social-icon rounded-circle instagram-bg">
                                            <FontAwesomeIcon icon={faInstagram} className="icon-white" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400 text-black">© {currentYear} All rights reserved Dr Amit Bhosle</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right text-black">
                                <p>Made with <i className="icon_heart"></i> in <a className='text-black' href="http://cakecounter.com" target="_blank" rel="noopener noreferrer">Tech Logic Wave</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
