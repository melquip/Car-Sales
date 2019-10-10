import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const AddedFeature = ({ removeItem, feature }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={e => removeItem(feature.id)}>X</button>
      {feature.name}
    </li>
  );
};	

export default connect(state => state.app, actionCreators)(AddedFeature);