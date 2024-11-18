
import "bootstrap/dist/css/bootstrap.min.css";

export function Franquicias() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-light bg-light shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">Franquicias</a>
                    <div>
                        <a className="btn btn-outline-primary me-2" href="#menu">Menú</a>
                        <a className="btn btn-outline-secondary" href="#contact">Contacto</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-dark text-white text-center py-4">
                <div className="container">
                    <h1 className="h3">¡Bienvenido a Franquicias!</h1>
                    <p>Un espacio para emprendedores como tú</p>
                </div>
            </header>

            {/* Menu Section */}
            <section id="menu" className="py-4">
                <div className="container">
                    <h2 className="h5 text-center mb-3">Nuestros Servicios</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Consultoría para tu negocio</li>
                        <li className="list-group-item">Capacitación y talleres</li>
                        <li className="list-group-item">Asesoramiento continuo</li>
                    </ul>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-light py-4">
                <div className="container">
                    <h2 className="h5 text-center mb-3">Contáctanos</h2>
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Tu correo"
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>

           
        </>
    );
}
