export default function Header(){
    return(
        <div className="header">
            <div className="upper-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="upper-header-left">
                                <p>Connect with Us &nbsp;:</p>
                                <ul className="d-flex">
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fa-brands fa-instagram"></i>    
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <i className="fa-solid fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="upper-header-right d-flex">
                                <ul className="contact-numbers d-flex">
                                    <li>
                                        <i className="fa-solid fa-phone"></i>
                                        <a href="tel:+911112223333">(+91) 111 222 3333</a>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone"></i>
                                        <a href="tel:+914445556666">(+91) 444 555 6666</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="logo">
                                
                                <a href="/" className="logo-content">
                                    <span className="main-logo">Harish</span>
                                    <br/> 
                                    <span className="sub-logo">Caterers & Tent House</span>
                                    {/* <img src={Logo} alt="logo" height={48} width={120}/> */}
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="nav-item">
                                <ul className='nav-data nav-links'>
                                    <li>
                                        <a href="/about-us">About us</a>
                                    </li>
                                    <li>
                                        <a href="/catering">Catering</a>
                                    </li>
                                    <li>
                                        <a href="/tent-decoration">Tent Decoration</a>
                                    </li>
                                    <li>
                                        <a href="/dj-sounds">DJ & Sounds</a>
                                    </li>
                                    <li>
                                        <a href="/contact-us">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}