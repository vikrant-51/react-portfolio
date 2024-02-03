import React, { useState } from "react";
import img from "../assets/vg.png";
import toast from "react-hot-toast";
const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

  const [inputs, setInputs] = useState({name:"", email:"", message:""});
    const changeHandler = (e)=>{
        setInputs({...inputs, [e.target.name]:e.target.value})
    }
  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Message Sent");
  };


  return (
    <div id="contact">
      <section>
        <form onSubmit={submitHandler}>
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
          <button type="submit">Send</button>
        </form>
      </section>
      <aside>
        <img src={img} alt="" width={500} height={500} />
      </aside>
    </div>
  );
};

export default Contact;
