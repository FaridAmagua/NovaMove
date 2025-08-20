import {
  Search,
  Home,
  Paintbrush,
  KeyRound,

} from "lucide-react";

const features = [
  {
    title: "Búsqueda de inmuebles a medida",
    desc: "Nos ocupamos de la difusión de las propiedades y de la selección rigurosa del inquilino adecuado, garantizando tranquilidad y confianza a los propietarios.",
    icon: Search,
  },
  {
    title: "Venta de inmuebles",
    desc: "Asesoramos y gestionamos todo el proceso de venta, desde la valoración y promoción de la propiedad hasta el cierre de la operación, garantizando seguridad y el mejor resultado para el propietario.",
    icon: Home,
  }
,
  {
    title: "Servicios de Relocation",
    desc: "Te acompañamos en todo el proceso de búsqueda y adaptación para que encuentres el hogar ideal de forma rápida y segura.",
    icon: Paintbrush,
  },
  {
    title: "Arrendamiento de inmuebles",
    desc: "Gestionamos todo el proceso de alquiler desde la selección del inquilino y la elaboración de contratos hasta el seguimiento continuo, garantizando rentabilidad y tranquilidad para los propietarios.",
    icon: KeyRound,
  },
];

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" className="what-section">
      {/* Panel izquierdo oscuro */}
      <div className="what-left">
        <h2>¿QUÉ HACEMOS?</h2>
        <p>
          En NOVA MOVE nos especializamos en ofrecer un servicio integral dentro
          del sector inmobiliario, abarcando todas las áreas que lo componen.
          Gestionamos desde la compra y venta de propiedades, hasta el
          arrendamiento y la búsqueda de inmuebles que se adapten a las
          necesidades de cada cliente. Además, contamos con un servicio de
          relocation para facilitar la llegada y adaptación de particulares y
          empresas, con un proceso ágil, transparente y eficiente. Nuestro
          objetivo es acompañarle en cada paso con soluciones personalizadas y
          de confianza.
        </p>
      </div>

      {/* Lado derecho blanco con rejilla */}
      <div className="what-right">
        <div className="features">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="feature">
              <div className="icon">
                <Icon size={20} strokeWidth={2} />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
