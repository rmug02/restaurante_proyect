

export const Inicio = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Unicosta Fastfood</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

          </div>
        </div>
      </nav>


      <header className="hero text-white text-center py-5" style={{ backgroundColor: "#d16960", backgroundSize: 'cover' }}>

        <div className="container">
          <h1 className="display-4">Bienvenidos a Nuestro restaurante</h1>
          <p className="lead">"Sabores que te hacen volver."</p>
          <a href="#servicios" className="btn btn-light btn-lg">Descubre Más</a>
        </div>
      </header>


      <section id="servicios" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nuestros mejores platos</h2>
          <div className="row">

            <div className="col-md-4">
              <div className="card shadow-sm">
              <img src="aj.webp" className="card-img-top" alt="Servicio 1" />
                <div className="card-body">
                  <h5 className="card-title">Ajiaco</h5>
                  <p className="card-text"> Una sopa espesa y deliciosa originaria de Bogotá, hecha con pollo, papas (variedades de papa criolla, pastusa y sabanera), mazorca de maíz, guasca (una hierba colombiana) y acompañada con arroz blanco, crema de leche y alcaparras. Es un plato típico de la región andina.</p>
                  <a href="#" className="btn btn-dark">Más Información</a>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="pai.webp" className="card-img-top" alt="Servicio 2" />
                <div className="card-body">
                  <h5 className="card-title">Bandeja Paisa</h5>
                  <p className="card-text"> Uno de los platos más representativos de la región del Eje Cafetero y Antioquia. </p>
                  <a href="#" className="btn btn-dark">Más Información</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="san.png" className="card-img-top" alt="Servicio 3" />
                <div className="card-body">
                  <h5 className="card-title">Sancocho</h5>
                  <p className="card-text">Una sopa tradicional con carne, papas, yuca, plátano verde y otros ingredientes, perfecta para una comida reconfortante.</p>
                  <a href="#" className="btn btn-dark">Más Información</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};
