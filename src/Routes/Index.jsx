import Header from '../Components/Header/Index';
import Footer from '../Components/Footer/Index';
import Routing from './ApplicationRouting';
// import '../assets/Css/_custom.scss';
export default function Index(){
    return(
        <>
            <Header/>
            <div className="page-content">
                <Routing/>
            </div>
            <Footer/>
        </>
    );
}