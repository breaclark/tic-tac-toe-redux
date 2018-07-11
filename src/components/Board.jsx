import React from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import c from './../constants';
import PropTypes from 'prop-types';

function Board(props){

  function switchPlayer(){
    const { dispatch } = props;
    const action = {
      type: c.SWITCH_PLAYER,
      xIsNext: !props.xIsNext
    };
    dispatch(action);
  }

  function addMove(i){
    const { dispatch } = props;
    const squaresCopy = JSON.parse(JSON.stringify(props.squares));
    squaresCopy[i] = props.xIsNext ? 'X' : 'O';
    const action = {
      type: c.ADD_MOVE,
      squares: squaresCopy
    };
    dispatch(action);
  }

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (props.squares[a] && props.squares[a] === props.squares[b] && props.squares[a] === props.squares[c]) {
        return props.squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner();
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
  }

  //handleClick(i) is a method that copies the board array with the specific index i changed on click to X. This is done to maintain immutability.
  function handleClick(i){
    if (calculateWinner() || props.squares[i]) {
      return;
    } else{
      addMove(i);
      switchPlayer();
    }
  }

  //renderSquare(i) is a method which returns the value of square after the previous click.
  function renderSquare(i) {
    return (<Square
      value={props.squares[i]}
      onClick={()=> handleClick(i)}
    />
    );
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

Board.propTypes= {
  dispatch: PropTypes.func,
  xIsNext: PropTypes.bool,
  squares: PropTypes.array
};

export default connect()(Board);
