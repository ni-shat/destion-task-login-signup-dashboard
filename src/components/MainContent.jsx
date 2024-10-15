// src/components/MainContent.js
import React from 'react';

const MainContent = ({ activeSection }) => {
    return (
        <div className="flex-grow p-4">
            {activeSection === 'dashboard' && (
                <div>
                    <h2 className="text-2xl font-bold">Welcome to the Dashboard</h2>
                    <p>Your main content goes here.</p>
                </div>
            )}
            {activeSection === 'profile' && (
                <div>
                    <h2 className="text-2xl font-bold">Profile</h2>
                    <p>Profile details go here.</p>
                </div>
            )}
            {activeSection === 'settings' && (
                <div>
                    <h2 className="text-2xl font-bold">Settings</h2>
                    <p>Settings options go here.</p>
                </div>
            )}
        </div>
    );
};

export default MainContent;
