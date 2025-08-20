// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* HERO SPLIT 1: texto izq / imagen dcha */}
      <section className="hero-split">
        <div className="pane text left">
          <div className="text-inner">
            <h1>Soluciones inmobiliarias hechas a tu medida</h1>
            <p>para sus propiedades inmobiliarias</p>
            <a href="#que-hacemos" className="btn outline">Más información</a>
          </div>
        </div>
        <div
          className="pane image right"
          style={{ backgroundImage: "url('/slides/slide1.jpg')" }}
          aria-label="Soluciones inmobiliarias"
        />
      </section>

      {/* HERO SPLIT 2: imagen izq / texto dcha */}
      <section className="hero-split">
        <div
          className="pane image left"
          style={{ backgroundImage: "url('/slides/slide2.jpg')" }}
          aria-label="Trato directo"
        />
        <div className="pane text right">
          <div className="text-inner">
            <h1>Búsqueda de soluciones específicas</h1>
            <p>para sus propiedades inmobiliarias</p>
            <a href="#servicios" className="btn outline">Más información</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
