import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import GooglePic from '../../../assets/images/LSLS.JPG'

const LSLS = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className='container lsls-page'>
                <div className='text-zone'>
                    <div className='heading'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['Latinx', 'Student', 'Leadership', 'Summit']}
                                idx={22}
                            />
                        </h1>
                    </div>
                    <div className='content'>
                        <p>
                            I had the most amazing and insightful experience at Google's Latinx Student Leadership Summit 2024! I am beyond
                            honored to have been able to attend!
                        </p>
                        <div className='picture'>
                            <img className="images" src={GooglePic} alt="connect violet pic" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default LSLS;