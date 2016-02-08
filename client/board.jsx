import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import O from 'material-ui/lib/svg-icons/image/panorama-fish-eye';
import X from 'material-ui/lib/svg-icons/content/clear';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridTile: {
    margin: 'auto',
    textAlign: 'center',
	//width: 180,
	//height: 180,
  },
  gridList: {
    cols: 3,
    width: 420,
    //height: 500,
    margin: 'auto',
    overflowY: 'auto',
    marginBottom: 24,
  },
  paper: {
	width: 100,
	height: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
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


export const Board = () => (
  <div style={styles.root}>
 <div className="board">
 <div className="row">
  <RaisedButton label="Secondary" disabled={true} style={styles.button} >
	<O style={styles.icon} />
 </RaisedButton>
 <RaisedButton label="Secondary" secondary={true} style={styles.button} >
 </RaisedButton>
 <RaisedButton label="Secondary" disabled={true} style={styles.button} >
	<X style={styles.icon} />
 </RaisedButton>
 </div>
 <div className="row">
  <RaisedButton label="Secondary" secondary={true} style={styles.button} >
 </RaisedButton>
 <RaisedButton label="Secondary" secondary={true} style={styles.button} >
 </RaisedButton>
 <RaisedButton label="Secondary" secondary={true} style={styles.button} >
	<X style={styles.icon} />
 </RaisedButton>
 </div>
 <div className="row">
  <RaisedButton label="Secondary" secondary={true} style={styles.button} >
	<ContentAdd style={styles.icon} />
 </RaisedButton>
 <RaisedButton label="Secondary" secondary={true} style={styles.button} >
	<ContentAdd style={styles.icon} />
 </RaisedButton>
 <RaisedButton label="Secondary" secondary={true} style={styles.button} >
	<ContentAdd style={styles.icon} />
 </RaisedButton>
 </div>
 </div>
  </div>
);

