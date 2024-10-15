import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-4">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Profile</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Settings</a>
          </li>
          <li className="mb-4 hover:bg-gray-700 p-2 rounded">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl">Welcome, User!</h1>
          <div className="flex items-center">
            <span className="mr-4">Settings</span>
            <span>Profile</span>
          </div>
        </header>
        <main className="p-4">
          <p>This is the main content area.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
