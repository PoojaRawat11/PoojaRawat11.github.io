import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import TentHouseDeco from '../../assets/Images/DecoImages/TentHouseDeco.jpg';
import TrustDeco from '../../assets/Images/DecoImages/TrustDeco.jpg';
import TrustDeco2 from '../../assets/Images/DecoImages/TrustDeco2.jpg';
import TrustDeco3 from '../../assets/Images/DecoImages/TrustDeco3.jpg';
import TrustDeco4 from '../../assets/Images/DecoImages/TrustDeco3.jpg';

const images = [TentHouseDeco, TrustDeco, TrustDeco2, TrustDeco3, TrustDeco4];

const owlOptions = {
  items: 5,
  nav: true,
  dots: false,
  autoplay: window.innerWidth < 768,
  autoplayTimeout: 3000,
  autoplaySpeed: 800,
  autoplayHoverPause: true,
  center: true,
  smartSpeed: 700,
  loop: true,
  navText: [
    "<i class='fal fa-long-arrow-left'></i>",
    "<i class='fal fa-long-arrow-right'></i>"
  ],
  responsive: {
    0: { items: 1 },
    480: { items: 1 },
    768: { items: 5 }
  }
};

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="gallery-head main-head">
              <h5 className="main-heading">Gallery</h5>
            </div>
          </div>
          <div className="col-md-12">
            <div className="carousel-wrapper">
              <OwlCarousel className="owl-theme tab-slider" {...owlOptions}>
                {images.map((img, index) => (
                  <div className="item" key={index}>
                    <Link to="#">
                      <div className="blog-card">
                        <div className="blog-pic">
                          <img
                            src={img}
                            className="img-fluid"
                            alt={`Gallery Image ${index + 1}`}
                          />
                        </div>
                        <div className="blog-content">
                          <p className="blog-heading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli
                          </p>
                          <span className="common-read-more">Explore more</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}