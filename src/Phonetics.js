import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <ReactAudioPlayer
        src={props.phonetics.audio}
        autoPlay={false}
        controls={true}
      />

      {/* <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a> */}
      <span className="text"> {props.phonetics.text} </span>
    </div>
  );
}
