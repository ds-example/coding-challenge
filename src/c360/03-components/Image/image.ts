import {
  html,
  unsafeCSS,
  customElement,
  BaseElement,
} from '@c360/base-element';
import imageStyles from './image.scss';

@customElement('c360-img')
export class C360Image extends BaseElement {
  static get styles() {
    return [unsafeCSS(imageStyles)];
  }

  render() {
    return html`<img
      class="c360-c-image"
      srcset="https://picsum.photos/id/366/1920/1200.webp"
      alt="temp placeholder image"
      width="1920"
      webp
      height="1200"
      loading="lazy"
    />`;
  }
}

export default C360Image;
