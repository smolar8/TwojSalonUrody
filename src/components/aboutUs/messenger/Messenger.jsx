import React from "react";
import "./styleMessenger/messenger.css";
// import Call from "../../../img&icon/Phone-icon.png";
// import Messenger from "../../../img&icon/messenger.jpg";

const MessengerText = () => {
  return (
    <div className="windownChat">
      {/* <h3> Napisz wiadomość </h3> */}
      <label for="text">Wpisz wiadomość</label>
      <textarea id="text"></textarea>
      <div className="panel-buttons">
        <button className="send"> Wyślij</button>
        <button className="cancel">
          <i className="far fa-widown-close"></i> Anuluj
        </button>
      </div>
    </div>
  );
};

export default MessengerText;
