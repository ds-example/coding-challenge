import SDSButton from './button'
import docs from './docs.mdx'

export default {
  title: 'SDS Components/Button',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const BaseButton = () => {
  const button = new SDSButton()
  button.innerText = 'Base Button'
  button.variant = 'base'
  return button
}

export const BrandButton = () => {
  const button = new SDSButton()
  button.innerText = 'Brand Button'
  button.variant = 'brand'
  return button
}
