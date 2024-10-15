import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../CSS/Style.css';

export default function Team() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    const teamMembers1 = [
        {
            name: 'Dr. Amit Bhosale',
            title: 'Founder',
            description: '\n \n Experience: 20 years+',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TJzMty7nuJSre7vQow-ZKkrsD65uqbR_zrSJS7Akf9M7NklNiOb_kTwLM7oF5JYKoMg&usqp=CAU',
            socialLinks: {
                facebook: 'https://www.facebook.com/onkar.dighe.1',
                instagram: 'https://www.instagram.com/mr_onkar_dighe_patil?igsh=bG4ydzFrd3N5NmE2',
                twitter: 'https://wa.me/qr/BEKTHN4FDLCPF1',
                linkedin: 'https://www.linkedin.com/in/onkar-dighe-848561226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            }
        },
        
       
    ];
    
    return (
        <div className="container team shadow-lg p-3 mb-5 bg-body-tertiary rounded hee">
            <h2 className='text-center head-all hee text-white'>
               About Our Founder
            </h2>
            <div className="row team-2">
                {teamMembers1.map((member, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto">
                        <div className="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded" data-aos="fade-up">
                            <div className="picture">
                                <img className="img-fluid" src={member.imgSrc} alt={member.name} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">{member.name}</h3>
                                <h4 className="title">{member.title}<br />{member.description}</h4>
                            </div>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/dramitbhosle?mibextid=LQQJ4d"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/dramitbhosle?igsh=MXJnYWl4dmI2aXN4aw%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://x.com/dramitbhosle?s=11"><i className="bi bi-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
