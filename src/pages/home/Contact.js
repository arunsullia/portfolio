import React, { useEffect, useRef, useState } from "react";
import s from "./styles.module.css";
import { sendQuery } from "../../service/fetch";

function Contact({ contactRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailPattern =
    /^(?=[^@]{4,}@)([\w.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z.]*[a-zA-Z])$/;
  const namePattern = /[a-zA-Z]{3,}/;
  const namePatternCheckNumber = /[0-9]/;

  const nameErr = useRef();
  const emailErr = useRef();
  const msgErr = useRef();
  const btn = useRef();
  const successMsg = useRef();

  useEffect(() => {
    nameErr.current.innerHTML = "";
  }, [name]);

  useEffect(() => {
    emailErr.current.innerHTML = "";
  }, [email]);

  useEffect(() => {
    msgErr.current.innerHTML = "";
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErr = true;

    nameErr.current.innerHTML = "";
    emailErr.current.innerHTML = "";
    msgErr.current.innerHTML = "";

    if (name === "") {
      nameErr.current.innerHTML = "Please fill the name";
      validationErr = true;
    } else if (namePatternCheckNumber.test(name)) {
      nameErr.current.innerHTML = "Numbers not allowed";
      validationErr = true;
    } else if (!namePattern.test(name)) {
      nameErr.current.innerHTML = "Min 3 charaters required";
      validationErr = true;
    } else {
      validationErr = false;
    }
    if (email === "") {
      emailErr.current.innerHTML = "Please fill the email";
      validationErr = true;
    } else if (!emailPattern.test(email)) {
      emailErr.current.innerHTML = "Please enter a valid email";
      validationErr = true;
    } else {
      validationErr = false;
    }
    if (message === "") {
      msgErr.current.innerHTML = "Message cannot be blank";
      validationErr = true;
    } else {
      validationErr = false;
    }
    if (!validationErr) {
      btn.current.innerHTML = "Sending...";
      btn.current.classList.add(s.btnDisabled);
      btn.current.disabled = true;

      const data = { name, email, message };
      sendQuery(data).then(res=>{
        console.log(res);
        btn.current.innerHTML = "Send message";
        btn.current.classList.remove(s.btnDisabled);
        btn.current.disabled = false;
        successMsg.current.style.opacity = "1";
        setTimeout(() => {
          successMsg.current.style.opacity = "0";
        }, 5000);
      }).catch(err=>{
        console.log(err);
      });
     
    } else {
      console.log("invalid form data");
    }
  };

  return (
    <section id={s.contact} ref={contactRef}>
      <div className={s.wrapper}>
        <h1>Contact</h1>
        <div className={s.contactInfo}>
          <div className={s.address}>
            <h2>Address</h2>
            <p>
              sullia, DK
              <br />
              Karnataka
              <br />
              India -574239
            </p>
          </div>
          <div className={s.contactForm}>
            <form noValidate onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="name*"
                value={name}
              />
              <span className={s.err} ref={nameErr}></span>
              <input
                type="email*"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                value={email}
              />
              <span className={s.err} ref={emailErr}></span>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message*"
                value={message}
                rows="4"
              ></textarea>
              <span className={s.err} ref={msgErr}></span>
              <button ref={btn}>Send message</button>
              <span className={s.success} ref={successMsg}>
                Message sent!!
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
