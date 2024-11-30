export default function Skills() {
    const skills = [
      { image: 'path/to/image1.jpg', title: 'Título 1', description: 'Descripción de la habilidad 1.' },
      { image: 'path/to/image2.jpg', title: 'Título 2', description: 'Descripción de la habilidad 2.' },
      { image: 'path/to/image3.jpg', title: 'Título 3', description: 'Descripción de la habilidad 3.' },
      { image: 'path/to/image4.jpg', title: 'Título 4', description: 'Descripción de la habilidad 4.' },
      { image: 'path/to/image5.jpg', title: 'Título 5', description: 'Descripción de la habilidad 5.' },
      { image: 'path/to/image6.jpg', title: 'Título 6', description: 'Descripción de la habilidad 6.' },
    ];

    return (
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold mb-8">Skill-Set</h2>
          {/* Contenido de proyectos aquí */}
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="card border border-gray-300 p-4">
                <img src={skill.image} alt={skill.title} className="w-full h-32 object-cover" />
                <h3 className="font-semibold">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
          {/* Fin de contenido de proyectos */}
        </div>
      </section>
    );
  }
  