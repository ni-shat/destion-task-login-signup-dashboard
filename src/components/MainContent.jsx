// src/components/MainContent.js
import React from 'react';

const MainContent = ({ activeSection }) => {
    return (
        <div className="flex-grow p-6  rounded-lg shadow-md">
            {activeSection === 'dashboard' && (
                <div>
                    <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h2>
                    <p className="text-lg mb-6">
                        We’re Creative Agency. Here, you can manage your projects and monitor your progress.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Project Overview</h3>
                            <p>Get insights into your ongoing projects and their statuses.</p>
                        </div>
                        <div className="bg-red-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Recent Activity</h3>
                            <p>Stay updated with the latest changes and actions taken on your projects.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Team Performance</h3>
                            <p>Review your team&apos;s productivity and performance metrics.</p>
                        </div>
                    </div>
                </div>
            )}
            {activeSection === 'profile' && (
                <div>
                    <h2 className="text-3xl font-bold mb-4">Profile</h2>
                    <p className="text-lg mb-6">Manage your personal information and settings.</p>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Your Information</h3>
                    </div>
                </div>
            )}
            {activeSection === 'settings' && (
                <div>
                    <h2 className="text-3xl font-bold mb-4">Settings</h2>
                    <p className="text-lg mb-6">Customize your preferences and notifications.</p>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Notification Preferences</h3>
                        <p>Manage your notification settings here.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainContent;
