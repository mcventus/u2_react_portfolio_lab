import Home from '../home/Home';
import About from '../about/About';
import Contact from'../contact/Contact';
import Projects from '../projects/Projects';

import { Route, Routes } from 'react-router-dom';

const Main = () => {
    return(
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route/>
            </Routes>

        </div>
    )
}
export default Main;