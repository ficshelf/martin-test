import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';

class AppLeftNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: this.props.open};
    console.log(this.state);
    console.log(this.props.open);
  };

  handleToggle () {
        return this.setState({open: !this.state.open});
        };


  handleClose () { 
	return this.setState({open: false});
	};
  
  componentWillReceiveProps (nextProps) {
    this.setState({open: nextProps.open});
  };


  render() {
    return (<span>
       <IconButton 
          onTouchTap={this.handleToggle.bind(this)}
	>
	<MenuIcon color="white"/>
        </IconButton>
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose.bind(this)} primaryText="Play!" leftIcon={<RemoveRedEye />}></MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)} primaryText="Top Scores" leftIcon={<RemoveRedEye />}></MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose.bind(this)} primaryText="About" leftIcon={<RemoveRedEye />}></MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose.bind(this)} primaryText="Log Out" leftIcon={<Delete/>}></MenuItem>
        </LeftNav>
	</span>
    );
  }
}


export default AppLeftNav;
