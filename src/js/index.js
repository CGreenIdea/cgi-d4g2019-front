import '../css/main.scss';

// Here the JS
class Container extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
      this.innerHTML = '<h1>green L4tern</h1>';
    }
}

customElements.define('main-container', Container);
let container = new Container();
document.querySelector('body').appendChild(container);
