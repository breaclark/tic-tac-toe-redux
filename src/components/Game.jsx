import React from 'react';
import Board from './Board';
import Square from './Square';
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

export default connect()(Game);
