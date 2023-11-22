import responsiveDemo from "../assets/responsive_demo.png"

function Design() {
  return (
    <section className="container design">
        <img src={responsiveDemo} alt="image of a responsive webpage" />
        <div className="design_text">
            <h2 className="gradient_text">Designing responsive websites.</h2>
            <p>Web pages that look good on any device.</p>
        </div>
    </section>
  )
}

export default Design