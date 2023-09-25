import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Notification from "./Notification"; 

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState({ text: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setMessage({ text: "Email sent successfully!", type: "success" });
          // Clear form input fields on success
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage({ text: "Error sending email. Please try again later.", type: "error" });
        }
      );
  };

  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <input
              required
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="user_name"
              placeholder="Your name"
            />
            <input
              required
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              id="email"
              name="from_email"
            />
            <textarea
              required
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              id="message"
              name="message"
            />
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
            {message.text && (
              <Notification message={message.text} type={message.type} onClose={() => setMessage({ text: "", type: "" })} />
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
