import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Layout} from './app.jsx';
import {Welcome} from './components/welcome.jsx';
import {CardExampleWithAvatar} from './components/card.jsx';
import {MyA} from './components/b.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        //content: (<CardExampleWithAvatar/>)
        content: (<MyA/>)
//        content: (<Welcome name="Mart"/>)
    });
  }
});
