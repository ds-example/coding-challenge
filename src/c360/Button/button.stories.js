import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Button',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const BrandButton = () => {
  return fragmentFrom.html`
    <c360-button variant="brand">Brand Button</c360-button>
  `
}
