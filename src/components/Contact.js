// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-card">
          <h2>Contacta con nosotros</h2>
          <p className="contact-subtitle">
            Resolvemos dudas y preparamos una propuesta a medida.
          </p>

          {/* Formulario Netlify */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-hcaptcha="true" /* ← hCaptcha de Netlify */
            action="/gracias"
            className="contact-form enhanced"
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
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  id="apellidos"
                  name="apellidos"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Tus apellidos"
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="telefono">Número de teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="6"
                placeholder="Cuéntanos brevemente qué necesitas…"
                required
              />
            </div>

            {/* hCaptcha (Netlify lo renderiza aquí) */}
            <div className="captcha-box" data-netlify-hcaptcha="true" />

            <label className="checkbox-group">
              <input type="checkbox" name="privacidad" required />
              <span>He leído y acepto la Política de privacidad</span>
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-secondary full-width-mobile">
                Enviar mensaje
              </button>
            </div>
          </form>

          {/* <p className="contact-footnote">
            Respuesta habitual en menos de 24 h laborables.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
