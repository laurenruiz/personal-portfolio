import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import LatitudePic from '../../../assets/images/Latitude.jpg'

const Latitude = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className='container latitude-page'>
                <div className='text-zone'>
                    <div className='heading'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['D.E.', 'Shaw\'s', 'Latitude', 'Fellowship']}
                                idx={15}
                            />
                        </h1>
                    </div>
                    <div className='content'>
                        <p>
                            I had the most amazing and insightful experience at the D.E. Shaw Group's Latitude Fellowship 2024! 
                            I am beyond honored to have been able to attend!
                        </p>
                        <div className='picture'>
                            <img className="images" src={LatitudePic} alt="latitude pic" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Latitude;