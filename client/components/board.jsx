import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import O from 'material-ui/lib/svg-icons/image/panorama-fish-eye';
import X from 'material-ui/lib/svg-icons/content/clear';
import Cell from './components/cell.jsx';

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


export const Board = () => (
 <div style={styles.root}>
   <div className="board">
     <div className="row">
       <Cell value="X" />
       <Cell value="O" />
       <Cell value="empty" />
     </div>
     <div className="row">
       <RaisedButton label="Secondary" disabled={true} style={styles.button} >
       <O style={styles.icon} />
       </RaisedButton>
       <RaisedButton label="Secondary" disabled={true} style={styles.button} >
       <O style={styles.icon} />
       </RaisedButton>
       <RaisedButton label="Secondary" disabledBackgroundColor={Colors.pinkA200} disabled={true} style={styles.button} >
       <X style={styles.icon} />
       </RaisedButton>
     </div>
     <div className="row">
       <RaisedButton label="Secondary" secondary={true} style={styles.button} >
       </RaisedButton>
       <RaisedButton label="Secondary" secondary={true} style={styles.button} >
       </RaisedButton>
       <RaisedButton label="Secondary" disabledBackgroundColor={Colors.pinkA200} disabled={true} style={styles.button} >
       <X style={styles.icon} />
       </RaisedButton>
     </div>
     <div className="row">
       <RaisedButton label="Secondary" disabled={true} style={styles.button} >
       <O style={styles.icon} />
       </RaisedButton>
       <RaisedButton label="Secondary" disabled={true} style={styles.button} >
       <X style={styles.icon} />
       </RaisedButton>
       <RaisedButton label="Secondary" disabledBackgroundColor={Colors.pinkA200} disabled={true} style={styles.button} >
       <X style={styles.icon} />
       </RaisedButton>
     </div>
   </div>
 </div>
);

