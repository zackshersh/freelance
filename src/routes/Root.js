import React from 'react';

import { Outlet, ScrollRestoration } from 'react-router-dom';
import MiniNav from '../components/MiniNav';

function Root(props) {
    return (
        <div className="sm:flex p-7">
            <MiniNav />
            <main>
                <Outlet /> 
            </main>
        </div>
    );
}

export default Root;