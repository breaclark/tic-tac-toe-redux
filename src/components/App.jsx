import React from 'react';
import Game from './Game';
import './game.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Game
          xIsNext={this.props.xIsNext}
          history={this.props.history}
          stepNumber={this.props.stepNumber}
        />
      </div>
    );
  }
}

App.propTypes= {
  xIsNext: PropTypes.bool,
  history: PropTypes.array,
  stepNumber: PropTypes.number
};

const mapStateToProps = state => {
  return {
    xIsNext: state.xIsNext,
    history: state.history,
    stepNumber: state.stepNumber
  };
};

export default connect(mapStateToProps)(App);
