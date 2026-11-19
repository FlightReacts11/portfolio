import FunctionalProjects from "../functional-component/FunctionalProjects";
import LeBron from "../assets/lebron.png"
import Childcare from "../assets/childcare.png"
import Youtube from "../assets/youtube.png"
import Imdb from "../assets/imdb.png"

function Projects() {
    return(
        <section className="projects-section">
            <h2 className="projects-heading" id="projects">Projects</h2>
            <div className="projects-grid">
                <FunctionalProjects
                    projectName={"Timecard For Childcare Program"}
                    projectLink={"https://flightreacts11.github.io/ojt-calculator/"}
                    codeLink={"https://github.com/FlightReacts11/ojt-calculator"}
                    image={Childcare}
                    description={"Built a timecard solution for the Child Care Apprenticeship Program for Pinellas County Schools."}
                />

                <FunctionalProjects
                    projectName={"YouTube Project - NBA Power Rankings Series"}
                    projectLink={"https://youtu.be/wlCiKe1TkG8?si=Z6ndf8KGz-F1u6KH"}
                    codeLink={"https://github.com/FlightReacts11/youtube"}
                    image={Youtube}
                    description={"Built graphics for a YouTube series with React. Took advantage of Reacts reusability to streamline changes from video to video."}
                />

                <FunctionalProjects
                    projectName={"3D/2D LeBron James Documentary"}
                    projectLink={"https://flightreacts11.github.io/king-of-the-court/"}
                    codeLink={"https://github.com/FlightReacts11/king-of-the-court"}
                    image={LeBron}
                    description={"Created a 3D/2D LeBron James documentary. Implemented sequenced animations and DOM manipulation to create an engaging experience."}
                />

                <FunctionalProjects
                    projectName={"Smash Hits - IMDB Api Project"}
                    projectLink={"https://flightreacts11.github.io/smash-hits/"}
                    codeLink={"https://github.com/FlightReacts11/smash-hits"}
                    image={Imdb}
                    description={"Built a project using IMDBs database to fetch and display data including poster, name, trailer, etc."}
                />
            </div>
        </section>
    )
}
export default Projects