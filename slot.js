class SlotContainer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const template = document.getElementById('my-template');
    const templateContent = template.content;
    const sth = document.createElement('div');
    sth.innerHTML = '<p style="border: 1px solid #999;">额外插入的(看来只能通过这种方式插入，在 html 中写的不显示。。。)</p>';
    shadow.appendChild(sth);
    shadow.appendChild(templateContent.cloneNode(true));
  }
}
customElements.define('slot-container', SlotContainer);
