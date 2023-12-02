export default function(){
    return (
        <div id="project-sec">
            <div className="intro">
                <h2>PROJECTS</h2>
                <p>
                "Explore a collection of both personal and client projects, each accompanied by its own detailed case study."
                </p>
            </div>


            <div className='projects'>
                <>
                    <img className="projectImg" src="https://codecanyon.img.customer.envatousercontent.com/files/465177733/header.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=f2f692891cf89020044c024d8ff4d6ed"alt="svg" />
                    <div className='project-desc'>
                    
                        <h3>Vote Chain</h3>

                        <p>"Vote Chain is an innovative voting system developed by our team, utilizing Blockchain Technology.
                         The primary objective of this project is to mitigate malpractices commonly observed during the casting and counting of votes."</p>

                        <button ><h4>Read More</h4></button>
                        

                    </div>
                </>
                <>
                    <img className="projectImg" src="https://assets-global.website-files.com/5c7fdbdd4e3feeee8dd96dd2/6250bb63a52f834154912cd2_nonprofit-ui-kit%20(1).jpg"alt="svg" />
                    <div className='project-desc'>
                    
                        <h3>TECH-HUB</h3>

                        <p>"Tech-Hub is a dynamic blog post website meticulously crafted by our team. This platform serves as a comprehensive tech resource hub,
                         aiming to provide valuable insights, trends, and updates in the ever-evolving technology landscape. Our commitment lies in
                         creating a space that fosters knowledge-sharing and community engagement within the tech enthusiasts' sphere."
                         </p>

                        <button ><h4>Read More</h4></button>
                        

                    </div>
                </>
                <>
                    <img className="projectImg" src="https://cdn.dribbble.com/users/136707/screenshots/2338485/cineplex_experience_still_2x.gif?resize=400x300&vertical=center"alt="svg" />
                    <div className='project-desc'>
                    
                        <h3>FLIX-DB</h3>

                        <p>"Flix-DB is a cutting-edge platform inspired by the likes of IMDB, It offers insights into a vast array of movies and shows,
                         catering to avid entertainment enthusiasts. Our mission
                          is to provide a user-friendly interface that delivers in-depth information, reviews, and recommendations, elevating the 
                          user's experience in the world of cinematic exploration."
                        </p>

                        <button ><h4>Read More</h4></button>
                        

                    </div>
                </>
                
            </div>
        </div>
    )
}