import Slider from './Slider';
import Catering from './Catering';
import Services from './OurServices';
import Events from './EventType';
import Gallery from './Gallery';
export default function Home(){
    return(
        <div className="hero-banner">
            <div className="row">
                <div className="col-md-12">
                    <Slider/>   
                    <Catering/>                
                    <Services/>   
                    <Events/>
                    <Gallery/>                
                </div>
            </div>
        </div>
    );
}