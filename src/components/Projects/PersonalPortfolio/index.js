import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import YTVidSS from '../../../assets/images/youtube_picture.png'
import PortfolioSS from '../../../assets/images/portfolio.png'


const PersonalPortfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
    }, [])

    return (
        <>
            <div className='container personal-port-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['Personal', 'Portfolio']}
                            idx={15}
                        />
                    </h1>
                    <h4>
                        Using this youtube video, I was able to create this personal portfolio! This portfolio really
                        helped me strengthened my knowledge and experience in React, and in HTML, CSS, and JavaScript.
                        It has also given me an opportunity to explore my creative side and my writing skills. I hope to
                        expand upon this portfolio by including other personal projects and class projects.
                    </h4>
                    <div className='images'>
                        <div className='project'>
                            <Link to="/">
                                    <img className="pics" src={PortfolioSS} alt="portfolio pic" />
                            </Link>
                            <div className='title'>
                                <h3>Personal Portfolio!</h3>
                            </div>
                        </div>
                        <div className='project'>
                            <Link to="https://www.youtube.com/watch?v=bmpI252DmiI" target="_blank">
                                <img className="pics" src={YTVidSS} alt="yt vid pic" />
                            </Link>
                            <h3>Video Tutorial Followed!</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default PersonalPortfolio;