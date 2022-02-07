import { fragmentFrom } from 'elix/src/core/htmlLiterals';
import docs from './docs.mdx';

export default {
  title: 'C360 Components/Grid',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Grid = () => {
  return fragmentFrom.html`
    <c360-grid>
      <c360-grid-cell width="12/12 6/12@small 4/12@medium">
        Grid Cell 1
      </c360-grid-cell>

      <c360-grid-cell width="12/12 6/12@small 4/12@medium">
        Grid Cell 2
      </c360-grid-cell>

      <c360-grid-cell width="12/12 6/12@small 4/12@medium">
        Grid Cell 3
      </c360-grid-cell>

    </c360-grid>
  `;
};
