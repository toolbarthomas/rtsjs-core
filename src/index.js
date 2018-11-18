import domready from 'domready';

import World from './core/World';

domready(() => {
  console.log('aa');
  World.render();
});
