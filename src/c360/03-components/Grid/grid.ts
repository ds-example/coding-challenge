import { html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseElement } from '@c360/base-element';
import gridStyles from './grid.scss';
import widthUtils from '@c360/global-styles/src/07-utilities/_utilities.width.scss';

@customElement('c360-grid')
export class C360Grid extends BaseElement {
  static get styles() {
    return [unsafeCSS(gridStyles)];
  }

  render() {
    const inlineCSS = css`
      ${unsafeCSS(widthUtils)}
    `;
    return html`
      <style>
        ${inlineCSS}
      </style>
      <div class="c360-c-grid c360-c-grid--flex c360-c-grid--matrix">
        <slot></slot>
      </div>
    `;
  }
}

export default C360Grid;
