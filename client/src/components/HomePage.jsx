import homeImage from "../assets/home-image.svg";

function HomePage() {
  return (
    <section className="home" id="home">
      <div className="container home_content">
        <h1>
          <span className="gradient_text">Deploying</span> And{" "}
          <span className="gradient_text">Developing</span> Your Dream Website.
        </h1>
        <p>
          Creating and designing your website to represent you in the internet.
          <br /> A webpage is your representation online.
        </p>
        <div className="img-container">
        <img src={homeImage} alt="desktop web image" />
        </div>
      </div>
    </section>
  );
}


export default HomePage;
