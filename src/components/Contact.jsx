import { useEffect, useState, useContext } from "react";
import { MainContext } from "../context/MainContext";

import ScrollTrigger from "react-scroll-trigger";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

export const Contact = () => {

  const [isVisible, setIsVisible] = useState(false);
  const { data } = useContext(MainContext);
  const { contact } = data;

  const {phone, mail, linkedIn} = contact;

  const handleAnimation = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    emailjs.init("76U7XUpGlXyVp9a4A");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceID = "service_t7tatwv";
    const templateID = "template_jedbyl6";
    const userID = "76U7XUpGlXyVp9a4A";

    emailjs
      .sendForm(serviceID, templateID, event.target, userID)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Mail Sent",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error, mail not sended",
          showConfirmButton: true,
        });

        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error, Failed to Send Mail",
          showConfirmButton: true,
        });

        console.error("Error al enviar el correo", error);
      });

    event.target.reset();
  };


    const formattedPhoneNumber = phone.replace(
      /^(\+\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/,
      '$1 $2-$3-$4-$5-$6'
    );

  return (
      <ScrollTrigger onEnter={handleAnimation}>
    <div className="footer" id="contact">
      <h4 data-ix="slowfade-scroll-bigs" className={isVisible ? " slide-top-text" : ""}>Contact</h4>
      <div className={isVisible ? "container  slide-top-text" : "container"}>
        <form action="enviar.php" method="post" onSubmit={handleSubmit}>
          <ul className="flex-outer">
            <li>
              <label htmlFor="from_name">Name</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Your name"
                className="rect"
                required
              />
            </li>
            <li>
              <label htmlFor="from_mail">Mail</label>
              <input
                type="email"
                name="from_mail"
                id="from_mail"
                placeholder="Your mail"
                className="rect"
                required
              />
            </li>
            <li>
              <label htmlFor="from_phone">Phone</label>
              <input
                type="text"
                name="from_phone"
                id="from_phone"
                placeholder="Your phone"
                className="rect"
                required
              />
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea
                rows="6"
                name="message"
                id="message"
                className="rect"
                required
              ></textarea>
            </li>
            <li className="center">
              <button type="submit">Send</button>
            </li>
          </ul>
        </form>
      </div>
      <div className="contactInfo">
        <a href={`tel:${phone}`}><AiFillPhone/>{formattedPhoneNumber}</a>
        <a href={`mailto:${mail}`}><AiFillMail/>{mail}</a>
        <a href={linkedIn.src} target="blank"><AiFillLinkedin/>{linkedIn.name}</a>
      </div>
    </div>
      </ScrollTrigger>
  );
};
