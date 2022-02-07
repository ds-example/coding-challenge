import {
  html,
  unsafeCSS,
  unsafeHTML,
  customElement,
  BaseElement,
  literal,
} from '@c360/base-element';
import textStyles from './text.scss';

// HTMLHeadingElement
type HTMLElementTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TextSizes =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'
  | 'xxxxlarge'
  | 'xxxxxlarge';

type TextWeights = 'regular' | 'semibold' | 'bold' | 'black';
type TextColor = 'inherit' | 'brand';

@customElement('c360-text')
export class C360Text extends BaseElement {
  static get styles() {
    return [unsafeCSS(textStyles)];
  }

  static properties = {
    tag: {
      type: String,
    },
    size: {
      type: String,
    },
    weight: {
      type: String,
    },
    color: {
      type: String,
    },
  };

  tag: HTMLElementTags = 'p';
  size: TextSizes = 'medium';
  weight: TextWeights = 'regular';
  color: TextColor = 'inherit';

  render() {
    return unsafeHTML(`
    <${this.tag} class="c360-c-text c360-c-text--${this.size} c360-c-text--${this.weight} c360-c-text--color-${this.color}">
      <slot></slot>
    </${this.tag}>`);
  }
}

export default C360Text;
