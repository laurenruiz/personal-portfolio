import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import YTVidSS from '../../../assets/images/youtube_picture.png'
import PortfolioSS from '../../../assets/images/portfolio.png'
import VertSideBar from '../../../assets/images/Vertical_sidebar.png'
import Devtools from '../../../assets/images/devtools.png'
import WordCloud from '../../../assets/images/word-cloud.png'


const PersonalPortfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
    }, [])

    return (
        <>
            <div className='container personal-port-page'>
                <div className='text-zone'>
                    <div className='heading'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['Personal', 'Portfolio']}
                                idx={15}
                            />
                        </h1>
                    </div>
                    <div className='content'>
                        <p>
                        My freshman year, I attended a SHPE meeting with a special guest, Josh Bailey, a recruiter from CoStar Group. As a freshman and a first-generation student, I remember how his career advice was eye-opening. Josh not only introduced us to ideas I hadn’t considered before, such as negotiating job offers, but he also suggested a key way to stand out as an applicant: creating a website using React and a .NET framework. This idea was a catalyst for my project, and I am deeply grateful for it.

                        So really quick I just wanted to say thank you, Josh, for coming to speak to us and providing such valuable guidance! Your advice inspired me to start this website project and has significantly impacted my college career!
                        </p>
                        <p>
                            Version #1
                        </p>
                        <p>
                            To start, I followed a Youtube tutorial to recreate a webpage design I admired. After recreating that tutorial, I watched the video again, this time experimenting with my own design ideas, which proved essential for understanding each component's functionality. I used HTML to format the layout, CSS to style the pink outline, and JavaScript to add functionality, such as animated titles (try hovering over or tapping on them if on mobile!). As web development was new to me, my initial code had significant errors, such as not properly isolating components, which led to unintended visual changes. Elements were styled by multiple CSS files unintentionally, and I hardcoded elements using absolute values, causing issues on mobile and tablet devices. 

                            The most challenging aspect of this version was deploying my website to GitHub Pages. I aimed for a simple URL but initially faced connection issues. After some Googling, I was able to upgrade to a new kind of error, a blank white webpage. One bit of hope, however, was that the blank page had my name and logo as the title. This small win motivated me to continue. I had been very dedicated to seeing the final results, so I thought to attend my professor's office hours and ask for help from them, but unfortunately, none of my professors had office hours for the following day, but another professor within the CS department did! I packed up my work and went, and thankfully, he kindly took the time to explain a bit more what was happening. I finally launched my webpage, albeit with “personal-portfolio” added to the Github Pages URL.
                        </p>
                        <div className='picture'>
                            <Link to="https://www.youtube.com/watch?v=bmpI252DmiI" target="_blank">
                                <img className="pics" src={YTVidSS} alt="yt vid pic" />
                            </Link>
                            <h3>Click to watch the video tutorial I followed!</h3>
                        </div>
                        <p>
                            Version #2
                        </p>
                        <p>
                            The first version had overflow issues on various screen sizes. Some of the elements were also calculated using measurements from my laptop screen size, my headshot would be completely off the page, elements would stack, and text was very small to read. To address this, I utilized Google Chrome's Dev Tools to visualize each element and identify areas of conflict. I quickly realized that in web design, simpler is better, and I rewrote the website using Flexbox and relative positioning. I also created mobile and tablet versions to improve accessibility. This redesign addressed layout issues and improved readability, despite the challenge of working with a vertical sidebar on phones. The sidebar constrained my space for actual content on narrower screens, however, I was able to use some smart layout decisions like column displays instead of row displays to bypass this design flaw.
                        </p>
                        <div className='picture'>
                            <Link to="/">
                                    <img className="pics" src={Devtools} alt="pic using DevTools" />
                            </Link>
                            <div className='title'>
                                <h3>Using DevTools!</h3>
                            </div>
                        </div>
                        <p>
                            Version #3
                        </p>
                        <p>
                            This version resulted after a nitpick on Version #2 and taking it very far. Immediately after finishing up Version #2, the idea of a horizontal sidebar stuck with me, however, I knew I would have to implement this on my own, I didn’t have the security of referring to a video to help mitigate errors. However, if you know me, you know that did not scare me one bit, especially if I could have my vision successfully carried out. Using online resources and my previous knowledge from this website so far, I was able to implement a horizontal sidebar to mobile and tablet versions, as well as a way to properly handle overflow, through implementing scrolling.
                        </p>
                        <div className='picture'>
                            <Link to="/">
                                    <img className="pics" src={VertSideBar} alt="pic with vertical sidebar" />
                            </Link>
                            <div className='title'>
                                <h3>Awkward Layout!</h3>
                            </div>
                        </div>
                        <p>
                            Reflection
                        </p>
                        <p>
                            It has also given me an opportunity to explore my creative side and my writing skills. I hope to expand upon this portfolio potentially by adding more fun interactive techniques, such as embedding a game or new animation.    
                        </p>
                        <div className='picture'>
                            <Link to="/">
                                    <img className="pics" src={WordCloud} alt="Word Cloud of Topics Learned" />
                            </Link>
                            <div className='title'>
                                <h3>Word Cloud of What I Learned!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default PersonalPortfolio;