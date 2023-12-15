import contactImage from "../assets/contact.svg"
import Card from "@components/Card"

function Contact() {
  return (
    <section id="contact" className=" contact container grid-responsive">
        <img src={contactImage} alt="contact image" />
        <Card customStyles={{justifyContent: "center"}}>
            <h3 className="gradient_text">Feel free to contact me!!</h3>
            <p>Email: ernestoserna94@gmail.com</p>
            <p>Phone: +52-834-254-7065</p>
        </Card>
    </section>
  )
}

export default Contact