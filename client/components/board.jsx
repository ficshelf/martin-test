import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import O from 'material-ui/lib/svg-icons/image/panorama-fish-eye';
import X from 'material-ui/lib/svg-icons/content/clear';
import Cell from './cell.jsx';

const styles = {
 root: {
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-around',
 },
   button: {
   width: 80,
   height: 80,
   margin: 8,
 },
 icon: { 
   width: 80,
   height: 80,
 }
};


//export const Board = () => (
class Board extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    return (<div style={styles.root}>
	     <div className="board">
      		{this.props.board.map((row, x) => { 
          	  return(
		    <div className="row" key={x}>
		    {row.map((col, y) => 
                     <Cell value={String(col)}  key={y} position={{x,y}} onCellTap={this.props.onCellTap.bind(this)} />
	            )}
		  </div>)})}
	    </div>
	 </div>);}
};

export default Board;

