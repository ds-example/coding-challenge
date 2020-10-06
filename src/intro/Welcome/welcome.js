import { ReactiveElement, internal, template } from 'elix'

class C360Welcome extends ReactiveElement {
  get [internal.template]() {
    return template.html`
      <h1>Salesforce Design System Engineering</h1>

      <h2>Take Home Developer Test</h2>
      <p>
        Thank you for considering the Salesforce Design System team 
        for your next career opportunity!
      </p>

      <h3>Project Objective</h3>
      <p>
        Your project, should you choose to accept it, is to build out a new 
        experience component for our design system, using components from 
        our SDS design subsystem.
      </p>
      <p>
        The component that needs to be built is a <strong>Carousel component</strong>. 
        It should be created as a functional web component, capable of showing multiple 
        <strong>MediaObject components</strong> (todo: link to sb component). Essential 
        points are for completing the core component work, and bonus points can be 
        earned by writing component tests and documentation.
      </p>
      <p>
        Design specs for the component can be found in the "static" assets directory.
      </p>

      <h3>Project Tech Stack</h3>
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

export default C360Welcome
