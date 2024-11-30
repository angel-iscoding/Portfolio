import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center section-padding  rounded-b-3xl">
        <div className="container flex mx-auto w-1/2 justify-center items-center">
            <div className="space-y-4 justify-center items-center">
                <div className="flex justify-center">
                    <div className="w-50 h-50 rounded-full overflow-hidden">
                        <Image src="/images/prueba.jpg" alt="Profile Picture" width={150} height={150} />
                    </div>
                </div>
                <div className="container flex max-h-full justify-center items-center">
                    <h1 className="text-10xl md:text-5xl font-bold">
                        Angel A. Afanador
                    </h1>
                </div>
                <div className="container flex max-h-full justify-center items-center">
                    <p className="text-3xl text-center">
                        Fullstack Developer (agrega descripcion)
                    </p>
                </div>
                <div className="container flex max-h-full justify-center items-center">
                    <a 
                    href="#contact"
                    className="px-8 py-6 bg-black rounded-lg text-white"
                    >
                        My projects
                    </a>
                </div>
            </div>
        </div>
      {/* <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-10xl md:text-6xl font-bold">
              Hola, soy <span className="text-primary">Luisangel A. Afanador</span>
            </h1>
            <p className="text-xl text-muted">
              (pequeño resumen)
            </p> 
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
              >
                Contáctame
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Ver proyectos
              </a>
            </div>
          </div>
          <div className="relative aspect-square">
          </div>
        </div>
      </div> */}
    </section>
  );
} 