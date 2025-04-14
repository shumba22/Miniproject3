import React, { useState } from 'react';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Field(s) left unanswered, please try again.');
      return;
    }

    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Login was not successful. Please try again :( ');
    }
  };

  if (loggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-green-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-bold text-green-700"> You are logged in!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start mt-20 min-h-screen bg-amber-100">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username:
          </label>
          <input 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password:
          </label>
          <input 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg shadow"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
