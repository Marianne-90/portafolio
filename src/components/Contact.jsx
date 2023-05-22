import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contact = () => {
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

  return (
    <div className="footer" id="contacto">
      <h4 data-ix="slowfade-scroll-bigs">Contact</h4>
      <div className="container">
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
    </div>
  );
};
