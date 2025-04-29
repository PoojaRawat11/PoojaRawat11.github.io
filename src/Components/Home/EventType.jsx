import WedEventVid from '../../assets/Images/Videos/WedEvent.mp4';
import GovEvent from '../../assets/Images/Videos/GovEvent.mp4';
import CorporateEventImg from '../../assets/Images/DecoImages/CoroporateDecoGanesh.jpg';
export default function Events(){
    return(
        <section className="events">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="events-head main-head">
                            <h5 className='main-heading'>Event Types</h5>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="events-type">
                            <div className="event-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="event-description">
                                            <h5 className='main-sub-heading'>Make Your Wedding Day Unforgettable with Our Tailored Event Services</h5>
                                            <p className='sub-heading'>
                                            From elegant tent setups and exquisite catering to beautiful lighting and floral decorations, all blessed by Lord Ganesha, we provide everything you need to create the wedding of your dreams. Let us bring your vision to life and make your special day an unforgettable celebration.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="event-doc">
                                            <video class="event-video" controls playsinline>
                                                <source src={WedEventVid} type="video/mp4"/>
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="event-doc">
                                            <img src={CorporateEventImg} alt="Corporate events" className='d-block w-100 img-fluid backdrop-img event-img'/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="event-description">
                                            <h5 className='main-sub-heading'>Elevate Your Corporate Celebrations with Our Full-Service Event Management</h5>
                                            <p className='sub-heading'>
                                            Whether hosting a conference, seminar, executive retreat, or festival celebration, we offer exceptional catering and event management services designed to make your event truly stand out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="event-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="event-description">
                                            <h5 className='main-sub-heading'>Our Work for Government Events</h5>
                                            <p className='sub-heading'>
                                            Successfully organized a prestigious government event, providing complete services — from grand tents, exquisite catering, and detailed parking arrangements to cooling fans, comfortable seating, and premium sound systems.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="event-doc">
                                            <video class="event-video" controls playsinline>
                                                <source src={GovEvent} type="video/mp4"/>
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}