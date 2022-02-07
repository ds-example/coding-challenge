// sds imports
import { SdsButton, SdsHeadline } from '@sds/components';
import {
  C360Button,
  C360Headline,
  C360Card,
  C360CardGroup,
  C360Text,
} from '@c360/components';

// global css import
import '../src/globals.css';
import '@c360/global-styles';

// Define SDS Web Components
customElements.define('sds-button', SdsButton);
customElements.define('sds-headline', SdsHeadline);

// Define C360 Web Components
customElements.define('c360-button', C360Button);
customElements.define('c360-headline', C360Headline);
