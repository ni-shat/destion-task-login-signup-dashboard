// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ setActiveSection }) => {
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
            <h2 className="text-2xl font-bold p-4">Destion</h2>
            <nav className="flex-grow">
                <ul>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={() => setActiveSection('dashboard')}>
                        Dashboard
                    </li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={() => setActiveSection('profile')}>
                        Profile
                    </li>
                    <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={() => setActiveSection('settings')}>
                        Settings
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
