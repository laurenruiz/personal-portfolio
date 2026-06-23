import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'

const ProjectDetail = ({ strArray, idx = 15, timeout = 3000, children }) => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), timeout)
        return () => clearTimeout(timer)
    }, [timeout])

    return (
        <div className='container project-detail-page'>
            <div className='text-zone'>
                <div className='heading'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={strArray}
                            idx={idx}
                        />
                    </h1>
                </div>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
