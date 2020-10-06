import SDSImage from './image'
import './image.css'

export default {
  title: 'SDS Components/Image'
}

export const Base = () => {
  const image = new SDSImage()
  return image
}
