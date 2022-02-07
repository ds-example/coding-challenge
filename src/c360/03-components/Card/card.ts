import { html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseElement } from '@c360/base-element';
import cardStyles from './card.scss';

@customElement('c360-card')
export class C360Card extends BaseElement {
  static get styles() {
    return [unsafeCSS(cardStyles)];
  }

  render() {
    return html`<div class="c360-c-card">
      <slot>Default slot content</slot>
      ${this.slotted('footer')
        ? html` <div class="c360-c-card__footer">
            <slot name="footer"></slot>
          </div>`
        : html`no footer slotted content`}
    </div>`;
  }
}

export default C360Card;
