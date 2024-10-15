import React from 'react';
import '../../CSS/Style.css'; // Import your custom CSS file
import sir from '../Photo/sir.jpg'

const MyInfo = () => {
  return (
    <div className="container-fluid bgcolor">
      {/* Row for heading and photo */}
      <div className="row">
        {/* Left side: Title */}
        <div className="col-12 col-md-10 mx-auto">
          <div className="row">
          <div className="col-md-9 d-flex align-items-center">
          <h1 className="fw-bold fs-1">Dr Amit Bhosle Message about Astrology</h1>
        </div>
        {/* Right side: Photo */}
        <div className="col-md-3 text-center">
          <div className="">
            <img
              src={sir} // You can replace this with the actual image URL
              alt="Dr Amit Bhosle"
              className="photo"
            />
          </div>
        </div>
          </div>
        </div>
        
      </div>

      {/* Paragraph section */}
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="sub-heading">Message About Astrology</h2>
          <p className="paragraph px-3 text-justify">
                                                                                                                                  
              Astrology is great mechanism to establish love peace and harmony on the planet earth,  with help of other planets….
                                                                                                                                                                                                                        Dr Amit Bhosle
                    
              Our founder Dr Amit Bhosle has PhD in Astrology and have expertise in KP Astrology. He has mastered in Political Astrology. He say’s Astrology impacts on every field, whether we take Astrology seriously or lightly but in both conditions it is interesting.
              For last many years Dr Amit Bhosle is guide  in Shree Maharishi College of Vedic Astrology, Udaipur Rajasthan for PhD department. Many students had completed PhD on various subjects under the guidance of Dr Amit Bhosle

              He is in the strongly favour of to never bypass the medical sciences on the base of Astrology. In his opinion, though there is Medical Astrology but Astrologer should not interfere in Medical Science or in Medical treatments. Take Astrology as significant, but at last the Great Supreme Power who have created the planets can also change the planets in your destiny, surrender to that. But it is true that Astrology gives you the attitude of acceptance which is equal to inner peace….
              Dr Amit Bhosle advocates the Concepts of modern spirituality, which is out of the box of orthodox system, that’s why he always promotes that  Astrology is a based on mathematical calculation of 360 degrees. The mathematical knowledge of Astrologer leads him to accurate predictions. That’s why the hard homework is must for being a good Astrologer.  
              While commenting on the career in Astrology Dr Amit Bhosle say’s that Astrology is a wide spreading profession all over the world. But he emphases that, as Astrologer people of all categories, cast, religion and culture believe on you and have respect for your words, That’s why use Astrology for betterment of mankind,  to grow social unity and brotherhood, to make awareness on social issues like to save girl child,  racial discrimination,  deaddiction, and for  non-violence, progressive thoughts, equality, mercy, forgiveness , peace, love and harmony  
          </p>
        </div>
      </div>

      
      

     
    </div>
  );
};

export default MyInfo;
