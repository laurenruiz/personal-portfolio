import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import HeadShot from '../../assets/images/laurenruiz@vt.edu-7.jpg'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const introArray = ['Hi,', 'I\'m']
    const nameArray = ['Lauren', 'Ruiz-Arenas,']
    const jobArray = ['Software', 'Engineer']

    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), 7000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="container home-page">
            <div className='headshot'>
                <img src={HeadShot} alt="headshot" />
            </div>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={17} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={23} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26} />
                </h1>
                <h2>Experienced in Infrastructure and DevOps</h2>
                <div className='button'>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
