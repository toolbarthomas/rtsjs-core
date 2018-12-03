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
   * Bind all event.
   */
  bind() {
    if (!this.ref) {
      return;
    }

    window.addEventListener('mousemove', (event) => {
      this.setPointerPosition(event);
    });

    window.addEventListener('click', (event) => {
      this.setPointerPosition(event);

      console.log(this);
    });
  }

  setPointerPosition(e) {
    this.clientX = e.clientX || 0;
    this.clientY = e.clientY || 0;
  }
}

export default new Pointer();
