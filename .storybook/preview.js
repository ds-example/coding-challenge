// sds imports
import SDSButton from '../src/sds/Button/button'

// c360 imports
import C360Welcome from '../src/intro/Welcome/welcome'
import C360Card from '../src/c360/Card/card'
import C360CardGroup from '../src/c360/CardGroup/card-group'

// global css import
import './globals.css'

// Define SDS Web Components
customElements.define('sds-button', SDSButton)

// Define C360 Web Components
customElements.define('c360-welcome', C360Welcome)
customElements.define('c360-card', C360Card)
customElements.define('c360-card-group', C360CardGroup)
