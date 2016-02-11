import React from 'react';
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

class Cell extends React.Component {

  //constructor(props) {
   // super(props)
	  //<RaisedButton label='cell' disabled={true} disabledBackgroundColor={Colors.pinkA200} style={styles.button} onTouchTap={(() => this.handleTap()).bind(this)} >
  //};


  render() {
	return (<span>
	{{
        x: (
	  <RaisedButton label='cell' disabled={true} style={styles.button} onTouchTap={(() => this.handleTap()).bind(this)} >
		<X style={styles.icon} />
	  </RaisedButton>
	),
        o: (
	  <RaisedButton label='cell' disabled={true} style={styles.button} onTouchTap={(() => this.handleTap()).bind(this)} >
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

  Cell.defaultProps =  {
      value: 'empty'
  }

export default Cell;
