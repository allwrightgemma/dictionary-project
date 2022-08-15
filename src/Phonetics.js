import React from "react";
import "./Phonetics.css";
// import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetics);
  const audioElement = new Audio(props.phonetics.audio);

  function playSound() {
    audioElement.play();
  }
  return (
    <div className="Phonetics">
      <i className="fas fa-volume-up" onClick={playSound}></i>

      <span className="text"> {props.phonetics.text} </span>
    </div>
  );
}
