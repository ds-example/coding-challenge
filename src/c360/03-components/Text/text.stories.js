import { fragmentFrom } from 'elix/src/core/htmlLiterals.js';
import docs from './docs.mdx';

export default {
  title: 'C360 Components/Text',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const XXXXXLarge = () => {
  return fragmentFrom.html`
    <c360-text level="h1" size="xxxxxlarge" weight="bold">
      This is an 5XL (xxxxxlarge) bold H1.
    </c360-text>
  `;
};

export const XXXXLarge = () => {
  return fragmentFrom.html`
    <c360-text level="h1" size="xxxxlarge">
      This is 4XL text
    </c360-text>
  `;
};

export const XXXLarge = () => {
  return fragmentFrom.html`
    <c360-text level="h1" size="xxxlarge">
      This is 3XL (xxxlarge) text
    </c360-text>
  `;
};

export const XXLarge = () => {
  return fragmentFrom.html`
    <c360-text level="h1" size="xxlarge">
      This is 2XL (xxlarge) text
    </c360-text>
  `;
};

export const XLarge = () => {
  return fragmentFrom.html`
    <c360-text level="h2" size="xlarge">
      This is a xlarge H2 text
    </c360-text>
  `;
};

export const Large = () => {
  return fragmentFrom.html`
    <c360-text level="h2" size="large">
      This is a large H2 text
    </c360-text>
  `;
};

export const Medium = () => {
  return fragmentFrom.html`
    <c360-text level="h2" size="medium">
      This is a medium H2 text
    </c360-text>
  `;
};

export const Small = () => {
  return fragmentFrom.html`
    <c360-text level="h2" size="small">
      This is a small paragraph text
    </c360-text>
  `;
};

export const XSmall = () => {
  return fragmentFrom.html`
    <c360-text level="h2" size="xsmall">
      This is a xsmall paragraph text
    </c360-text>
  `;
};
