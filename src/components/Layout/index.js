import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';
import LogoS from '../../assets/images/butterfly_white.png'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">
                    <span className="bottom-tag-html">&lt;html&gt;</span>
                    <br />
                    &lt;body&gt;
                </span>

                <Outlet />
                <span className="tags bottoms-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
            <div className='bgButterflies'>
                <img className='solid-logo1' src={LogoS} alt="butterfly1"/>
                <img className='solid-logo2' src={LogoS} alt="butterfly2"/>
                <img className='solid-logo3' src={LogoS} alt="butterfly3"/>
                <img className='solid-logo4' src={LogoS} alt="butterfly4"/>
            </div>
        </div>
    )
}

export default Layout