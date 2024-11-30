"use client";

import { useState } from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Ecommerce API",
    description: "API escalable para plataformas de comercio electrónico.",
    image: "/project1.jpg",
    tags: ["Nest.js", "TypeScript", "PostgreSQL"],
    link: "https://proyecto1.com",
    github: "https://github.com/angel-iscoding/E-commerce-API"
  },
  {
    title: "Proyecto 1",
    description: "Descripción breve del proyecto y las tecnologías utilizadas.",
    image: "/project2.jpg",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://proyecto2.com",
    github: "https://github.com/usuario/proyecto2"
  },
  {
    title: "Aplicación de Clima",
    description: "Aplicación que muestra el clima actual y pronósticos.",
    image: "/project3.jpg",
    tags: ["React", "API de Clima", "CSS"],
    link: "https://climaapp.com",
    github: "https://github.com/usuario/clima-app"
  },
  {
    title: "Gestor de Tareas",
    description: "Aplicación para gestionar tareas y proyectos de manera eficiente.",
    image: "/project4.jpg",
    tags: ["React", "Redux", "Firebase"],
    link: "https://gestortareas.com",
    github: "https://github.com/usuario/gestor-tareas"
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web personal para mostrar mis proyectos y habilidades.",
    image: "/project5.jpg",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://miportfolio.com",
    github: "https://github.com/usuario/portfolio"
  },
  {
    title: "Juego de Adivinanza",
    description: "Juego interactivo donde los usuarios adivinan palabras.",
    image: "/project6.jpg",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://juegoadivinanza.com",
    github: "https://github.com/usuario/juego-adivinanza"
  },
  {
    title: "Chat en Tiempo Real",
    description: "Aplicación de chat en tiempo real utilizando WebSockets.",
    image: "/project7.jpg",
    tags: ["React", "Node.js", "Socket.io"],
    link: "https://chatapp.com",
    github: "https://github.com/usuario/chat-app"
  },
  {
    title: "Blog Personal",
    description: "Blog donde comparto mis pensamientos y experiencias.",
    image: "/project8.jpg",
    tags: ["Gatsby", "GraphQL", "Markdown"],
    link: "https://mi-blog.com",
    github: "https://github.com/usuario/mi-blog"
  },
  {
    title: "Aplicación de Notas",
    description: "Aplicación para tomar y organizar notas de manera sencilla.",
    image: "/project9.jpg",
    tags: ["React", "LocalStorage", "CSS"],
    link: "https://notasapp.com",
    github: "https://github.com/usuario/aplicacion-notas"
  },
  {
    title: "Sistema de Reservas",
    description: "Sistema para gestionar reservas de restaurantes.",
    image: "/project10.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://reservas.com",
    github: "https://github.com/usuario/sistema-reservas"
  },
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const project = projects[currentIndex];

    return (
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
          {/* Contenedor del proyecto actual */}
          <div className="relative">
            <button onClick={prevProject} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">
              ←
            </button>
            <article 
              className="group border border-gray-300 p-4 min-w-[300px] rounded-xl overflow-hidden mx-auto"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                  >
                    Ver proyecto
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
            <button onClick={nextProject} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">
              →
            </button>
          </div>
          {/* Fin de contenido de proyectos */}
        </div>
      </section>
    );
}
