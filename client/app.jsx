import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import xoxoxoApp from './reducers.jsx';

import AppBar from 'material-ui/lib/app-bar';
import AppLeftNav from './components/leftnavigation.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class AppBarXO extends React.Component {


  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleToggle () {
	return this.setState({open: !this.state.open});
	};

    //iconClassNameRight="muidocs-icon-navigation-expand-more"
  render() {
    return(
    <div> 
    <AppBar
    title="Noughts & Crosses"
    iconElementLeft={<AppLeftNav open={this.state.open} />}
    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
    >
    </AppBar>	
    </div>
    );
  };
};


//    <AppLeftNav open={this.state.open} />
// define and export our Layout component
export const Layout = ({content}) => (
    <div>
    <AppBarXO/>
        <br />
        <div>{content}</div>
    </div>
);

export default AppBarXO;
