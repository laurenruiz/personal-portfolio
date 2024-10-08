import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
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
                    <div className='heading'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['SEED']}
                                idx={15}
                            />
                        </h1>
                    </div>
                    <div className='content'>
                        <p>This is a page about SEED, or the Student-managed Endowment for Educational Developement at Virginia Tech. I applied for this organization as a method of educating myself on a field that has always interested me, Finance. This organization manages a $5 million dollar portfolio with a goal of outperforming the S&P 500. My current role is Analyst-in-Training, and over the Fall 2024 Semester, I will be apart of a training program focused on valuation, company research, stock pitch creation, and the fundamentals of finance.</p>
                        <div className='project'>
                            <p>Here's a stock pitch I made for SEED as apart of my recruitment process. I built up my research and presentation skills, and learned a bit about how to evaluate a company and the Stock Market</p>
                            <iframe src="https://onedrive.live.com/embed?resid=5385126CA65E02B8%2159389&amp;authkey=%21AKAEF2YQvfxpaAY&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0" title="RCLStockPitch"></iframe>
                        </div>
                        <div className='project'>
                            <p>Here's a market update I made!</p>
                            <iframe src="https://onedrive.live.com/embed?resid=5385126CA65E02B8%2197918&amp;authkey=%21ACuJIIiXxixqtiQ&amp;em=2&amp;wdAr=0.7727272727272727" width="288px" height="415px" frameborder="0" title="MayMarketUpdate"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default SEED;