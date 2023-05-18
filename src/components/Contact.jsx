export const Contact = () => {
  return (
    <div className="footer" id="contacto">
      <h4 data-ix="slowfade-scroll-bigs">Contacto</h4>
      <div className="container">
        <form action="enviar.php" method="post">
          <ul className="flex-outer">
            <li>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Ingresa Nombre"
                className="rect"
                required
              />
            </li>
            <li>
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                name="correo"
                placeholder="Ingresa Correo"
                className="rect"
                required
              />
            </li>
            <li>
              <label htmlFor="fono">Teléfono</label>
              <input
                type="text"
                name="telefono"
                placeholder="Ingresa Teléfono"
                className="rect"
                required
              />
            </li>
            <li>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                rows="6"
                name="mensaje"
                className="rect"
                required
              ></textarea>
            </li>
            <li className="center">
              <button type="submit">Enviar</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
