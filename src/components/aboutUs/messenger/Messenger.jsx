import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./styleMessenger/messenger.css";
// import Call from "../../../img&icon/Phone-icon.png";
// import Messenger from "../../../img&icon/messenger.jpg";

const MessengerText = () => {
  const [messengerText, setMessengerText] = useState([]);
  const [addMessengerText, setAddMessengerText] = useState({
    nameUser: "",
    email: "",
    text: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7w9gtrl",
        "template_crw53dm",
        form.current,
        "yEvAMzAQaYCKW5aiS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.name;

    const fieldValue = e.target.value;
    const newFormData = { ...addMessengerText };
    newFormData[fieldName] = fieldValue;
    setAddMessengerText(newFormData);
  };

  return (
    <div className="windownChat">
      {/* <h3> Napisz wiadomość </h3> */}
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="nameUser">imia</label>
          <input id="nameUser" name="user_name" type="text" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="user_email"
            type="email"
            placeholder="email address"
          />
        </div>
        <label htmlFor="text">Wpisz wiadomość</label>
        <textarea
          id="text"
          name="message"
          // onChange={handleChange}
          placeholder="please write your messange"
        ></textarea>
        <button className="send" type="submit">
          Wyślij
        </button>
      </form>
      <div className="panel-buttons">
        <button className="cancel">
          <i className="far fa-widown-close">Anuluj</i>
        </button>
      </div>
    </div>
  );
};

export default MessengerText;
