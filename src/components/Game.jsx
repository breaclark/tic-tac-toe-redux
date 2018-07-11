import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Game(props){
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={props.xIsNext}
          squares={props.squares}/>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

Game.propTypes= {
  xIsNext: PropTypes.bool,
  squares: PropTypes.array
};

export default connect()(Game);
