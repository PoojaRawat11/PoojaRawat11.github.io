export default function Header() {
    return (
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
            {/* <div className="lower-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="logo">
                                
                                <a href="/" className="logo-content">
                                    <span className="main-logo">Harish</span>
                                    <br/> 
                                    <span className="sub-logo">Caterers & Tent House</span>
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
            </div> */}
            <div className="lower-header">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="/">
                            <div className="logo-content">
                                <span className="main-logo d-block">Harish</span>
                                <span className="sub-logo d-block">Caterers & Tent House</span>
                            </div>
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                                <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path></svg>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 nav-links">
                                <li class="nav-item d-li-none">
                                    <a class="nav-link" href="/">
                                        <div class="logo-content">
                                            <span class="main-logo d-block">Harish</span>
                                            <span class="sub-logo d-block">Caterers & Tent House</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about-us">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/catering">Catering</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/tent-decoration">Tent Decoration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dj-sounds">DJ & Sounds</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact-us">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}