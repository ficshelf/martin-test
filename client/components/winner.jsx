import React from 'react';

class Winner extends React.Component {
  render() {
    return (
        <span>
	{(this.props.winner ? "Player "+this.props.winner + " won" : null)}
        {(this.props.draw ? "It's a draw" : null)}
	</span>
    );
  }
}


export default Winner;
