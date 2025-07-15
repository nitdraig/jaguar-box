import React from "react";

const About = () => {
  return (
    <section className="bg-[#fafdff] py-12 h-screen" id="about">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Acerca de Nosotros</h2>
        <p className="text-[#000305]">
          Somos una empresa comprometida con nuestros clientes. Nuestra misión
          es proporcionar soluciones innovadoras que satisfagan sus necesidades.
          Desde nuestros inicios, hemos estado trabajando arduamente para
          ofrecer productos y servicios de alta calidad.
        </p>
        <p className="text-[#000305] mt-4">
          En {new Date().getFullYear()}, celebramos{" "}
          {Math.floor(Math.random() * 30) + 1} años de excelencia en la
          industria. Estamos orgullosos de nuestro equipo talentoso y apasionado
          que trabaja incansablemente para cumplir nuestra visión.
        </p>
        <p className="text-[#000305] mt-4">
          Nuestro compromiso con la calidad y la innovación nos ha convertido en
          líderes del mercado. Esperamos seguir creciendo y sirviendo a nuestros
          clientes de manera excepcional en los próximos años.
        </p>
      </div>
    </section>
  );
};

export default About;
