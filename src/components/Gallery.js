// src/components/Gallery.js
import React from 'react';

// importa tus imágenes (pon las que quieras)
import g1 from '../assets/gallery/g1.jpg';
import g2 from '../assets/gallery/g2.jpg';
import g3 from '../assets/gallery/g3.jpg';
import g4 from '../assets/gallery/g4.jpg';

const Gallery = () => {
  const images = [
    { src: g1, alt: 'Proyecto 1' },
    { src: g2, alt: 'Proyecto 2' },
    { src: g3, alt: 'Proyecto 3' },
    { src: g4, alt: 'Proyecto 4' },
  ];

  return (
    <section className="gallery-strip" aria-label="Galería de proyectos">
      <div className="gallery-strip-row">
        {images.map((img, i) => (
          <figure className="strip-item" key={i}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
