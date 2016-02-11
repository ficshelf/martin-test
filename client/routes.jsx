import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './app.jsx';
import {MainCardContainer} from './components/maincard.jsx';


FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<MainCardContainer/>)
    });
  }
});
