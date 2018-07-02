import React from 'react'

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() =>this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     )
//   }
// }
// Above code was commented out because we need this to be a functional component because it doesn't change state, it only receives props.

function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
//we change this.props to just props because we don't need to worry about 'this' in a functional component.

export default Square
