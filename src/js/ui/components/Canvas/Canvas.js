import React from 'react';
import Game from '../../../Game';

import './Canvas.scss';

class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.game = Game.createGame();
  }

  componentWillMount() {
    this.props.initialiseGame(this.game);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    Game.destroyGame(this.game);
  }

  render() {
    return <div className="game__wrapper" id="game" />;
  }
}

export default Canvas;
