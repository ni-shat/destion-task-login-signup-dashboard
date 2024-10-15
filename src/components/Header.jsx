// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <div className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div>
                <button className="bg-[#E43C5C] text-white px-4 py-2 rounded">Profile</button>
                <button className="bg-gray-200 text-black px-4 py-2 rounded ml-2">Logout</button>
            </div>
        </div>
    );
};

export default Header;
