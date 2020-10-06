// import SDSButton from './button'
// import Button from 'elix/define/Button'
// import './button.css'

export default {
  title: 'SDS Components/Badge'
}

export const Base = () => {
  const badge = document.createElement('p')
  badge.innerText = 'this is a test badge'
  return badge
}
