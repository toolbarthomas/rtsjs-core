class Pointer {
  constructor() {
    this.clientX = 0;
    this.clientY = 0;
    this.ref = undefined;
  }

  mount() {
    this.render();

    this.bind();
  }

  /**
   * Renders the cursor element.
   */
  render() {
    let $pointerNode = document.getElementById('Pointer');

    // Creates an unique Pointer element that will be used for the actual cursor.
    if (!$pointerNode) {
      let $node = document.createElement('div');

      $node.id = 'Pointer';

      document.body.appendChild($node);

      $pointerNode = $node;
    }

    // Save the created Pointer node as ref.
    this.ref = $pointerNode;

    return this.ref;
  }

  /**
   * Binds
   */
  bind() {
    if (!this.ref) {
      return;
    }

    window.addEventListener('mousemove', (event) => {
      this.clientX = event.clientX;
      this.clientY = event.clientY;
    });
  }
}

export default new Pointer();
