import React from "react";
import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import "./styleMessenger/messenger.css";

const MessengerText = () => {
  const form = useRef();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const textAreaRef = useRef(null);
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_7w9gtrl",
  //       "template_crw53dm",
  //       form.current,
  //       "yEvAMzAQaYCKW5aiS"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   nameRef.current.value = "";
  //   emailRef.current.value = "";
  //   textAreaRef.current.value = "";
  // };

  return (
    <motion.div
      className="windownChat"
      animate={{ x: -50, scale: 1 }}
      initial={{ x: 300, scale: 0 }}
      transition={{ duration: 1 }}
    >
      <form ref={form}>
        {/* onSubmit={sendEmail}> */}
        <div className="wrapper--input">
          <label htmlFor="nameUser"> imię :</label>
          <input
            id="nameUser"
            placeholder="imię dla kontaktu"
            name="user_name"
            type="text"
            ref={nameRef}
          />
        </div>
        <div className="wrapper--input">
          <label htmlFor="email">email :</label>
          <input
            id="email"
            name="user_email"
            type="email"
            placeholder="email address"
            ref={emailRef}
          />
        </div>
        <label htmlFor="text">Wpisz wiadomość</label>
        <textarea
          id="text"
          name="message"
          placeholder="please write your messange"
          ref={textAreaRef}
        ></textarea>
        <div className="panel-buttons">
          <button className="send" type="submit">
            Wyślij
          </button>
          <button className="cancel">
            <i className="far fa-widown-close">Anuluj</i>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default MessengerText;
