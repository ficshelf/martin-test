import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import O from 'material-ui/lib/svg-icons/image/panorama-fish-eye';
import X from 'material-ui/lib/svg-icons/content/clear';


class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {open: this.props.open};
  };

  /* handle () {
        return this.setState();
        };


  handleClose () { 
	return this.setState({open: false});
	};
  
  */
  
  /* componentWillReceiveProps (nextProps) {
    this.setState({open: nextProps.open});
  };
  */

  render() {
        {(() => {
        switch (this.props.value) {
          case "empty":   return "<RaisedButton label="empty" secondary={true} style={styles.button} />";
          case "x": return "<RaisedButton label="cell" disabled={true} style={styles.button} ><X style={styles.icon} /></RaisedButton>";
          case "o":  return "<RaisedButton label="cell" disabled={true} disabledBackgroundColor={Colors.pinkA200} style={styles.button} ><O style={styles.icon} /></RaisedButton>";
          default:      return return "<RaisedButton label="empty" secondary={true} style={styles.button} />";
        }
       )}}}
  
  /*     
    Cell.propTypes = {
      value: PropTypes.string.isRequired,
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      onCellClick: PropTypes.func.isRequired
    };       
     
  */  
}       