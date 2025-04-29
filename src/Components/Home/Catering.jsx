import FoodImg1 from '../../assets/Images/FoodImages/FoodImg1.jpg';
export default function Catering(){
    return(
        <section className="catering-services">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="left-service-box">
                            <div className="left-service-head main-head">
                                <h5 className='main-heading'>Why choose us?</h5>
                            </div>
                            <p className='sub-heading'>
                                At <span className='sub-heading-highlight'>Harish Caterers & Tent house</span>, we take pride in delivering exceptional catering and tent house services that transform your events into unforgettable experiences. Whether it's a wedding, corporate gathering, birthday party, or any special celebration, our team is dedicated to providing delicious cuisine, elegant décor, and seamless service tailored to your needs. With a perfect blend of tradition and modern flair, our catering menu features a wide variety of dishes to suit every palate, while our stylish and well-equipped tent setups create the ideal ambiance for any event. Let us handle the details so you can enjoy every moment stress-free. Quality, reliability, and a touch of elegance—this is what makes us the best in the business.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="right-service-box">
                            <div className="catering-img">
                                <img src={FoodImg1} className="d-block w-100 img-fluid backdrop-img" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    );
}
