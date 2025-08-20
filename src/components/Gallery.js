import React from 'react';
import cuadrado1 from '../assets/cuadrado1.jpg'; // una ruta ../ suele bastar
import cuadrado2 from '../assets/cuadrado2.jpg'; // una ruta ../ suele bastar
import cuadrado3 from '../assets/cuadrado3.jpg'; // una ruta ../ suele bastar

const Gallery = () => {
  const images = [
    {
      src: cuadrado1, // ✅ sin llaves
      alt: 'Imagen 1',
    },
    {
      src: cuadrado2,
      alt: 'Imagen 2',
    },
    {
      src: cuadrado3,
      alt: 'Imagen 3',
    },
  ];

  return (
    <section className="gallery">
      <div className="gallery-row">
        {images.map((img, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
