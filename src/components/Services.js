import React from 'react';

/**
 * Services component
 * Represents the “Servicios” section with individual service cards. Each
 * card contains an icon, a heading and descriptive text. Feel free to
 * extend this list to include more services as your project grows.
 */
const Services = () => {
  const services = [
    {
      icon: 'fa-handshake',
      title: 'Arrendamiento de inmuebles',
      description:
        'Ofrecemos asesoramiento integral durante todo el proceso de arrendamiento para que pueda alquilar su propiedad con total tranquilidad.',
    },
    {
      icon: 'fa-people-arrows',
      title: 'Trato con arrendatario',
      description:
        'Nos ocupamos de todas las gestiones con sus arrendatarios, garantizando siempre un trato profesional y eficaz.',
    },
    {
      icon: 'fa-home',
      title: 'Venta y compra',
      description:
        'Nuestro equipo le acompaña en la compra o venta de su inmueble, ofreciéndole un asesoramiento personalizado.',
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Servicios</h2>
        <div className="service-grid">
          {services.map((srv, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">
                <i className={`fas ${srv.icon}`}></i>
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;