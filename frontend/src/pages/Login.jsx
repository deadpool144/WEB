import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    alert("Login submitted!");
    // Add login logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 px-4">
      <form onSubmit={handleSubmit} className="bg-white/30 p-6 rounded-lg shadow-md w-full max-w-sm space-y-4 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center">Login</h2>

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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
