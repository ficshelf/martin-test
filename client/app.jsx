import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

export const AppBarXO = () => (
  <AppBar
    title="Noughts & Crosses"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarXO;
// define and export our Layout component
export const Layout = ({content}) => (
    <div>
    <AppBarXO/>
        <br />
        <div>{content}</div>
    </div>
);


