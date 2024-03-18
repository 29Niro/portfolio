import React from 'react';

export default function ProjectCard({ project }) {
  const { title, description, imageUrl, githubUrl } = project;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button
        className="bg-purple-800 text-white py-2 px-4 mt-4 rounded hover:bg-purple-700 transition duration-300 ease-in-out"
        onClick={() => window.open(githubUrl, '_blank')}
      >
        view on github
      </button>
    </div>
  );
}
