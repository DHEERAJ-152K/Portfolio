import {Link} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'

export default function(){
    return (
        <div id='Navigation'>

            <div className='logo'>
                <Link to='homepage' smooth={true} offset={-100} duration={1000} ><h4>DHEERAJ KP.</h4></Link>
            </div>
             <Link  to='homepage' smooth={true} offset={-100} duration={1000} ><h4>HOME</h4> </Link>
             <Link  to='AboutMe' smooth={true} offset={-10} duration={1000} ><h4>ABOUT</h4> </Link>
             <Link  to='project-sec' smooth={true} offset={-10} duration={1000} ><h4>PROJECTS</h4> </Link>
             <Link  to='contact-sec' smooth={true} offset={-10} duration={1000} ><h4>CONTACT</h4> </Link>

        </div>
    )
}