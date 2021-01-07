/**
 * Customized built-in elements
 * 该类型元素是用过继承html中内建的元素进行自定义
 */
class MyButton extends HTMLButtonElement {
  constructor() {
    super();
    const prefix = this.getAttribute('prefix');
    const suffix = this.getAttribute('suffix');
    this.style = `
      color: green;
    `;
    this.textContent = `${prefix} - ${this.textContent} - ${suffix}`;
    this.addEventListener('click', (evt) => {
      console.log(`my-button `, evt);
    });
  }
}

customElements.define(`my-button`, MyButton, { extends: 'button' });
