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
    const tooltip = document.querySelector('.popover-container')
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      tooltip.classList.toggle('open');
      let target = e.target;
      let cords = target.getBoundingClientRect();
      let left = cords.left + (target.offsetWidth - tooltip.offsetWidth) / 2
      let top = cords.top - tooltip.offsetHeight - 5
      tooltip.style.left = left + 'px'
      tooltip.style.top = top + 'px'
    });
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Button not bind to DOM');
    }
  }
}
