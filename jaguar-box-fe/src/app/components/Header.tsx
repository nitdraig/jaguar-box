import React from "react";

const Header = () => {
  return (
    <header className="relative bg-black h-screen text-white flex items-center justify-center">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        autoPlay
        muted
        loop
      >
        <source src="/back.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Contenedor de contenido */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl text-[#5512ba] font-bold">
          JaguarBox
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Una solución completa para el control de tus finanzas y la toma de
          decisiones inteligentes en inversiones. Disfruta de nuestra aplicación
          web responsive y las aplicaciones móviles para Android e iOS.
        </p>

        <div className="mt-6 space-x-4">
          <a
            href="/register"
            className="px-6 py-3 bg-[#828df3] hover:bg-[#c4a2f6] text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Iniciar
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Leer más
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
