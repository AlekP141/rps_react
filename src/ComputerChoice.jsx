import { useContext, useEffect, useState } from "react";
import SinglePlayerChoiceContext from "./SinglePlayerChoiceContext";

const ComputerChoice = () => {
  const userChoice = useContext(SinglePlayerChoiceContext);
  const computerOptions = ["rock", "paper", "scissors"];

  const [computerChoice, setComputerChoice] = useState("none");
  const [outcome, setOutcome] = useState("hello");

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

  return (
    <div>
      <div>{userChoice}</div>
      <div>{computerChoice}</div>
      <div>{outcome}</div>
    </div>
  );
};

export default ComputerChoice;
