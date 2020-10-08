import ReactiveElement from 'elix/src/core/ReactiveElement'
import { template } from 'elix/src/base/internal'
import { templateFrom } from 'elix/src/core/htmlLiterals'

class C360Welcome extends ReactiveElement {
  get [template]() {
    return templateFrom.html`
      <h1>Salesforce Design System Engineering</h1>

      <h2>Take Home Developer Test</h2>
      <p>
        Thank you for considering the Salesforce Design System team 
        for your next career opportunity!
      </p>

      <h3>Project Objective</h3>
      <p>
        You are tasked with building two net new components for our 
        design system.
      </p>
      <p>
        The primary composition component will be called <code>CardGroup</code>, 
        and will consist of the UI you see below:
      </p>
      <img src="/demo/comp-preview.png" alt="Design of component composition" />
      <p>
        Effectively, it's a (optional) headline element composed with a number 
        of <code>Card</code> components, which is the other component you will be 
        building out for this challenge.
      </p>
      <p>
        A <code>Card</code> contains a headline, optional image element, short text 
        description, and a call to action button.
      </p>
      <p>
        Using this redline spec as a guide, along with the components that exist 
        within the <code>src/SDS</code> folder in our design system, you will need to 
        bring these new components to life.
      </p>
      <img src="/demo/comp-redline.png" alt="Redlines" />
      <p>
        Your components will need to adapt successfully to tablet and mobile 
        displays, and will also need to pass AXE Accessibility validation and our 
        test suite.
      </p>

      <h3>Source Code & Component Structure</h3>
      <p>
        In this project, all of the source code is within the <code>src/</code> folder. 
        We have our components split up into three projects:
        <ul>
          <li>
            <code>SDS/</code> - Our Base Component Subsystem. You will be using these 
            components as you build out your own components. The SDS Engineering 
            team has already built out these components.
          </li>
          <li>
            <code>c360/</code> - The C360 Subsystem. This is experience component layer 
            where your work will live. We have scaffoled out the components you will 
            need to build, but the rest is up to you.
          </li>
          <li>
            <code>intro/</code> - Our Welcome component lives here. You won't need to 
            interact with this directory.
          </li>
        </ul>
      </p>

      <h4>Component Files</h4>
      <p>
        Each component is defined by the following files:
        <ul>
          <li>
            <code>{component}.js</code> - The main component JS file, written in the 
            Elix web components framework.
          </li>
          <li>
            <code>{component}.stories.js</code> - The Storybook file for the component, 
            written in <a href="https://storybook.js.org/docs/html/api/csf">Component 
            Story Format (CSF)</a>.
          </li>
          <li>
            <code>{component}.css</code> - The CSS file for the component. Imported by 
            the component JS file and injected into the component's shadow. Feel 
            free to style with whatever means you find comfortable, but do feel 
            encourage to check out source code for other components to get a sense 
            of how we align our selectors.
          </li>
          <li>
            <code>docs.mdx</code> - The MDX-based documentation for the component. Extra 
            credit for your work can be achieved by creating documentation for your 
            component.
          </li>
        </ul>
      </p>

      <h4>Boilerplate Setup</h4>
      <p>
        We've gone ahead and created the files and bare code structures needed for 
        you to get started coding. You can find these files in <code>src/c360/Card</code> 
        and <code>src/c360/CardGroup</code>.
      </p>
      <p>
        We've also registered the web components in the Storybook environment, so you 
        don't have to do any configuration wrangling. For the curious, you can see how 
        we register the web components in <code>.storybook/preview.js</code>. This file 
        configures the Preview window in the Storybook dev environment.
      </p>

      <h3>Tech Stack Overview</h3>

      <h4>Storybook</h4>
      <p>
        This project uses Storybook for its development enviWronment. Storybook is a 
        great way of developing UI components in isolation. It provides conventions for 
        writing "stories" for your components, which are really just ways of showcasing 
        specific states and variations that you need your component to support.
      </p>
      <p>
        Within Storybook, each component gets a <code>*.stories.js</code> file that has a 
        series of exports, with each being what we call a story. Stories are named in 
        CapitalCase and should be named descriptively.
      </p>
      <p>
        For instance, we have a story called <code>Base</code> for our default Button 
        component, along with a story called <code>Brand</code> to showcase our Brand Button 
        variant.
      </p>
      <p>
        You can always reference the stories files that exist in our pre-built components 
        to get a better sense of how these things function. Storybook supports hot reloading 
        so you can quickly experiment in this environment.
      </p>

      <h5>Storybook Addons</h5>
      <p>
        We have installed a few addons within Storybook to assist with your development.
      </p>

      <h4>Elix Web Components</h4>
      <p>
        This project makes use of the <a href="https://component.kitchen/elix" target="blank">
        Elix Web Components</a> framework. Elix is a minimalistic WC framework, capable of 
        being run directly in a modern web browser with no compilation or transpilation 
        necessary.
      </p>
      <p>
        Elix will likely not be a framework you have used before, but it's based in native ES6 
        Javascript. We encourage you to read through their documentation, as well as review 
        the source code available within this project. The SDS components we have built are 
        all using Elix, and can be used to help guide your path forward.
      </p>

      <h5>HTML Escape Hatch</h5>
      <p>
        If Elix proves to be too daunting of a task, you can alternatively compose your stories 
        in HTML directly. The story files we have scaffoled for you already use Elix's built in 
        HTML templating engine, which is simply a Javascript string literal with HTML inside it. 
        Replace that HTML with your own to showcase your work.
      </p>
      <p>
        See <code>src/c360/Card/card.stories.js</code> and 
        <code>src/c360/CardGroup/card-group.stories.js</code> for how you can write your stories 
        with HTML within the Storybook environment.
      </p>

      <h3>Testing & Validating Code</h3>
      <p>
        We have a few methods for teting and validating the code you write. We have eslint and 
        stylelint standards established, those can be run through <code>npm test</code>, and are 
        additionally run in our CI environment when Pull Requests are opened.
      </p>
      <p>
        We also have Axe validation within Storybook, installed as an addon, to assist with 
        Accessibility validation.
      </p>

      <h3>Submitting Your Test</h3>
      <p>
        Once you are feeling confident, push your code to a branch on GitHub and open a PR. 
        Our CI test suite will run, and a review web app will spin up on Heroku. Feel free to 
        make additional pushes to resolve any test failures or make any last minute adjustments.
      </p>
      <p>
        Let your recruiter know you've submitted your test, and our team will be in touch shortly 
        after to follow up with a technical review.
      </p>

      <p>
        <strong>Thank You!</strong><br/>
        And good luck <em>- the Salesforce DSE Team</em>
      </p>
    `
  }
}

export default C360Welcome
