import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import avatar from '../public/avatar.jpg';

function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div>
      {!isDashboard && (
        <div className="p-4 bg-gray-100 text-white absolute top-4 right-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-[#E43C5C] text-white px-4 py-2 rounded-3xl hover:bg-[#a13246] flex gap-2 justify-center items-center"
          >
            <img src={avatar} alt="User Avatar" className="w-5 h-5 rounded-full" />
            Dashboard
          </button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
