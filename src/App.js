import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import PlayerChoice from "./PlayerChoice";
import SinglePlayerChoiceContext from "./SinglePlayerChoiceContext";

library.add(fas);

function App() {
  const singlePlayerChoice = useState(null)
  return (
    <SinglePlayerChoiceContext.Provider value={singlePlayerChoice}>
      <div className="App">
        <PlayerChoice />
      </div>
     <div>{singlePlayerChoice}</div>
    </SinglePlayerChoiceContext.Provider>
  );
}

export default App;
