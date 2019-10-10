import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const AdditionalFeature = ({ addItem, feature }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={e => addItem(feature.id)}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(state => state, actionCreators)(AdditionalFeature);
