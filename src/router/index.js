import {
    BrowserRouter as Router,
    useRoutes,
} from 'react-router-dom';

import React from "react";
import Login from '../page/login/Index';
import Dashboard from '../page/dashboard/Index';


const AuthRoutes = () => {
    const routes = [
        { path: '/', element: <Login /> },
        { path: '/dashboard', element: <Dashboard /> },

        // {
        //     element: <></>,
        //     children: [
        //         { path: '/login', element: <Login /> },

        //     ],
        // },
    ]

    return useRoutes(routes);
}

const QRouter = () => {
    return (
        <Router basename='/'>
            <AuthRoutes />
        </Router>

    )
}

export default QRouter