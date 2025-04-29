import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import TentHouseDeco from '../../assets/Images/DecoImages/TentHouseDeco.jpg';
import TrustDeco from '../../assets/Images/DecoImages/TrustDeco.jpg';
import TrustDeco2 from '../../assets/Images/DecoImages/TrustDeco2.jpg';
import TrustDeco3 from '../../assets/Images/DecoImages/TrustDeco3.jpg';
import TrustDeco4 from '../../assets/Images/DecoImages/TrustDeco3.jpg';

const images = [TentHouseDeco, TrustDeco, TrustDeco2, TrustDeco3, TrustDeco4];

export default function Gallery() {
  useEffect(() => {
    $(document).ready(function () {
      const isMobile = window.innerWidth < 768;
  
      if ($('.tab-slider').length && !$('.tab-slider').hasClass('owl-loaded')) {
        $('.tab-slider').owlCarousel({
          items: 5,
          nav: true,
          dots: false,
          mouseDrag: true,
          autoplay: isMobile, // ✅ autoplay only on small screens
          autoplayTimeout: 3000,
          autoplaySpeed: 800,
          autoplayHoverPause: true,
          center: true,
          smartSpeed: 700,
          navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
          ],
          loop: true,
          responsive: {
            0: { items: 1 },
            480: { items: 1 },
            767: { items: 1 },
            768: { items: 5 },
            1200: { items: 5 },
            1920: { items: 5 },
            3840: { items: 5 }
          }
        });
      }
    });
  }, []);  
   

  return (
    <div className="gallery">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="gallery-head main-head">
              <h5 className='main-heading'>Gallery</h5>
            </div>
          </div>
          <div className="col-md-12">
            <div className="carousel-wrapper">
              {images && images.length > 0 && (
                <ul className="owl-carousel owl-theme tab-slider list-unstyled d-flex">
                  {images.map((img, index) => (
                    <li key={index} className="item">
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
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
