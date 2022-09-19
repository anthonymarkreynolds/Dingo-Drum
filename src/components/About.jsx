import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="aboutMe">
            <h1>About Dingo Drum</h1>
            <p>Dingo Drums is the brainchild of Yumi Yu, Anthony Reynolds, Todd Yu and Hardeep Singh. Created in response to a 1 day hackathon set by the Coder Academy.</p>
            <p>Previous projects include the Dingo Weather app, which can be found <Link to={{ pathname: "https://anthonymarkreynolds.github.io/Dingo-Weather/"}} target="_blank">here</Link>.</p>
        </div>
    );
}
 
export default About;