import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

function SignUp() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("SignUp Data:", form);
    alert("Signup submitted!");
    try{
      const re= await axios.post('/api/auth/signup',form)
      console.log(re)
    }
    catch(error){
      console.error(error)
    }
    // Add signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600 px-4">
      <form onSubmit={handleSubmit} className="bg-white/30 p-6 rounded-lg shadow-md w-full max-w-md space-y-4 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <div className="flex gap-4">
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
          />
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          required
        />
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile Number (optional)"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
