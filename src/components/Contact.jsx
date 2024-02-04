import React, { useState } from "react";
import img from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setInputs({name:"", email:"", message:""})
    toast.success("Message Sent");
  };

  const animations = {
    form: {
      initial: {
        x: "100%",
        opacity: 0,
      },
      whileInView: {
        x: "0%",
        opacity: 1,
      }
    },
    button: {
      initial: {
        y: "100%",
        opacity: 0,
      }
      ,
      whileInView: {
        y: "0%",
        opacity: 1,
      }
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form {...animations.form} onSubmit={submitHandler}>
          <h2>Contact</h2>
          <input
            type="text"
            value={inputs.name}
            name="name"
            onChange={changeHandler}
            placeholder="Full Name"
            required
          ></input>
          <input
            type="email"
            value={inputs.email}
            name="email"
            onChange={changeHandler}
            placeholder="Email Address"
            required
          ></input>
          <textarea
            value={inputs.message}
            name="message"
            onChange={changeHandler}
            placeholder="Your Message"
            required
          ></textarea>
          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disabledBtn" : ""}
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={img} alt="" width={500} height={500} />
      </aside>
    </div>
  );
};

export default Contact;
