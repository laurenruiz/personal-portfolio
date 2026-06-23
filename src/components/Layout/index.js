import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet, useLocation } from 'react-router-dom';
import LogoS from '../../assets/images/butterfly_white.png'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'

const Layout = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => setIsLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [location.pathname])

    return (
        <div className="webpage">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">
                    <span className="outer-tag-html">&lt;html&gt;</span>
                    <br />
                    &lt;body&gt;
                </span>
                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="outer-tag-html">&lt;/html&gt;</span>
                </span>
                <div key={location.pathname} className="loader-overlay" />
                {isLoading && <Loader type="pacman" active={isLoading} />}
            </div>
            <img className='bgButterflies' id='B1' src={LogoS} alt="Butterfly Logo"/>
            <img className='bgButterflies' id='B2' src={LogoS} alt="Butterfly Logo"/>
            <img className='bgButterflies' id='B3' src={LogoS} alt="Butterfly Logo"/>
            <img className='bgButterflies' id='B4' src={LogoS} alt="Butterfly Logo"/>
        </div>
    )
}

export default Layout