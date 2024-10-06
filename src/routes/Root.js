import React from 'react';

import { Outlet, ScrollRestoration } from 'react-router-dom';
import MiniNav from '../components/MiniNav';

function Root(props) {
    return (
        <div className="sm:flex p-7 relative ">
            <MiniNav />
            <ScrollRestoration />
            <main>
                <Outlet /> 
            </main>
        </div>
    );
}

export default Root;