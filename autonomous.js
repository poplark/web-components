/**
 * Autonomous custom elements
 * 独立的元素，这种元素不会继承现有内建的HTML标签
 */
class MyText extends HTMLElement {
  name = 'my-text';
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    const text = this.getAttribute('text');
    info.textContent = text;

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        background-color: red;
      }
      .info {
        color: yellow;
      }
    `;

    wrapper.appendChild(info);
    wrapper.addEventListener('click', (evt) => {
      console.log(evt, this.name);
      this.name += '1';
    });
    console.log('before', style.isConnected);
    shadow.appendChild(style);
    console.log('after', style.isConnected);
    shadow.append(wrapper);
  }
}

customElements.define('my-text', MyText);
