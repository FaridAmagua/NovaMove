// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-card">
          <h2>Contacta con nosotros</h2>

          {/* Formulario Netlify */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/gracias"
            className="contact-form"
          >
            {/* Campos requeridos por Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>
                No rellenar: <input name="bot-field" />
              </label>
            </p>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" required />
              </div>
              <div className="input-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input id="apellidos" name="apellidos" type="text" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="telefono">Número de teléfono</label>
                <input id="telefono" name="telefono" type="tel" />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="6" required />
            </div>

            <label className="checkbox-group">
              <input type="checkbox" name="privacidad" required />
              {' '}He leído y acepto la Política de privacidad
            </label>

            <button type="submit" className="btn btn-secondary full-width-mobile">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
