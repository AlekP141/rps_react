import { useContext, useEffect, useState } from "react"
import SinglePlayerChoiceContext from "./SinglePlayerChoiceContext"

const ComputerChoice = () => {
  const userChoice = useContext(SinglePlayerChoiceContext)
  const computerOptions = ["rock", "paper", "scissors"]

  const [computerChoice, setComputerChoice] = useState("none")

  useEffect(() => {
    setComputerChoice(computerOptions[Math.floor(Math.random() * computerOptions.length)])
  }, [userChoice])


  return (
    <div>
      <div>{userChoice}</div>
      <div>{computerOptions}</div>
      <div>{computerChoice}</div>
    </div>
  )
}

export default ComputerChoice
