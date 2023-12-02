import Popover from './popever';

export default class Button {
  constructor() {
    this.container = null;
    this.popover = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('HTMLElement is not defined');
    }
    this.container = container;
    this.popover = new Popover(container);
  }

  drawUI() {
    this.checkBinding();
    this.popover.insertToDOM(Popover.popoverUI());

    this.container.innerHTML = `
          <button class="button">Click to toggle popover</button>
        `;
  }

  buttonClick() {
    const btn = this.container.querySelector('.button');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.popover-container').classList.toggle('open');
    });
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Button not bind to DOM');
    }
  }
}
