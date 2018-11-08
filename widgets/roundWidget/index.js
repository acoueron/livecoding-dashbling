import React from 'react';
import { Widget, MediumLabel } from '@dashbling/client/Widget';

// Widget de type horloge
export default class RoundWidget extends React.PureComponent {

  // Rendu du composant
  render() {

    // Propriétés du composant
    const title = this.props.title;
    const value = this.props.value;

    // Rendu
    return (
      <Widget>
        <MediumLabel>{title}</MediumLabel>
        <svg viewBox="-100 -50 200 100" height="300px">
        <circle cx="0" cy="0" r="40" fill="lightgrey" stroke="grey" strokeWidth="5" />
        <text x="0" y="0" alignmentBaseline="central" textAnchor="middle" fill="black" fontSize="18">
          {value}
        </text>
        </svg>
      </Widget>
    )
  }

}
