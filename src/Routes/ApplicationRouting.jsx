import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from '../Components/Home/PageNotFound';
import Home from '../Components/Home/Index';
import AboutUs from '../Components/Home/AboutUs';

export default function Routing(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<PageNotFound/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    {/* <Route path="/" element={<Home/>}/> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}
