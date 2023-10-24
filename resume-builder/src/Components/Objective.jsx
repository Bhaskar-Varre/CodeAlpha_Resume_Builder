

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFontAwesome} from '@fortawesome/free-solid-svg-icons';
import './Objective.css';
const Objective = ({ objectiveData, updateObjectiveData }) => {
  const { objective } = objectiveData;


  return (
    <div>
      <h2>Objective <FontAwesomeIcon icon={faFontAwesome} /></h2>
      <form>
        <div>
          <label htmlFor="objective">Objective:</label>
          <textarea
            id="objective"
            value={objective  || ''}
            onChange={(e) => updateObjectiveData({ ...objectiveData, objective: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default Objective;

