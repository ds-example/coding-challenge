import { ReactiveElement, internal, template } from 'elix'

const componentName = 'c360-welcome'

class C360Welcome extends ReactiveElement {
  get [internal.template]() {
    return template.html`
      <h1>SDS Developer Take Home Test</h1>
      <p>
        Thank you for considering the Salesforce Design System team 
        for your next career opportunity!
      </p>

      <h2>Project Objective</h2>
      <p>
        Your project, should you choose to accept it, is to build out a new 
        experience component for our design system, using components from 
        our SDS subsystem.
      </p>
      <p>
        We are using the Elix project to provide a lightweight, authentic Web Component
        experience. Documenation on Elix can be found on the 
        <a href="https://component.kitchen/elix" target="blank">Elix website</a>.
      </p>
      <p>
        For this assignment, you can peruse the source code from our SDS layer 
        components for inspiration.
      </p>
      <p>Copy, paste, read the docs, see what you can come up with.</p>
    `
  }
}

customElements.define(componentName, C360Welcome)

export default C360Welcome
