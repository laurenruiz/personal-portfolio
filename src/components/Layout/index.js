import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';
import LogoS from '../../assets/images/butterfly_white.png'

const Layout = () => {
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
            </div>
            <img className='bgButterflies' id='B1' src={LogoS} alt="Butterfly Logo"/>
            <img className='bgButterflies' id='B2' src={LogoS} alt="Butterfly Logo"/>
            <img className='bgButterflies' id='B3' src={LogoS} alt="Butterfly Logo"/>
            <img className='bgButterflies' id='B4' src={LogoS} alt="Butterfly Logo"/>
        </div>
    )
}

export default Layout