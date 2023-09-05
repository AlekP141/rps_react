import { useContext, useEffect, useState } from "react";
import SinglePlayerChoiceContext from "./SinglePlayerChoiceContext";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComputerChoice = () => {
  const userChoice = useContext(SinglePlayerChoiceContext);
  const computerOptions = ["rock", "paper", "scissors"];

  const [computerChoice, setComputerChoice] = useState("none");
  const [outcome, setOutcome] = useState("hello");
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    // console.log("userChoice:", userChoice[0]); //DEBUG
    const randomComputerChoice =
      computerOptions[Math.floor(Math.random() * computerOptions.length)];

    // console.log("randomComputerChoice:", randomComputerChoice); //DEBUG
    setComputerChoice(randomComputerChoice);

    // Determine the outcome based on userChoice and computerChoice
    if (userChoice[0] === randomComputerChoice) {
      setOutcome("tie");
    } else if (
      (userChoice[0] === "rock" && computerChoice === "scissors") ||
      (userChoice[0] === "paper" && computerChoice === "rock") ||
      (userChoice[0] === "scissors" && computerChoice === "paper")
    ) {
      setOutcome("win");
    } else {
      setOutcome("lose");
    }
  }, [userChoice, computerChoice]);


  useEffect(() => {
    if (outcome === "win") {
      setMessageText("Congratulations, you won!");
    } else if (outcome === "tie") {
      setMessageText("It is a tie!");
    } else if (outcome === "lose") {
      setMessageText("Unlucky, you lost!");
    }
  }, [outcome])
  return (
    <Modal>
      <div class="userChoiceResult">
      <FontAwesomeIcon
          icon="user"/>
        <h4>{userChoice[0]}</h4>
      </div>
      <div class="computerChoiceResult">
      <FontAwesomeIcon
          icon="computer"/>
        <h4>{computerChoice}</h4>
      </div>
      <h2>{messageText}</h2>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Play Again
      </button>
      <button
        onClick={() => {
          window.close();
        }}
      >
        Exit
      </button>
    </Modal>
  );
};

export default ComputerChoice;
