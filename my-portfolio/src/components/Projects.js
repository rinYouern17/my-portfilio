import React from 'react';

function Projects() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="mt-2 space-y-4">
        <li className="border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="mt-2">Description of project 1.</p>
        </li>
        <li className="border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p className="mt-2">Description of project 2.</p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
}

export default Projects;
