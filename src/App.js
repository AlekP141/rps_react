import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import PlayerChoice from "./PlayerChoice";

library.add(fas);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
          <FontAwesomeIcon icon="hand" />
          <FontAwesomeIcon icon="hand-back-fist" />
          <FontAwesomeIcon icon="hand-scissors" />
      </header> */}
      <PlayerChoice />
    </div>
  );
}

export default App;
