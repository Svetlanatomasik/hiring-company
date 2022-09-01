import React from "react";
import "./candidateCard.scss";
import { Link } from "react-router-dom";
import Declan from "../../images/declan.jpg";
import Tiffany from "../../images/tiffany.jpg";
import Cade from "../../images/cade.webp";
import Raul from "../../images/raul.jpg";
import Aisha from "../../images/aisha.jpg";
import Rosalyn from "../../images/rosalyn.jpg";
import John from "../../images/john.jpg";

const Name = [Declan, Tiffany, Cade, Raul, Aisha, Rosalyn, John];

function CandidateCard(props, index) {
  if (!props.podaci) return null;
  return (
    <div
      id="candidate-card"
      className={props.selected ? "active" : ""}
      onClick={(e) => {
        props.setNext(true);
        props.setCandidateSelected(props.podaci);
      }}
    >
      <div className="flex">
        <img src={Name[index]} alt="user" />
      </div>

      <div className="wrap-info">
        <h2>{props.podaci.name}</h2>
        <h4>{props.podaci.education}</h4>
        <p>{props.podaci.email}</p>
      </div>
      <Link to={`/single-candidate-page/${props.podaci.id}`}>More info</Link>
    </div>
  );
}

export default CandidateCard;
