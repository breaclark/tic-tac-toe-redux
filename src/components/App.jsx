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
        <Game xIsNext={this.props.xIsNext}
          squares={this.props.squares}/>
      </div>
    );
  }
}

App.propTypes= {
  xIsNext: PropTypes.bool,
  squares: PropTypes.array
};

const mapStateToProps = state => {
  return {
    xIsNext: state.xIsNext,
    squares: state.squares
  };
};

export default connect(mapStateToProps)(App);
