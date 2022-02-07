import { fragmentFrom } from 'elix/src/core/htmlLiterals.js';

export default {
  title: 'C360 Components/Image',
};

export const RFC = () => {
  return fragmentFrom.html`
    <h1>Image Component Placeholder</h1>
    <h2>Goals:</h2>
    <ul>
      <li>Use WebP where possible</li>
      <li>Fall back where unsupported</li>
      <li>Support cropping of image and both responsive and absolute sizing</li>
      <li>Ensure full accessibility adherence on implementations</li>
    </ul>
  `;
};

export const BasicUsage = () => {
  return fragmentFrom.html`
    <c360-img></c360-img>
  `;
};
