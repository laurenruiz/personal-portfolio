import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import WalmartPic from '../../../assets/images/Walmart.jpg'

const Walmart = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className='container walmart-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['Walmart', 'Sophomore', 'Summit']}
                            idx={19}
                        />
                    </h1>
                    <h4>
                        I had the most amazing and insightful experience at Walmart and Sam's Club Sophomore Summit 2024! I am beyond
                        honored to have been able to attend!
                    </h4>
                    <img className="images" src={WalmartPic} alt="walmart pic" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
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

export default Walmart;