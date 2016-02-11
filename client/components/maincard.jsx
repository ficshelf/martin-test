import React from 'react';
import { connect } from 'react-redux';


import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import O from 'material-ui/lib/svg-icons/image/panorama-fish-eye';
import X from 'material-ui/lib/svg-icons/content/clear';
import Avatar from 'material-ui/lib/avatar';

import Board from './board.jsx';
import Winner from './winner.jsx';
import { move, reset } from './../actions.jsx';

//export const MainCard = () => (
class MainCard extends React.Component {
  
  constructor(props) {
    super(props);
  };

  render() { 
	  const {dispatch, board, turn} = this.props;
	  console.log(this.props);

	  return(
	  <Card>
	    <CardHeader
	      title={"Next move: " + turn} 
	      subtitle={<Winner winner={this.props.winner} draw={this.props.draw} />}
	      avatar={<Avatar className="avatar" icon={( turn == "x" ? <X/> : <O/>)}  />}
	    />
	    <CardMedia >
               <Board board={board}
                onCellTap={(x,y) =>
                dispatch(move({x, y}))
               } />
	    </CardMedia>
	    <CardText>
	      Classic puzzle game also known as <b>Noughts and Crosses</b>,
	      <b>Tic Tac Toe</b> or sometimes <b>X</b> and <b>O</b>. 
	      This is a game for two players, called "X" and "O", 
	      who take turns marking the spaces in a 3x3 grid.
	    </CardText>
	    <CardActions>
	      <FlatButton label="Play it Again" onTouchTap={() => dispatch(reset())} />
	    </CardActions>
	  </Card>
	);
  }
}

function mapStateToProps(state) {
  return {
    turn: state.reducer.get('turn'),
    board: state.reducer.get('board'),
    winner: state.reducer.get('winner'),
    draw: state.reducer.get('draw')
  };
}

export const MainCardContainer = connect(mapStateToProps)(MainCard);

