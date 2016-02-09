import React from 'react';
import {Board} from './board.jsx';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';


export const MainCard = () => (
  <Card>
    <CardHeader
      title="Martin"
      subtitle="Playing Noughts"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia>
        <Board/>
    </CardMedia>
    <CardText>
      Classic puzzle game also known as <b>Noughts and Crosses</b>,
      <b>Tic Tac Toe</b> or sometimes <b>X</b> and <b>O</b>. 
      This is a game for two players, called "X" and "O", 
      who take turns marking the spaces in a 3x3 grid.
    </CardText>
    <CardActions>
      <FlatButton label="Play it Again, Martin" />
    </CardActions>
  </Card>
);
