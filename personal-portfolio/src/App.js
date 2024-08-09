import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import SEED from './components/Projects/SEED';
import LSLS from './components/Projects/LSLS';
import Latitude from './components/Projects/Latitude';
import Walmart from './components/Projects/Walmart';
import ConnectViolet from './components/Projects/ConnectViolet';
import PersonalPortfolio from './components/Projects/PersonalPortfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/personal-portfolio" element ={<Home />} />
        <Route path="/projects" element ={<Projects />} />
        <Route path="/projects/SEED" element ={<SEED />} />
        <Route path="/projects/LSLS" element ={<LSLS />} />
        <Route path="/projects/latitude" element ={<Latitude />} />
        <Route path="/projects/walmart" element ={<Walmart />} />
        <Route path="/projects/connect-violet" element ={<ConnectViolet />} />
        <Route path="/projects/personal-portfolio" element ={<PersonalPortfolio />} />
        <Route path="/contact" element ={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
