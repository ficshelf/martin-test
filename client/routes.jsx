import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Layout} from './app.jsx';
import {MainCard} from './components/maincard.jsx';


FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<MainCard/>)
    });
  }
});
