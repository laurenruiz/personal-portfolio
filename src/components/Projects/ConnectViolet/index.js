import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import ConnectVioletSS from '../../../assets/images/connect-violet.jpg'
import HackViolet from '../../../assets/images/hackviolet.jpg'

const ConnectViolet = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container connect-violet-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['ConnectViolet']}
                            idx={15}
                        />
                    </h1>
                    <h4>
                        ConnectViolet is a website with an integrated personality test to help women in STEM majors on campus
                        find each other and build a community! I collaborated in a team of 3 to create this website using
                        Replit, HTML, and JavaScript. This project was started during Association of Women in Computing's 
                        2023 HackViolet Hackathon at Virginia Tech!
                    </h4>
                    <div className='images'>
                        <div className='project'>
                            <Link to="https://laurenruiz.github.io/connect-violet/" target="_blank">
                                    <img className="pics" src={ConnectVioletSS} alt="connect violet pic" />
                            </Link>
                            <div className='title'>
                                <h3>ConnectViolet!</h3>
                            </div>
                        </div>
                        <div className='links'>
                            <Link to="https://main--hackviolet.netlify.app/" target="_blank">
                                <img className="pics" src={HackViolet} alt="hack violet pic" />
                            </Link>
                            <h3>HackViolet!</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default ConnectViolet;