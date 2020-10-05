import Welcome from './welcome'

export default {
  title: 'C360 Test/Welcome'
}

export const Intro = () => {
  const welcomeContent = new Welcome()
  return welcomeContent
}
