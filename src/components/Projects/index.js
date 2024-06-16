import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import ConnectVioletSS from '../../assets/images/connect-violet.jpg'
import PortfolioSS from '../../assets/images/portfolio.png'
import SEEDSS from '../../assets/images/SEED-logo.png'
import GooglePic from '../../assets/images/LSLS.JPG'
import LatitudePic from '../../assets/images/Latitude.jpg'
import WalmartPic from '../../assets/images/Walmart.jpg'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['My Projects and Experiences!']}
                            idx={12}
                        />
                    </h1>
                    <div className='images'>
                        <div className='project'>
                            <Link to="/projects/personal-portfolio">
                                <img className="pics" src={PortfolioSS} alt="cv pic" />
                            </Link>
                            <h3>Personal<br></br>Portfolio!</h3>
                        </div>
                        <div className='project'>
                            <Link to="/projects/connect-violet">
                                    <img className="pics" src={ConnectVioletSS} alt="portfolio pic" />
                            </Link>
                            <div className='title'>
                                <h3>ConnectViolet!</h3>
                            </div>
                        </div>
                        <div className='project'>
                            <Link to="/projects/SEED">
                                    <img className="pics" src={SEEDSS} alt="portfolio pic" />
                            </Link>
                            <div className='title'>
                                <h3>SEED!</h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className='images'>
                        <div className='project'>
                            <Link to="/projects/LSLS">
                                <img className="pics" src={GooglePic} alt="cv pic" />
                            </Link>
                            <h3>Google LSLS!</h3>
                        </div>
                        <div className='project'>
                            <Link to="/projects/latitude">
                                    <img className="pics" src={LatitudePic} alt="icon button for walmart" />
                            </Link>
                            <div className='title'>
                                <h3>Latitude<br></br>Fellowship!</h3>
                            </div>
                        </div>
                        <div className='project'>
                            <Link to="/projects/walmart">
                                    <img className="pics" src={WalmartPic} alt="icon button for walmart" />
                            </Link>
                            <div className='title'>
                                <h3>Sophomore<br></br>Summit!</h3>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects;