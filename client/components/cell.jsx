import React from 'react';
import { connect } from 'react-redux';
import { Map, List, fromJS, is} from 'immutable';

import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import O from 'material-ui/lib/svg-icons/image/panorama-fish-eye';
import X from 'material-ui/lib/svg-icons/content/clear';


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

class CellComp extends React.Component {


  render() {

   combo = this.props.combo;
   let pos = false;
/*
   if (combo != null) { 
	for (let p of combo) {
		((p._root.entries[0][1] == this.props.position.x ) && ( p._root.entries[1][1] == this.props.position.y ))   
	    })

	    console.log("p , ",p);
};
*/
   if (combo != null) { 
	let p = combo.map((pointSet) => {
		if ( (pointSet._root.entries[0][1] == this.props.position.x ) && ( pointSet._root.entries[1][1] == this.props.position.y )) { pos = true; return true; }
	    });  //careful - pos is a side effect!
   };
   // VERY OLDSTYLE BUT VERY READABLE!

	return (<span>
	{{
        x: (
	  <RaisedButton 
		label='cell' 
		disabled={true} 
		style={styles.button} 
		disabledBackgroundColor={( (pos && (this.props.winner == "x"))  ? Colors.pinkA200 : Colors.grey100 ) }
		onTouchTap={(() => this.handleTap()).bind(this)} >
		<X style={styles.icon} />
	  </RaisedButton>
	),
        o: (
	  <RaisedButton 
		label='cell' 
		disabled={true} 
		style={styles.button} 
		disabledBackgroundColor={( (pos && (this.props.winner == "o"))  ? Colors.pinkA200 : Colors.grey100 ) }
		onTouchTap={(() => this.handleTap()).bind(this)} >
		<O style={styles.icon} />
	  </RaisedButton>
	),
	0: (
	  <RaisedButton label='cell' secondary={true} disabled={false} style={styles.button} onTouchTap={(() => this.handleTap()).bind(this)} /> 
	)}[this.props.value]}    
	</span>)};


  handleTap() {
    this.props.onCellTap(this.props.position.x, this.props.position.y);
  }

}

  CellComp.defaultProps =  {
      value: '0'
  }
;

 function mapStateToProps(state) {
  return {
    combo: state.reducer.get('combo'),
    winner: state.reducer.get('winner')
  };
 }


export const Cell = connect(mapStateToProps)(CellComp);

//export default Cell;
