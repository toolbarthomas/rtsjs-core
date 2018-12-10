import "./Pointer.css";

class Pointer {
  constructor() {
    this.cache = {
      x: 0,
      y: 0
    };

    this.clientX = 0;
    this.clientY = 0;
    this.ref = undefined;
  }

  init() {
    this.render();
    this.mount();
  }

  /**
   * Renders an unique element to use as custom cursor.
   */
  render() {
    let $pointerNode = document.getElementById('Pointer');

    // Creates an unique Pointer element that will be used for the actual cursor.
    if (!$pointerNode) {
      let $node = document.createElement('div');

      $node.id = 'Pointer';
      $node.classList.add('Pointer');

      document.body.appendChild($node);

      $pointerNode = $node;
    }

    // Save the created Pointer node as ref.
    this.ref = $pointerNode;

    // Show the rendered Pointer.
    this.showPointer();
  }

  /**
   * Bind all events.
   */
  mount() {
    window.addEventListener('mousemove', (event) => {
      this.setPointerPosition(event);
      this.setPointerDirection(event);

      this.updatePointerElement(event);
    });

    window.addEventListener('click', (event) => {
      this.setPointerPosition(event);
    });

    document.addEventListener('contextmenu', () => {
      if (event.preventDefault) {
        event.preventDefault();
      }

      if (event.stopPropagation) {
        event.stopPropagation();
      }
    });

    document.documentElement.addEventListener('mouseenter', () => {
      this.showPointer();
    });

    document.documentElement.addEventListener('mouseleave', () => {
      this.hidePointer();
    });
  }

  /**
   * Set the current X and Y Mouse positions.
   *
   * @param {document#event:mousemove} event
   */
  setPointerPosition(event) {
    this.x = event.clientX || 0;
    this.y = event.clientY || 0;
  }

  /**
   * Set the horizontal and vertical direction from the Mouse event.
   *
   * @param {document#event:mousemove} event
   */
  setPointerDirection(event) {
    // Compare the current x position with the previous x position.
    if (this.x > this.cache.x) {
      this.directionX = 'right';
    }
    else {
      this.directionX = 'left';
    }

    // Save the defined X coordinate to define the horizontal direction.
    this.cache.x = this.x;

    // Compare the current y position with the previous y position.
    if (this.y > this.cache.y) {
      this.directionY = 'down';
    }
    else {
      this.directionY = 'up';
    }

    // Save the defined X coordinate to define the vertical direction.
    this.cache.y = this.y;
  }

  /**
   * Set the horizontal and vertical position for the rendered Pointer element.
   */
  updatePointerElement() {
    if (!this.ref) {
      return;
    }

    const style = {}

    if (!Number.isNaN(Number.parseFloat(this.x))) {
      style.left = `${(this.x > 0 ? this.x : 0)}px`;
    }

    if (!Number.isNaN(Number.parseFloat(this.y))) {
      style.top = `${(this.y > 0 ? this.y : 0)}px`;
    }

    Object.assign(this.ref.style, style);
  }

  /**
   * Show the rendered Pointer element.
   */
  showPointer() {
    if (!this.ref) {
      return;
    }

    this.ref.style.display = 'block';
  }

  /**
   * Hide the rendered Pointer element.
   */
  hidePointer() {
    if (!this.ref) {
      return;
    }

    this.ref.style.display = 'none';
  }
}

export default new Pointer();
