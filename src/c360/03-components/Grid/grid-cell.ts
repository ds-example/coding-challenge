import {
  customElement,
  BaseElement,
  unsafeCSS,
  html,
} from '@c360/base-element';
import gridCellStyles from './grid-cell.scss';

// @todo: include the full set of width + responsive width variations
export const enum GridCellWidth {
  '12/12' = '12/12',
  '6/12' = '6/12',
  '4/12' = '4/12',
}

@customElement('c360-grid-cell')
export class C360GridCell extends BaseElement {
  static get styles() {
    return [unsafeCSS(gridCellStyles)];
  }

  static properties = {
    width: {
      type: String,
    },
  };

  width: keyof typeof GridCellWidth = '12/12';

  render() {
    return html`
      <div class="c360-c-grid-cell">
        <slot></slot>
      </div>
    `;
  }
}

export default C360GridCell;
