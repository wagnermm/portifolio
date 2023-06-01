import './Projects.css';
import BarberLogo from '../Images/logo.jpg';
import Calculator from '../Images/calculator.png'
import Cake from '../Images/cake.gif'


const Projects=()=> {
    return(
        <div className="main-project">
            <h1>Meus projetos</h1>
            <div className="project-cards" id="projects">
                <div className="project">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={BarberLogo} alt="logo" /></a>
                </div>
                <div className="project">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Calculator} alt="logo" /></a>
                </div>
                <div className="project">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Cake} alt="cake"/></a>
                </div>
                <div className="project">

                </div>
                <div className="project">

                </div>
                <div className="project">

                </div>
            </div>
            <div className="top"><a href="#top">Voltar ao topo</a></div>
        </div>
    )
}

export default Projects