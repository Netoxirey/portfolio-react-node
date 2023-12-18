import Card from "@components/Card";
import frontIcon from "../assets/front-end_icon.svg";
import backIcon from "../assets/back-end_icon.svg";

function Services() {
  return (
    <section className="services" id="skills">
      <div className="container grid-responsive">
        {/* Componente Card para Front-End Development */}
        <Card>
          <h3>Front-End Development</h3>
          <img src={frontIcon} alt="Front-End Icon" className="icon" />
          <p>
            Craft engaging and responsive user interfaces. I specialize in:
          </p>
          <ul className="services_ul">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>C#</li>
            <li>Responsive Design</li>
            <li>Front-End Framework (React, Vue)</li>
            <li>Cross-Browser Compatibility</li>
            <li>Web Performance Optimization</li>
            <li>Version Control/Git</li>
          </ul>
          <p className="bottom_element">
            Let&apos;s create visually stunning and user-friendly web applications together!
          </p>
        </Card>

        {/* Componente Card para Back-End Development */}
        <Card>
          <h3>Back-End Development</h3>
          <img src={backIcon} alt="Back-End Icon" className="icon" />
          <p>
            Build robust server-side applications and manage databases. My skills include:
          </p>
          <ul className="services_ul">
            <li>Server-Side Programming (Node.js, .Net)</li>
            <li>API Development</li>
            <li>Database Management (SQL, NoSQL)</li>
            <li>Server Management</li>
            <li>Authentication and Authorization</li>
            <li>RESTful Services</li>
            <li>Testing and Debugging</li>
            <li>Version Control/Git</li>
          </ul>
          <p className="bottom_element">
            Let&apos;s build scalable and efficient back-end solutions to power innovative web applications!
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Services;
