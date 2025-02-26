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
                        Hi! I'm Lauren, I'm a rising junior in Computer Science at Virginia Tech! I
                        am a supportive, ambitious, and innovative individual who enjoys
                        problem solving! 
                    </p>
                    <p>
                        My favorite programming language is Java, however, I also have experience
                        in Python, C, Linux, HTML, CSS, JavaScript and MATLab. 3D Modeling,
                        specifically in AutoDesk Inventor, is something I am also good at. I enjoy
                        learning by doing, which can be seen through my projects!
                    </p>
                    <p>
                        On campus, I am the Social Media Chair for Computer Science Careers, on Dean's
                        Team, a select group of engineering students that welcome prospective students
                        to VT, an analyst with the Consulting Group at VT, and an analyst in training with
                        the Student-managed Endowment of Educational Developement (SEED). I am also a 
                        proud <a href="https://eng.vt.edu/ceed/ceed-undergraduate-programs/clark-scholars-program.html" target="_blank" rel="noreferrer" style={{color:'#fff'}}>A. James Clark Scholar</a> and <a href="https://eng.vt.edu/ceed/studentinvolvement/ceedoutstandingstudents/outstanding-students-october-2024/lauren-ruiz-arenas.html" target="_blank" rel="noreferrer" style={{color:'#fff'}}>VT CEED's October Outstanding Student of the Month!</a>
                    </p>
                    <p>
                        Outside of coding, I enjoy baking with my mom, reading at least 10 pages a
                        day (current book: Atomic Habits by James Clear), and hitting the gym. I also
                        am a dog mom to a beautiful 1-year-old Zuchon puppy named Mimi!
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