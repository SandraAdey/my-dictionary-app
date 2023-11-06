import React from "react";
import "../styles/Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms && props.antonyms.length > 0) {
    const antonymsText = props.antonyms.join(", ");
    return (
      <div className="antonyms-container">
        <span className="antonyms-label">Antonyms:</span>
        <span className="antonyms-text">{antonymsText}</span>
      </div>
    );
  } else {
    return null;
  }
}
