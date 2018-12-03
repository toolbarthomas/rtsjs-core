import domready from 'domready';

import Pointer from './core/Interface/Pointer';

domready(() => {
  window.Game = {
    Pointer: Pointer.mount()
  }
});
