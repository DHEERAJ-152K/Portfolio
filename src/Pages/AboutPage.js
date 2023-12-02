import { Link } from "react-scroll"

export default function(){
    return(

        <>
            <div id="AboutMe">
                <div className="intro">
                    <h2>ABOUT ME</h2>
                    <p>Here you will find more information about me, what I do, and my current skills
                    mostly in terms of programming and technology</p>
                </div>

                <div className="extras">
                    <div className="knowMore">
                        <h3>Get to Know More!🚀</h3>
                        <p>
                            I'm a Frontend Web Developer building the Front-end of Websites and Web Applications 
                            that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <p>
                            I also like sharing content related to the stuff that I have learned over the years in Web Development 
                            so it can help other people of the Dev Community.
                        </p>
                        <p>
                            Feel free to Connect or Follow me on
                             my <b><a href="https://www.linkedin.com/in/dheeraj-kp-15drj2000/">Linkedin</a></b> & <b><a href="https://twitter.com/iamDHEERAJKP">Twitter</a></b> where 
                            I post useful content related to Web Development and Programming
                        </p>
                        <p>    
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that 
                            matches my skills and experience then don't hesitate to contact me.
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
                        <button className="skillsBtn"><h4>Terminal</h4></button>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>

    )
}