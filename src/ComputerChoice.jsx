import { useContext, useEffect, useState } from "react";
import SinglePlayerChoiceContext from "./SinglePlayerChoiceContext";

const ComputerChoice = () => {
  const userChoice = useContext(SinglePlayerChoiceContext);
  const computerOptions = ["rock", "paper", "scissors"];

  const [computerChoice, setComputerChoice] = useState("none");
  const [outcome, setOutcome] = useState("hello");

  useEffect(() => {
    setComputerChoice(
      computerOptions[Math.floor(Math.random() * computerOptions.length)],
    );

    // Determine the outcome based on userChoice and computerChoice
    switch (userChoice) {
      case "rock":
        if (computerChoice === "rock") setOutcome("tie");
        else if (computerChoice === "paper") setOutcome("lose");
        else if (computerChoice === "scissors") setOutcome("win");
        break;
      case "paper":
        if (computerChoice === "rock") setOutcome("win");
        else if (computerChoice === "paper") setOutcome("tie");
        else if (computerChoice === "scissors") setOutcome("lose");
        break;
      case "scissors":
        if (computerChoice === "rock") setOutcome("lose");
        else if (computerChoice === "paper") setOutcome("win");
        else if (computerChoice === "scissors") setOutcome("tie");
        break;
      default:
        break;
    }
  }, [userChoice, computerChoice]);

  return (
    <div>
      <div>{userChoice}</div>
      <div>{computerChoice}</div>
      <div>{outcome}</div>
    </div>
  );
};

export default ComputerChoice;
