import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseElement } from '@c360/base-element';
import cardGroupStyles from './card-group.scss';

@customElement('c360-card-group')
export class C360CardGroup extends BaseElement {
  static get styles() {
    return [unsafeCSS(cardGroupStyles)];
  }

  render() {
    return html` ${this.slotted('header')
        ? html` <div
            class="c360-c-card-group__header c360-u-margin-bottom-large"
          >
            <slot name="header"></slot>
          </div>`
        : null}
      <c360-grid>${this.slotted('default')} </c360-grid>`;
  }
}

export default C360CardGroup;
