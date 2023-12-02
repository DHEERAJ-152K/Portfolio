import { Link as RouterLink } from "react-router-dom"
import Navbar from "./Navbar"

export default function(){
   return(
    <div className="Resume-sec">
         <Navbar />
        <div className="resumeHeader">
        <h1>My resume for Web Developer..</h1>
        <RouterLink to="/"><button className='projects-btn'><h4>-BACK</h4></button></RouterLink>
        </div>
        <iframe src="https://drive.google.com/file/d/1q13MB7KVkltEsbW8IoORmlfc2elUKp5y/preview" width="100%" height='500px' frameborder="0" allowfullscreen></iframe>


    </div>
   )
}