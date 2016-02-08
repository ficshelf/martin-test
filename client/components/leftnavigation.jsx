import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

export default class AppLeftNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

//  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle LeftNav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav open={this.state.open}>
          <MenuItem>Play!</MenuItem>
          <MenuItem>Top Scores</MenuItem>
          <MenuItem>Log out</MenuItem>
        </LeftNav>
      </div>
    );
  }
}
