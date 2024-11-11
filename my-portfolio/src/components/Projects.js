import React from 'react';

const Project = () => {
    const projects = [
        {
            title: "Pet Shop",
            role: "Team Leader",
            tech: "HTML, CSS, SASS",
            date: "Sep 12 – Oct 02, 2023"
        },
        {
            title: "POS System",
            role: "Quality Assurance",
            tech: "HTML, CSS, JavaScript",
            date: "Dec 11 – Dec 19, 2023"
        },
        {
            title: "LMS System",
            role: "Git Manager",
            tech: "PHP, MySQL",
            date: "Feb 12 - Mar 29, 2024"
        },
        {
            title: "Airline Management System",
            role: "Git Manager",
            tech: "OOP Typescript",
            date: "Apr 22, 2024"
        },
        {
            title: "Easy Travel",
            role: "Scrum Master and Database Developer",
            tech: "Laravel, Vue Js, MySQL",
            date: "July 01, 2024"
        }
    ];

    return (
        <section className="flex flex-col justify-center items-start p-8 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white">
            <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">SELECTED PROJECTS</h2>
                <div className="bg-blue-500 h-1 w-20 mb-4"></div>
                <div className="text-6xl font-extrabold text-gray-700 mb-6">
                    2023 - 2024
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-2">Role: {project.role}</p>
                        <p className="text-gray-400 mb-2">Using: {project.tech}</p>
                        <p className="text-gray-400">{project.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
