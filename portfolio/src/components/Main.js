import Home from './Home';
import About from './About';
import Contact from'./Contact';
import Projects from './Projects';

import { Route, Routes } from 'react-router-dom';

const Main = () => {
    return(
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="" element={<About/>}/>
                <Route/>
            </Routes>

        </div>
    )
}
export default Main;