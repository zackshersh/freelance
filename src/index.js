import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './App';

import { 
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import HomePage from './HomePage';
import Root from "./routes/Root.js";
import ProjectPage from './ProjectPage.js';


const router = createBrowserRouter([
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

