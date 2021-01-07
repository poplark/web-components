/**
 * 尝试使用 WebComponent 的生命周期函数
 */
class LifeCycle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const left = document.createElement('button');
    left.textContent = '<';
    left.addEventListener('click', () => {
      const parent = this.parentNode;
      const previous = parent.previousElementSibling;
      if (previous) {
        previous.appendChild(this);
      }
    });
    const right = document.createElement('button');
    right.textContent = '>';
    right.addEventListener('click', () => {
      const parent = this.parentNode;
      const next = parent.nextElementSibling;
      if (next) {
        next.appendChild(this);
      }
    });
    const add = document.createElement('button');
    add.textContent = '+';
    add.addEventListener('click', () => {
      const clicked = this.getAttribute('clicked');
      this.setAttribute('clicked', `${parseInt(clicked ? clicked : 0) + 1}`);
    });
    const remove = document.createElement('button');
    remove.textContent = 'x';
    remove.addEventListener('click', () => {
      const parent = this.parentNode;
      parent.removeChild(this);
    });

    const wrapper = document.createElement('div');
    wrapper.style.textAlign = 'center';
    wrapper.appendChild(left);
    wrapper.appendChild(right);
    wrapper.appendChild(remove);
    wrapper.appendChild(add);

    this.setAttribute('clicked', '0');
    shadow.appendChild(wrapper);
  }

  /**
   * 当 custom element首次被插入文档DOM时，被调用。
   */
  connectedCallback() {
    console.log('Custom element added to page.');
  }

  /**
   * 当 custom element从文档DOM中删除时，被调用。
   */
  disconnectedCallback() {
    console.log('Custom element removed from page.');
  }

  /**
   * 当 custom element被移动到新的文档时，被调用。
   */
  adoptedCallback() {
    // todo - 到底啥时候会调用
    console.log('Custom element moved to new page.');
  }

  /**
   * 当 custom element增加、删除、修改自身属性时，被调用。
   * @param {*} name 
   * @param {*} oldValue 
   * @param {*} newValue 
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // todo - 到底啥时候会调用
    console.log('Custom element attributes changed.', name, oldValue, newValue);
  }
}

customElements.define('life-cycle', LifeCycle);
