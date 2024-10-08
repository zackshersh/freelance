import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './App';

import { 
    createBrowserRouter,
    createHashRouter,
    RouterProvider
} from "react-router-dom";
import HomePage from './HomePage';
import Root from "./routes/Root.js";
import ProjectPage from './ProjectPage.js';


const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [ 
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "rise-study",
                element: <ProjectPage index={0} />
            },
            {
                path: "bhs",
                element: <ProjectPage index={1} />

            },
            {
                path: "carrboro-farmers-market",
                element: <ProjectPage index={2} />
            },
            {
                path: "bottle-theory",
                element: <ProjectPage index={3} />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

