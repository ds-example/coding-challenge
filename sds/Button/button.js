import { Button, internal } from 'elix'

class SDSButton extends Button {
  get [internal.template]() {
    const result = super[internal.template]
    return result
  }
}

export default SDSButton
