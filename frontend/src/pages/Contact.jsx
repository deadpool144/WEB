import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic to send data to a backend or email service
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/30 p-6 rounded shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Mobile No.</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your mobile number"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded resize-y focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Type your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
