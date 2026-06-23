import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import { faJava, faPython, faLinux, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Me from '../../assets/images/photo_of_me.JPG'
import Myla from '../../assets/images/myla.jpg'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArray = ['About', 'Me']
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Hi, I’m Lauren, a software engineer passionate about building scalable systems, 
                        solving complex problems, and continuously growing through new challenges.
                    </p>
                    <p>
                        I graduated from Virginia Tech with a degree in Computer Science, where I developed a 
                        strong foundation in software engineering, backend development, and infrastructure. 
                        Through internships at Parsons Corporation and Salesforce, I gained hands-on experience
                        building software, working with large-scale systems, and collaborating with 
                        engineering teams.
                    </p>
                    <p>
                        I’m a curious lifelong learner who enjoys learning by doing and approaching problems 
                        with both technical depth and a human-centered mindset. I’m especially interested in 
                        backend engineering, infrastructure, and exploring the intersection of software and 
                        machine learning.
                    </p>
                    <p>
                        Outside of engineering, I care deeply about community and creating opportunities for 
                        others to succeed. As President of Computer Science Careers at Virginia Tech and an 
                        A. James Clark Scholar, I’ve been fortunate to grow alongside a community that values 
                        mentorship, collaboration, and impact.
                    </p>
                    <p>
                        When I’m not coding, you’ll probably find me reading, baking, exploring new places, 
                        at the gym, or spending time with my Zuchon puppy, Myla.
                    </p>
                    <div className='photos'>
                        <img className="pics" src={Me} alt="me" />
                        <img className="pics" src={Myla} alt="myla" />
                    </div>
                </div>
                <div className='cube'>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#F2C5C7"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faPython} color="#F3ACA6"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faLinux} color="#F3ACA6"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#7F2524"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#F2C5C7"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faHtml5} color="#7F2524"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About