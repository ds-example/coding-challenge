import Button from 'elix/src/base/Button.js'
import {
  defaultState,
  render,
  setState,
  state,
  template
} from 'elix/src/base/internal.js'
import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'

import stylesheet from '!!raw-loader!./button.css'

class SDSButton extends Button {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      variant: ''
    })
  }

  // Variant Getter/Setter
  get variant() {
    return this[state].variant
  }

  set variant(variant) {
    this[setState]({
      variant
    })
  }

  // Template override
  get [template]() {
    const result = super[template]

    result.content.append(fragmentFrom.html`
      <style>
       ${stylesheet}
      </style>
    `)
    return result
  }

  // Change detector / dispatcher
  [render](changed) {
    super[render](changed)

    // Detects for changes to Variant state
    if (changed.variant) {
      const { variant } = this[state]

      if (variant) {
        this.setAttribute('variant', variant)
      } else {
        this.removeAttribute('variant')
      }
    }
  }
}

export default SDSButton
