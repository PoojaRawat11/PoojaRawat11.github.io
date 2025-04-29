import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TentHouseDeco from '../../assets/Images/DecoImages/TentHouseDeco.jpg';
import TrustDeco from '../../assets/Images/DecoImages/TrustDeco.jpg';
import TrustDeco2 from '../../assets/Images/DecoImages/TrustDeco2.jpg';
import TrustDeco3 from '../../assets/Images/DecoImages/TrustDeco3.jpg';
import TrustDeco4 from '../../assets/Images/DecoImages/TrustDeco3.jpg';

const images = [TentHouseDeco, TrustDeco, TrustDeco2, TrustDeco3, TrustDeco4];

export default function Gallery() {
    useEffect(() => {
        const customScript = `
        $(document).ready(function() {
    
          const cards = document.querySelectorAll('.case-study-card')
          
          cards.forEach((card) => {
            card.addEventListener('click', () => {
                card.classList.add('expand');
            });
          
            const closeBtn = card.querySelector('.cross');
          
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.remove('expand');
            });
            });
          
          
          $(".tab-slider").owlCarousel({
            items: 5,
            nav: true,
            dots: false,
            mouseDrag: true,
            autoplay: false,
            center: true,
            smartSpeed: 700,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            loop: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767:{
                         items: 1
                },
                768: {
                    items: 5
                },
                1200: {
                    items: 5
                },
          
                1920: {
                    items: 5
                },
          
                3840: {
                    items: 5
                }
          
          
          
            }
          });
          
         $(".tab-slider").owlCarousel({
            items: 5,
            nav: true,
            dots: false,
            mouseDrag: true,
            autoplay: false,
            center: true,
            smartSpeed: 700,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            loop: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767:{
                         items: 1
                },
                768: {
                    items: 5
                },
                1200: {
                    items: 5
                },
          
                1920: {
                    items: 5
                },
          
                3840: {
                    items: 5
                }
          
          
          
            }
          });
          
    
    
    
          $(".owl-carousel").owlCarousel({
                  autoplay: false,
                  items: 1,
                  loop: true,
                  nav: true,
                  navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
                  onInitialized: counter, //When the plugin has initialized.
                  onTranslated: counter //When the translation of the stage has finished.
                });
          
                function counter(event) {
                  var element = event.target; // DOM element, in this example .owl-carousel
                  var items = event.item.count; // Number of items
                  var item = event.item.index + 1; // Position of the current item
          
                  // it loop is true then reset counter from 1
                  if (item > items) {
                    item = item - items;
                  }
                  $("#counter").html("<span class='counterone'>0</span><span class='counterone'>" + item + "</span> <span class='counterone'>/</span><span class='conterfour'>" + items + "</span>");
                }
          
          });
    
         
          `;
    
        const script = document.createElement("script");
        script.textContent = customScript;
        document.head.appendChild(script);
        
        return () => {
          // Clean up the script when the component is unmounted
          document.head.removeChild(script);
        };
      }, [images]);

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
                  {
                    images && images.length>0 ?
                    <>
                    <ul className="owl-carousel owl-theme tab-slider list-unstyled d-flex">
                    {images.map((img,index)=>{
                      return(
                        <>
                        <div>
                   <li key={index} >
                    <div className="col-md-12 item">
                      <Link to={`#`}>
                        <div className="blog-card">
                          <div className="blog-pic">
                            <img
                              src={`${img}`}
                              className="img-fluid"
                              alt=""
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
                    </li>
                    </div>
                        </>
                      )
                    })
                  }
                  </ul>
                  </>
                    :
                    null
                  } 
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
