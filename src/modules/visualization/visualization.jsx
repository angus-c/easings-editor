import React from 'react';

import VisualizationItem from '../visualizationItem/visualizationItem.jsx';

import './visualization.css';

class Visualization extends React.Component {
  render() {
    const {easings, selectedEasingName, ...other} = this.props;
    return (
      <ul className='visualizationList'>
        {Object.keys(easings).map((key, i) => (
          <VisualizationItem
            {...other}
            fn={{name: key, value: easings[key]}}
            key={i}
            selected={key == selectedEasingName}
          />
        ))}
      </ul>
    );
  }
}

export default Visualization;
