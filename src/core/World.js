'use strict';

import './World.css';

class World {

  constructor() {

  }

  render() {
    const $world = document.createElement('div');
    const $stack = document.createElement('div');

    $world.classList.add('World');
    $stack.classList.add('World__stack');

    document.body.appendChild($world);
    $world.appendChild($stack);
  }

}

export default new World();
