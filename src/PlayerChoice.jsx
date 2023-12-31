import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import SinglePlayerChoiceContext from "./SinglePlayerChoiceContext";

const PlayerChoice = () => {
  const [choice, setChoice] = useState("none");
  const [scissorsIsActive, setScissorsIsActive] = useState(false);
  const [paperIsActive, setPaperIsActive] = useState(false);
  const [rockIsActive, setRockIsActive] = useState(false);
  const [_, setSinglePlayerChoice] = useContext(SinglePlayerChoiceContext);

  return (
    <div className="playerChoice">
      <h1>Select your choice:</h1>
      <div className="icons">
        <FontAwesomeIcon
          icon="hand-back-fist"
          className={rockIsActive ? "icon-active" : ""}
          onClick={(e) => {
            setRockIsActive(true);
            setPaperIsActive(false);
            setScissorsIsActive(false);
            setChoice("rock");
          }}
        />
        <FontAwesomeIcon
          icon="hand"
          className={paperIsActive ? "icon-active" : ""}
          onClick={(e) => {
            setRockIsActive(false);
            setPaperIsActive(true);
            setScissorsIsActive(false);
            setChoice("paper");
          }}
        />
        <FontAwesomeIcon
          icon="hand-scissors"
          className={scissorsIsActive ? "icon-active" : ""}
          onClick={(e) => {
            setRockIsActive(false);
            setPaperIsActive(false);
            setScissorsIsActive(true);
            setChoice("scissors");
          }}
        />
      </div>
      <div
        className="confirmButton"
        onClick={() => {
          setSinglePlayerChoice(choice);
          document.querySelector("#modal").classList.add("showModal")
        }}
      >
        Confirm
      </div>
    </div>
  );
};

export default PlayerChoice;
