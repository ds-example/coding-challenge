import { ReactiveElement, internal, template } from 'elix'

class SDSImage extends ReactiveElement {
  get [internal.template]() {
    return template.html`
      <p>omg</p>
    `
  }
}

export default SDSImage
