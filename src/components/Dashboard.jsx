// src/components/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    return (
        <div className="flex">
            <Sidebar setActiveSection={setActiveSection} />
            <div className="flex-1 flex flex-col">
                <Header />
                <MainContent activeSection={activeSection} />
            </div>
        </div>
    );
};

export default Dashboard;
