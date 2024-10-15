import React from 'react';
import '../../CSS/Style.css';

const Video = () => {
  return (
    
    // <section className="c-section">
    //   <h2 className="c-section__title">
    //     <span>Our Services</span>
    //   </h2>
    //   <ul className="c-services">
    //     <li className="c-services__item">
    //       <h3>Achievement - 6</h3>
    //       <p>
    //         We focus on designing experiences that work seamlessly across different screen sizes.
    //       </p>
    //     </li>
    //     <li className="c-services__item">
    //       <h3>Achievement - 5</h3>
    //       <p>
    //         Our detailed UX audit highlights issues in your product. We can then address and resolve all identified problems.
    //       </p>
    //     </li>
    //     <li className="c-services__item">
    //       <h3>Achievement - 4</h3>
    //       <p>
    //         The result of our work is a responsive, accessible, and high-performance website. Whether you have a design ready or need us to create both the design and code, we’re here to help.
    //       </p>
    //     </li>
    //     <li className="c-services__item">
    //       <h3>Achievement - 3</h3>
    //       <p>
    //         Enhance your project's capabilities with our bespoke freelancing services. From web development to creative design, our skilled freelancers provide tailored solutions that meet your unique business needs.
    //       </p>
    //     </li>
    //     <li className="c-services__item">
    //       <h3>Achievement - 2</h3>
    //       <p>
    //         To reach more customers and achieve your business goals, a mobile application is essential. We will work on app design from concept to a fully tested prototype.
    //       </p>
    //     </li>
    //     <li className="c-services__item">
    //       <h3>Achievement - 1</h3>
    //       <p>
    //         We help define your target audience, create user stories, conduct competitive analysis, and much more.
    //       </p>
    //     </li>
    //   </ul>
    // </section>
    
    // {/* Video section */}
    <div className="row bgcolor">
        <div className="col-12 text-center hee mb-4">
          <h2 className="">Videos on Astrology</h2>
        </div>
        {/* Embedding YouTube Videos */}
        <div className="col-md-4 video-box py-3">
          <iframe
            width="100%"
            height="200"
            src="https://youtube.com/shorts/q7-vd2MzVfg?si=ZqNqnhRXTxjfIZJb"
            title="Astrology Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box py-3">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/eoQjSD5BZwE"
            title="Astrology Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box py-3">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/wGpG3wJCy8I"
            title="Astrology Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box py-3">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/QaIVt21bsDU"
            title="Astrology Video 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box py-3">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/yfcvCVFJ_5U"
            title="Astrology Video 5"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box py-3">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/nO8RMlQzdyg"
            title="Astrology Video 6"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
  );
};

export default Video;
