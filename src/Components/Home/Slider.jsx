import ImageFirst from '../../assets/Images/DecoImages/DecoImg1.jpg';
import ImageSecond from '../../assets/Images/DecoImages/DecoImg2.jpg';
export default function Slider(){
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ImageFirst} className="d-block w-100" alt="..."/>
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
                <div className="carousel-item">
                    <img src={ImageSecond} className="d-block w-100" alt="..."/>
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
                <div className="carousel-item">
                    <img src={ImageFirst} className="d-block w-100" alt="..."/>
                    {/* <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}