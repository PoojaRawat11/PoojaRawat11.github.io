import { useEffect } from "react";
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CateringImage from '../../assets/Images/FoodImages/FoodImg2.jpg';
import TentImage from  '../../assets/Images/DecoImages/DecoImg1.jpg';
import DecoImage from '../../assets/Images/DecoImages/DecoImg5.jpg';
import LightImage from '../../assets/Images/DecoImages/DecoImg3.jpg';
import EventImage from '../../assets/Images/FoodImages/FoodImg3.jpg';
export default function Service(){
      useEffect(() => {
        $('.our_services_slider').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: window.innerWidth < 992, // ✅ enable autoplay only for tablets/mobiles
          autoplaySpeed: 3000,
          cssEase: 'linear',
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 3 }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                autoplay: true // ✅ ensure autoplay for tablets
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                autoplay: true // ✅ ensure autoplay for phones
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                autoplay: true
              }
            }
          ]
        });
      
        return () => {
          if ($('.our_services_slider').hasClass('slick-initialized')) {
            $('.our_services_slider').slick('unslick');
          }
        };
      }, []);
      
    return(
        <section className="our-services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="our-services-head main-head">
                            <h5 className='main-heading'>Our Services</h5>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="our_services_slider">
                            <a href="#">
                            <div className="our_services-card">
                                    <div className="our_services-img">
                                        <img alt="img one" src={CateringImage}/>
                                    </div>
                                    <div className="our_services-label">
                                        <h5 className="sub-heading-highlight">Catering</h5>
                                    </div>
                            </div>
                            </a>
                            <a href="#">
                            <div className="our_services-card">
                                    <div className="our_services-img">
                                        <img alt="img two" src={TentImage}/>
                                    </div>
                                    <div className="our_services-label">
                                        <h5 className="sub-heading-highlight">Tent Setup</h5>
                                    </div>
                            </div>
                            </a>
                            <a href="#">
                            <div className="our_services-card">
                                    <div className="our_services-img">
                                        <img alt="img third" src={DecoImage}/>
                                    </div>
                                    <div className="our_services-label">
                                        <h5 className="sub-heading-highlight">Decoration</h5>
                                    </div>
                            </div>
                            </a>
                            <a href="#">
                            <div className="our_services-card">
                                    <div className="our_services-img">
                                        <img alt="img fourth" src={LightImage}/>
                                    </div>
                                    <div className="our_services-label">
                                        <h5 className="sub-heading-highlight">Lighting</h5>
                                    </div>
                            </div>
                            </a>
                            <a href="#">
                            <div className="our_services-card">
                                    <div className="our_services-img">
                                        <img alt="img fifth" src={EventImage}/>
                                    </div>
                                    <div className="our_services-label">
                                        <h5 className="sub-heading-highlight">DJ & Sounds</h5>
                                    </div>
                            </div>
                            </a>
                        </div>		
                    </div>
                </div>
            </div>
        </section>
    );
}