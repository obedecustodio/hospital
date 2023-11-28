import '../App.css';
import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
// import MainContent from './components/MainContent';

function Lay() {
    return (
        <div className="app-container">
            <Navbar />
            <Sidebar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}


export default Lay