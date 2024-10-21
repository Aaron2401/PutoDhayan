import "./../css/About.css"

function About() {
    return (
        <>
            <div className="container">
                <h1>Acerca de Nosotros</h1>
                <h2>Imagina las posibilidades de vestir bonito y barato</h2>

                <div style={{ margin: "50px 0" }}></div>

                <h5>
                    Bienvenido a nuestra tienda, donde la moda se encuentra con la asequibilidad. Nos dedicamos a ofrecerte la mejor calidad en ropa para que puedas lucir increíble sin gastar una fortuna.
                </h5>
                
                <h3>Nuestros Valores</h3>
                <ul>
                    <li>Calidad</li>
                    <li>Satisfacción del Cliente</li>
                    <li>Integridad</li>
                    <li>Innovación</li>
                </ul>

                <h3>Información de Contacto</h3>
                <div className="contact-info">
                    <p><strong>Teléfono:</strong> +52 998 350 1250</p>
                    <p><strong>Email:</strong> aaronbalamchi@gmail.com</p>
                    <p><strong>Dirección:</strong> Aún no contamos con tienda física para atención al cliente</p>
                </div>

                <div className="footer">
                    <h4>Conéctate con nosotros</h4>
                    <p>Síguenos en nuestras redes sociales para estar al tanto de nuestras últimas ofertas y novedades.</p>
                    <p>@aaronbalam</p>
                </div>
            </div>
        </>
    );
}

export default About;
