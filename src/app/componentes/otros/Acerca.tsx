export const Acerca = () => {
  
  return (
    <section id="acerca-de" className="py-5 bg-light">
      <div className="container">
        
        <h2 className="text-center mb-4">Acerca de Nosotros</h2>

        
        <div className="row align-items-center">
         
          <div className="col-md-6">
            <p className="lead">
              Somos una empresa dedicada a ofrecer soluciones innovadoras que transforman ideas en resultados
              tangibles. Con más de 10 años de experiencia en el mercado, trabajamos para mejorar la vida de nuestros
              clientes a través de productos y servicios de alta calidad.
            </p>
            <p>
              Nuestro compromiso es brindar un servicio excepcional, desde el primer contacto hasta el último detalle.
              Con un equipo altamente capacitado y apasionado, estamos aquí para ayudarte a alcanzar tus metas con
              éxito. ¡Te invitamos a conocernos más y ser parte de esta aventura!
            </p>
          </div>

          
          <div className="col-md-6">
            <img
              src="paisa.jpg"
              alt="Imagen Acerca de"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

