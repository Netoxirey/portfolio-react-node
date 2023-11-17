// Importar la imagen principal de la página de inicio
import homeImage from "../assets/home-image.svg";

// Componente para la página de inicio
function HomePage() {
  return (
    // Sección principal de la página de inicio
    <section className="home">
      {/* Contenedor para el contenido de la página de inicio */}
      <div className="container home_content">
        {/* Título principal de la página */}
        <h1>
          <span className="gradient_text">Deploying</span> And{" "}
          <span className="gradient_text">Developing</span> Your Dream Website.
        </h1>
        {/* Descripción de la página */}
        <p>
          Creating and designing your website to represent you in the internet.
          <br /> A webpage is your representation online.
        </p>
        {/* Imagen principal de la página */}
        <img src={homeImage} alt="desktop web image" />
      </div>
    </section>
  );
}

// Exportar el componente de la página de inicio
export default HomePage;
