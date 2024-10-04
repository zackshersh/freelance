import React from 'react';

import { Outlet } from 'react-router-dom';
import MiniNav from '../components/MiniNav';

function Root(props) {
    return (
        <div className="flex p-7">
            <MiniNav />
            <main>
                <Outlet /> 
            </main>
        </div>
    );
}

export default Root;