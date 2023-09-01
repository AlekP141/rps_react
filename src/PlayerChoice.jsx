import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const PlayerChoice = () => {

const [choice, setChoice] = [0];

return (
  <div className='playerChoice'>
    <h1>Select your choice:</h1>
    <div className="icons">
      <FontAwesomeIcon icon="hand-back-fist" />
      <FontAwesomeIcon icon="hand" />
      <FontAwesomeIcon icon="hand-scissors" className='icon-active'/>
    </div>
  </div>
)
}

export default PlayerChoice
