export default class Popover {
  constructor(container) {
    this.container = container;
    this.popover = null;
  }

  static popoverUI() {
    return `
        <div class="popover-container">
           <h4 class="popover-title">Popover title</h4>
           <p class="popover-text">And here's some amazing content. It's very engaging. Right?</p>
        </div>
        `;
  }

  insertToDOM(html) {
    this.container.insertAdjacentHTML('afterend', html);
  }
}
