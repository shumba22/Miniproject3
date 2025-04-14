import React, { useState } from 'react';
import axios from 'axios'; // Don't forget this!

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = ('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/\d/.test(firstName)) {
      alert('First Name must not contain numbers.');
      return;
    }

    if (/\d/.test(lastName)) {
      alert('Last Name must not contain numbers.');
      return;
    }

    if (!/^\d+$/.test(id)) {
      alert('ID must be numeric only.');
      return;
    }

    if (!(email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.'))) {
      alert('Email must contain "@" and "." symbols, with "@" before the ".".');
      return;
    }

    if (!city) {
      alert('Please select a city.');
      return;
    }

    if (!/^\d+$/.test(zipCode) || zipCode.length !== 5) {
      alert('Zip Code must be numeric only and be 5 digit.');
      return;
    }

    if (/\s/.test(username)) {
      alert('Username cannot contain spaces.');
      return;
    }

    if (!/^[A-Za-z]/.test(username)) {
      alert('Username must start with a letter.');
      return;
    }

    if (password.length < 10) {
      alert('Password must be at least 10 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert('Password must contain at least one uppercase letter.');
      return;
    }

    if (!/[a-z]/.test(password)) {
      alert('Password must contain at least one lowercase letter.');
      return;
    }

    if (!/[0-9]/.test(password)) {
      alert('Password must contain at least one digit to be valid.');
      return;
    }

    const userData = {
      firstName,
      lastName,
      id,
      email,
      city,
      zipCode,
      username,
      password,
    };

    axios.post("http://localhost:3000/adduser/", userData)
      .then((response) => {
        console.log("User registered successfully:", response.data);
        alert("Registration saved to the database!");
        setFirstName('');
        setLastName('');
        setId('');
        setEmail('');
        setCity('');
        setZipCode('');
        setUsername('');
        setPassword('');
      })
      .catch((error) => {
        console.error("Error saving registration:", error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-start mt-10 min-h-screen bg-amber-100">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400" />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400" />
        </div>

        {/* ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400" />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City:</label>
          <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400">
            <option value="">Select a city</option>
            <option value="Greenwood">Greenwood</option>
            <option value="Metropolis">Metropolis</option>
            <option value="Laurens">Laurens</option>
            <option value="Gotham City">Gotham City</option>
          </select>
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code:</label>
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400" />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400" />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-amber-400" />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
