import React from "react";
import "../css/WhatsAppBot.css";
import { FaSquareWhatsapp } from "react-icons/fa6";

function WhatsAppBot() {
  return (
    <a className="whatsAppBot-Body" href="https://wa.me/message/RYPR7FF4OFLDO1">
      <FaSquareWhatsapp size={50}/>
    </a>
  );
}

export default WhatsAppBot;
