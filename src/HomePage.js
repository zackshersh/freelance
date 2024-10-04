import React from 'react';
import MiniNav from "./components/MiniNav";
import TitleCard2 from "./components/TitleCard2";
import Work from './components/Work';

function HomePage(props) {
    return (
        <div className="App min-h-screen">
            <TitleCard2 />
            <Work />
        </div>
    );
}

export default HomePage;