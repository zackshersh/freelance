import React from 'react';
import MiniNav from "./components/MiniNav";
import TitleCard2 from "./components/TitleCard2";
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function HomePage(props) {
    return (
        <div className="App min-h-screen">
            <TitleCard2 />
            <Work />
            <About />
            <Contact />
        </div>
    );
}

export default HomePage;