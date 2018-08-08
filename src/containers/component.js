import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(actions.increaseCount);
    }
  };
};

class Counter extends Component {
  render() {
    return (
      <div>
        Count:
        {this.props.count}
        <button onClick={this.props.onButtonClick}>
          CLICK ME
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
