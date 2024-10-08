import './index.scss'
import AnimatedLetters from '../../../temp/AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'


const SEED = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container SEED-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['SEED']}
                            idx={15}
                        />
                    </h1>
                    <h4>This is a page about SEED</h4>
                    <div className='stock-pitch'>
                        <h4>Here's a stock pitch I made for SEED as apart of my recruitment process. I built up my research and presentation skills, and learned a bit about how to evaluate a company and the Stock Market</h4>
                        <iframe src="https://onedrive.live.com/embed?resid=5385126CA65E02B8%2159389&amp;authkey=%21AKAEF2YQvfxpaAY&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0" title="RCL Stock Pitch"></iframe>
                    </div>
                    <div className='market-update'>
                        <h4>Here's a market update I made!</h4>
                        <iframe src="https://onedrive.live.com/embed?resid=5385126CA65E02B8%2197918&amp;authkey=%21ACuJIIiXxixqtiQ&amp;em=2&amp;wdAr=0.7727272727272727" width="288px" height="476px" frameborder="0" title="MayMarketUpdate"></iframe>
                    </div>
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

export default SEED;