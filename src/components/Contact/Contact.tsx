import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>
          If you saw my potential or want to talk with me, it doesn't exist in
          me send a message
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:purnimapathak999@gmail.com">
            purnimapathak999@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+919548510085">(+91) 7351138646</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
