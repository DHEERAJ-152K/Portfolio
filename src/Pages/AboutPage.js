import { Link } from "react-scroll"
export default function(){
    return(

        <>
            <div id="AboutMe">
                <div className="intro">
                    <h2>ABOUT ME</h2>
                    <p>"Explore additional details about myself, my activities, and my existing expertise,
                     primarily centered around programming and technology."</p>
                </div>

                <div className="extras">
                    <div className="knowMore">
                        <h3>Get to Know More!🚀</h3>
                        <p>
                        "I work as a Full-stack Web Developer, specializing in crafting  websites and web
                         applications, contributing to the overall success of each project. Take a look at some of my showcased 
                         projects in the dedicated section</p>
                       
                        <p>
                        Connect with me on <b><a href="https://www.linkedin.com/in/dheeraj-kp-15drj2000/">Linkedin</a></b> & <b><a href="https://twitter.com/iamDHEERAJKP">Twitter</a></b>, where I regularly share 
                        valuable content on web development and programming.
                           
                        </p>
                        <p>    
                        I am actively seeking new job opportunities that align with my skills and expertise. If you have a fitting opportunity 
                        that encourages contribution, learning, and growth, feel free to reach out to me."
                        </p>

                        <button> <Link  to='contact-sec' smooth={true} offset={-10} duration={1000} ><h4>CONTACT</h4> </Link></button>
                    </div>
                    <div className="skills">
                        <h3>My skills🛠️</h3>
                        <div className="allSkills">
                        <button className="skillsBtn"><h4>HTML</h4></button>
                        <button className="skillsBtn"><h4>CSS</h4></button>
                        <button className="skillsBtn"><h4>JavaScript</h4></button>
                        <button className="skillsBtn"><h4>React</h4></button>
                        <button className="skillsBtn"><h4>Git</h4></button>
                        <button className="skillsBtn"><h4>Github</h4></button>
                        <button className="skillsBtn"><h4>Node js</h4></button>
                        <button className="skillsBtn"><h4>Express</h4></button>
                        <button className="skillsBtn"><h4>MongoDB</h4></button>
                        <button className="skillsBtn"><h4>Responsive Design</h4></button>
                        <button className="skillsBtn"><h4>Bash</h4></button>
                        </div>
                        

                    </div>
                </div>
                
            </div>
        </>

    )
}