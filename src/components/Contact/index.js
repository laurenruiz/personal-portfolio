import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
}, [])

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('outlook', 'template_3c86314', refForm.current, 'VqulWMZtkdbEJytTZ')
    .then(() => {
        alert('Message Sent!')
        window.location.reload(false)
    },
    () => {
        alert('Message failed to send, please try again!')
    })
}
  

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['Contact', 'me']}
                idx={15}
                />
            </h1>
            <p>
                I am interested in internship 
                opportunities for Summer 2025 and 
                experiential learning opportunities.
                If you have any questions or 
                comments, please reach out to me with 
                the form below! 
                <br />
            </p>
        <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
              <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="send-button" value="SEND" />
                </li>
              </ul>
            </form>
            </div> 
            <p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </p>         
        </div>
        <br></br>
        <br></br>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact