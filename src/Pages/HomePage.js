import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectPage from "./ProjectPage";
import { Link as ScrollLink} from "react-scroll";
import {Link as RouterLink} from 'react-router-dom'
import image1 from '../Pages/IMAGES/image1.svg'
export default function(){
    return(
        <>
            <Navbar />
            <div id='homepage'>
                <img  src={image1} alt="svg" />
                <div className="homeIntro">
                    <h1>HELLO THERE, I'M DHEERAJ</h1>
                    <p>A Frontend focused Web Developer building the Frontend
                    of Websites and Web Applications
                    that leads to the success of the overall product
                    </p>
                    <button> <ScrollLink  to='project-sec' smooth={true} offset={-10} duration={1000} ><h4>PROJECT</h4> </ScrollLink></button>
                    <RouterLink to="/resume"><button className='projects-btn'><h4>RESUME</h4></button></RouterLink>
                    
                </div>

                
            </div>
            <AboutPage />
            <ProjectPage />
            <ContactPage />
            <Footer />
        </>
        
        

    )
}