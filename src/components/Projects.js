import React from 'react'
import ProjectCard from './repetable/ProjectCard'
import Logo from '../assets/Logo.png'

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1.',
    imageUrl: { Logo },
    githubUrl: '',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2.',
    imageUrl: 'path-to-image-2.jpg',
    githubUrl: '../assets/Logo.png',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3.',
    imageUrl: 'path-to-image-3.jpg',
    githubUrl: '',
  },

  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4.',
    imageUrl: 'path-to-image-4.jpg',
    githubUrl: '',
  },
];

export default function Projects() {
  return (
    <section className="px-4 lg:px-20 py-10 bg-gradient-to-tl from-purple-950 via-purple-600 to-purple-300">
      <h1 className="text-3xl font-anta font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
