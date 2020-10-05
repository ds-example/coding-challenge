import SDSButton from './button'
import './button.css'

export default {
  title: 'SDS Components/Button'
}

export const BrandButton = () => {
  const button = new SDSButton()
  button.innerText = 'This is a test'
  return button
}
