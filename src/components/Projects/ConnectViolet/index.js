import './index.scss'
import AnimatedLetters from '../../../components/AnimatedLetters'
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
                    <div className='heading'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['Connect','Violet']}
                            idx={15}
                        />
                    </h1>
                    </div>
                    <div className='content'>
                        <p>
                        The Project
                        </p>
                        <p>
                            ConnectViolet is a web application designed to help women in STEM majors at Virginia Tech connect and build meaningful communities. Using a personality matching system, the platform helps students find like-minded peers in their field. We built this during the 2023 HackViolet Hackathon, organized by the Association of Women in Computing.
                        </p>
                        <p>
                        Taking the First Step
                        </p>
                        <p>
                            I still remember the mixture of excitement and nervousness as I walked into the hackathon. As someone who had only coded individually in high school classes, the idea of creating a project in a team felt intimidating. Although I was excited for the challenge, I simply didn't know what to expect. Thankfully, I wasn't alone as my two best friends had decided to join me.
                        </p>
                        <p>
                        From Classroom to Real-World Application
                        </p>
                        <p>
                            One of the most rewarding aspects of this project was applying my high school programming knowledge in a practical setting. I took the lead on developing the personality matching system, utilizing my experience with JavaScript functions to create an algorithm that would connect users based on their responses. It was incredibly satisfying to see concepts I'd learned in class transform into features that could actually create an impact people's lives.
                        </p>
                        <div className='picture'>
                            <Link to="https://main--hackviolet.netlify.app/" target="_blank">
                                <img className="pics" src={HackViolet} alt="hack violet pic" />
                            </Link>
                            <h3>Learn more about HackViolet!</h3>
                        </div>
                        <p>
                        The Hackathon Experience
                        </p>
                        <p>
                            The 24-hour coding marathon was unlike anything I'd experienced before. Between attending workshops on web development and debugging sessions with mentors, I felt incredibly motivated and passionate about persevering through each obstacle. The organizers did a great job providing endless snacks and coffee, so we were able to focus entirely on building our vision.
                        </p>
                        <p>
                        Technical Implementation
                        </p>
                        <p>
                        We built ConnectViolet using:
                        <ul>
                            <li>HTML for the frontend structure</li>
                            <li>JavaScript for the personality matching algorithm and user interactions</li>
                            <li>Replit as our development platform, which made real-time collaboration seamless</li>
                        </ul>
                        </p>
                        <p>
                        Learning Through Challenges
                        </p>
                        <p>
                            While there were moments of stress, especially when trying to integrate different components of the project, the supportive atmosphere of the hackathon kept us going. Each challenge became a learning opportunity. Looking back, HackViolet was more than just a coding competition. It was my first taste of collaborative development, an introduction to the tech community, and proof that I could transform my ideas into reality. The experience taught me that with the right team and mindset, even ambitious projects are achievable.
                        </p>
                        <div className='picture'>
                            <Link to="https://laurenruiz.github.io/connect-violet/" target="_blank">
                                    <img className="pics" src={ConnectVioletSS} alt="connect violet pic" />
                            </Link>
                            <h3>Link to ConnectViolet!</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default ConnectViolet;