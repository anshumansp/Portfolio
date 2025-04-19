import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas, ContactInfo3DCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const ContactInfoItem = ({ icon: Icon, label, value, link, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-2 group"
  >
    <div
      className="rounded-full w-10 h-10 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <Icon className="text-white text-xl" />
    </div>
    <div>
      <p className="text-secondary text-sm">{label}</p>
      <p className="text-white font-medium group-hover:text-[#915eff] transition-colors duration-300">
        {value}
      </p>
    </div>
  </a>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: import.meta.env.VITE_EMAIL_RECIEVERNAME,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Thanks. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error) => {
        setLoading(false);

        console.log(error);

        alert("Something went wrong");
      };
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Contact Info Section */}
      <div className="xl:flex-row flex-col flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Connect With Me</p>
          <h3 className={styles.sectionHeadText}>My Details.</h3>

          <div className="mt-8 flex flex-col gap-6">
            <ContactInfoItem
              icon={FaGithub}
              label="GitHub"
              value="@anshumansp"
              link="https://github.com/anshumansp/"
              color="#333333"
            />
            <ContactInfoItem
              icon={FaLinkedin}
              label="LinkedIn"
              value="Anshuman Parmar"
              link="https://www.linkedin.com/in/anshuman-parmar-757666219/"
              color="#0077b5"
            />
            <ContactInfoItem
              icon={FaYoutube}
              label="YouTube"
              value="@thepixelizesolution"
              link="https://www.youtube.com/@thepixelizesolution"
              color="#FF0000"
            />
            <ContactInfoItem
              icon={FaEnvelope}
              label="Email"
              value="anshumansp16@gmail.com"
              link="mailto:anshumansp16@gmail.com"
              color="#4285F4"
            />
            <ContactInfoItem
              icon={FaGlobe}
              label="Agency"
              value="pixelizesolution.com"
              link="https://pixelizesolution.com"
              color="#915eff"
            />
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <ContactInfo3DCanvas />
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmmit}
            className="mt-6 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your Name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
