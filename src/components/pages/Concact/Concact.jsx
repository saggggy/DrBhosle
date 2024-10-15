import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import '../../CSS/Style.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // EmailJS service details
        const serviceID = 'service_5u9yklx';
        const templateID = 'template_fc5ivu8';
        const userID = 'pp21j3eVMOia8ikEV';

        // Customizing the message
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            contact_number: formData.phone,
            message: formData.message,
            to_email: 'soulmateinfotech5@gmail.com'
        };

        console.log("Sending email with params: ", templateParams);

        try {
            const result = await emailjs.send(serviceID, templateID, templateParams, userID);
            console.log("Email sent successfully:", result.text);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <section className="contact-page-section bgcolor">
            <div className="container">
                <div className="sec-title">
                    <div className="title">Contact Us</div>
                    <h2 className='head-all'>Let's Get in Touch.</h2>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">
                        {/* Form Column */}
                        <div className="form-column col-md-8 col-sm-12 col-xs-12">
                            <div className="inner-column">
                                {/* Contact Form */}
                                <div className="contact-form">
                                    <form onSubmit={handleSubmit} id="contact-form" ref={form}>
                                        <div className="row clearfix">
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                                            </div>
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                                            </div>
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
                                            </div>
                                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Cource Type"></textarea>
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <button type="submit" className="hee py-2 px-4 rounded fw-bold border-0">Send Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* End Contact Form */}
                            </div>
                        </div>
                        {/* Info Column */}
                        <div className="info-column col-md-4 col-sm-12 col-xs-12 hee">
                            <div className="inner-column">
                                <h2 className='head-all'>Contact Info</h2>
                                <ul className="list-info">
                                    <li><i className="fas fa-globe"></i><span className="info-text">Rahata</span></li>
                                    <li><i className="far fa-envelope"></i><a className="info-link" href="mailto:dramitbhosleirc@gmail.com">Email Us</a></li>
                                    <li><i className="fas fa-phone"></i><a className="info-link" href="tel:7972632061">8606977198</a></li>
                                </ul>
                                <ul className="social-icon-four">
                                <li className="d-flex border-right">
                                        <Link className="nav-link text-white" to={'https://www.facebook.com/dramitbhosle?mibextid=LQQJ4d'}>
                                            <i className="fab fa-facebook-f face me-2"></i>
                                        </Link>
                                        <Link className="nav-link text-white " to={'https://x.com/dramitbhosle?s=11'}>
                                            <i className="fab fa-twitter twiter me-2"></i>
                                        </Link>
                                      
                                        <Link className="nav-link text-white" to={'https://www.instagram.com/dramitbhosle?igsh=MXJnYWl4dmI2aXN4aw%3D%3D&utm_source=qr'}>
                                            <i className="fab fa-instagram insta me-2"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
