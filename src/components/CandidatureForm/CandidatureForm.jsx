import { useRef, useState } from "react";
import swal from "sweetalert";
import styles from "./CandidatureForm.module.css";
import emailjs from "@emailjs/browser";

const CandidatureForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    cv: "",
    message: "",
  });

  const form = useRef();

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.email === "" ||
      input.phone === "" ||
      input.message === "" ||
      input.name === "" ||
      input.position === "" ||
      input.cv === ""
    ) {
      swal("Ops", "Please fill required fields", "error");
      return;
    }

    emailjs
      .sendForm("service_oxyzojr", "template_8b8wp4x", form.current, {
        publicKey: "7V6l0pYPlDxHOjooA",
      })
      .then(
        () => {
          input.email = "";
          input.password = "";
          input.phone = "";
          input.company = "";
          input.message = "";

          form.current.reset();
          swal("Success", "Message sent successfully", "success");
        },
        (error) => {
          swal("Ops", "Something went wrong", "error");
        }
      );
  };

  return (
    <div className={styles.section}>
      <div className={styles.text_container}>
        <h1 className={styles.title}>Candidata-te</h1>
      </div>
      <div className={styles.container}>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} ref={form} className={styles.form}>
          {/* Form Group */}
          <div className={styles.group}>
            {/* Form Single Input */}
            <div className={styles.input_container}>
              <label htmlFor="contact-name" className={styles.label}>
                Enter your name <b className={styles.must}>*</b>
              </label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleInput}
                id="contact-name"
                placeholder="Adam Smith"
                className={styles.input}
                required=""
              />
            </div>
            {/* Form Single Input */}
            {/* Form Single Input */}
            <div className={styles.input_container}>
              <label htmlFor="contact-email" className={styles.label}>
                Email address <b className={styles.must}>*</b>
              </label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleInput}
                id="contact-email"
                placeholder="example@gmail.com"
                className={styles.input}
                required=""
              />
            </div>
            {/* Form Single Input */}
          </div>
          {/* Form Group */}
          {/* Form Group */}
          <div className={styles.group}>
            {/* Form Single Input */}
            <div className={styles.input_container}>
              <label htmlFor="contact-phone" className={styles.label}>
                Phone number <b className={styles.must}>*</b>
              </label>
              <input
                type="tel"
                name="phone"
                value={input.phone}
                onChange={handleInput}
                id="contact-phone"
                placeholder="+351 123 456 789"
                className={styles.input}
                required=""
              />
            </div>
            {/* Form Single Input */}
            {/* Form Single Input */}
            <div className={styles.input_container}>
              <label htmlFor="contact-phone" className={styles.label}>
                Position <b className={styles.must}>*</b>
              </label>
              <input
                type="text"
                name="position"
                value={input.phone}
                onChange={handleInput}
                id="contact-phone"
                placeholder="Project Manager"
                className={styles.input}
                required=""
              />
            </div>
            {/* Form Single Input */}
          </div>
          {/* Form Group */}
          {/* Form Group */}
          <div className={styles.group}>
            {/* Form Single Input */}
            <div className={styles.input_container}>
              <label htmlFor="contact-message" className={styles.label}>
                Message <b className={styles.must}>*</b>
              </label>
              <textarea
                name="message"
                value={input.message}
                onChange={handleInput}
                id="contact-message"
                placeholder="Write your message here..."
                required=""
              />
            </div>
            {/* Form Single Input */}
          </div>
          {/* Form Single Input */}
          <div className={styles.input_container}>
            <label htmlFor="contact-name" className={styles.label}>
              Attach your CV <b className={styles.must}>*</b>
            </label>
            <input
              type="file"
              name="cv"
              value={input.cv}
              onChange={handleInput}
              id="contact-cv"
              className={styles.input}
              required=""
            />
          </div>
          {/* Form Single Input */}
          <div className={styles.button_container}>
            <button type="submit" className={styles.button}>
              Send your message
            </button>
          </div>
          {/* Form Group */}
        </form>
        {/* Contact Form */}
      </div>
    </div>
  );
};

export default CandidatureForm;
