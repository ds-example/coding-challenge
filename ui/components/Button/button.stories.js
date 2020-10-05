import Button from 'elix/define/Button'
import './button.css'

export default {
  title: 'SDS/Button'
}

export const BasicHTML = () => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = 'Trigger Action'
  btn.addEventListener('click', () => action('This was clicked')())
  return btn
}

export const ElixButton = () => {
  const button = new Button()
  button.innerText = 'This is a test'
  return button
}
