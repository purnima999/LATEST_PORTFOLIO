import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer } from "react-toastify";
import validator from "validator";
import { Container, ContainerSucces } from "./styles";

export function Form() {
  const [state, handleSubmitState] = useState(null) as any;

  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  const form: any = useRef();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7e6ksfg', 'template_ycmch4m', form.current, {
        publicKey: 'qZyY1sRivTmYPOgjh',
      })
      .then(
        () => {
          handleSubmitState(true)
          console.log('Mail SENT SUCCESSFULY!');
        },
        (error) => {
          handleSubmitState(error.text)
          console.log('OOPs! Something went wrong...', error.text);
        },
      );
  };

  // useEffect(() => {
  //   if (state.succeeded) {
  //     toast.success("Email successfully sent!", {
  //       position: toast.POSITION.BOTTOM_LEFT,
  //       pauseOnFocusLoss: false,
  //       closeOnClick: true,
  //       hideProgressBar: false,
  //       toastId: "succeeded",
  //     });
  //   }
  // });
  if (state) {
    return (
      <ContainerSucces>
        <h3>Thank you!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          back to Top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }else{
    <ContainerSucces>
        <h3>{state ? state : "OOps! Something went wrong"}</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          back to Top
        </button>
        <ToastContainer />
      </ContainerSucces>
  }

  return (
    <Container>
      <h2>Contact me from the below</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="to_name"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {/* <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /> */}
        <ReCAPTCHA
          sitekey="6LcAu-IdAAAAAJOTI5E_eRltZNQCvukIl2-f1glQ"
          onChange={(e) => {
            setIsHuman(true);
          }}
        ></ReCAPTCHA>
        <button
          type="submit"
          value="Send"
          disabled={!validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
