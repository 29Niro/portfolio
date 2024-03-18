import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-2 w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-900 focus:outline-none focus:shadow-outline-purple"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
