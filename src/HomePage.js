import React from 'react';
import MiniNav from "./components/MiniNav";
import TitleCard2 from "./components/TitleCard2";
import Work from './components/Work';
import About from './components/About';

function HomePage(props) {
    return (
        <div className="App min-h-screen">
            <TitleCard2 />
            <Work />
            <About />
        </div>
    );
}

export default HomePage;