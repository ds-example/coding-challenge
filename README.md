# Salesforce Design System Engineering Test

Hello, and welcome to our developer test! Thank you for considering the Salesforce Design System team for your next career opportunity.

## The Challenge

You are tasked with building two net new components for our design system.

The primary composition component will be called `CardGroup`, and will consist of the UI you see below:

![Component design image](static/demo/comp-preview.png)

Effectively, it's a (optional) headline element composed with a number of `Card` components, which is the other component you will be building out for this challenge.

A `Card` contains a headline, optional image element, short text description, and a call to action button.

Using this redline spec as a guide, along with the components that exist within the `src/SDS` folder in our design system, you will need to bring these new components to life.

![Screenshot of ](static/demo/comp-redline.png)

Your components will need to adapt successfully to tablet and mobile displays, and will also need to pass AXE Accessibility validation and our test suite.

## Getting Started

To get started, please start by cloning down this repository.

In the root of the project, run `npm install`, and then run `npm run dev` to start up the development environment.

Note that this repo has been made specifically for your project, so you can and should interact directly with it (as opposed to creating a fork). We've set up GitHub Actions CI and Heroku review apps within this repo to assist with your development workflow.

### Development Prerequesites

To work on this project, you should have some basics installed:

- Node v12 (we encourage use of [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions)
- [VS Code](https://code.visualstudio.com/)
  - [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed

## Source Code & Component Structure

In this project, all of the source code is within the `src/` folder. We have our components split up into three projects:

- `SDS/` - Our Base Component Subsystem. You will be using these components as you build out your own components. The SDS Engineering team has already built out these components.
- `c360/` - The C360 Subsystem. This is experience component layer where your work will live. We have scaffoled out the components you will need to build, but the rest is up to you.
- `intro/` - Our Welcome component lives here. You won't need to interact with this directory.

### Component Files

Each component is defined by the following files:

- `{component}.js` The main component JS file, written in the Elix web components framework.

* `{component}.stories.js` The Storybook file for the component, written in [Component Story Format (CSF)](https://storybook.js.org/docs/html/api/csf).
* `{component}.css` The CSS file for the component. Imported by the component JS file and injected into the component's shadow. Feel free to style with whatever means you find comfortable, but do feel encourage to check out source code for other components to get a sense of how we align our selectors. Optionally, you can consider CSS
* `docs.mdx` The MDX-based documentation for the component. Extra credit for your work can be achieved by creating documentation for your component.

## Tech Stack Overview

### Storybook

This project uses Storybook for its development environment. Storybook is a great way of developing UI components in isolation. It provides conventions for writing "stories" for your components, which are really just ways of showcasing specific states and variations that you need your component to support.

Within Storybook, each component gets a `*.stories.js` file that has a series of exports, with each being what we call a story. Stories are named in CapitalCase and should be named descriptively.

For instance, we have a story called `Base` for our default Button component, along with a story called `Brand` to showcase our Brand Button variant.

We'll talk more about stories below in the Component Structure section, and you can always reference the stories files that exist in our pre-built components to get a better sense of how they function. Storybook supports hot reloading so you can quickly experiment in this environment.

#### Storybook Addons

We have installed a few addons within Storybook to assist with your development.

### Elix Web Components

This project makes use of the [Elix Web Components](https://component.kitchen/elix) framework. Elix is a minimalistic WC framework, capable of being run directly in a modern web browser with no compilation or transpilation necessary.

Elix will likely not be a framework you have used before, but it's based in native ES6 Javascript. We encourage you to read through their documentation, as well as review the source code available within this project. The SDS components we have built are all using Elix, and can be used to help guide your path forward.

#### HTML Escape Hatch

If Elix proves to be too daunting of a task, you can alternatively compose your stories in HTML directly. The story files we have scaffoled for you already use Elix's built in HTML templating engine, which is simply a Javascript string literal with HTML inside it. Replace that HTML with your own to showcase your work.

See `src/c360/Card/card.stories.js` and `src/c360/CardGroup/card-group.stories.js` for how you can write your stories with HTML within the Storybook environment.

## Testing & Validating Code

We have a few methods for teting and validating the code you write. We have eslint and stylelint standards established, those can be run through `npm test`, and are additionally run in our CI environment when Pull Requests are opened.

We also have Axe validation within Storybook, installed as an addon, to assist with Accessibility validation.

## Submitting Your Test

Once you are feeling confident, push your code to a branch on GitHub and open a PR. Our CI test suite will run, and a review web app will spin up on Heroku. Feel free to make additional pushes to resolve any test failures or make any last minute adjustments.

Let your recruiter know you've submitted your test, and our team will be in touch shortly after to follow up with a technical review.

# Thank You!

And good luck - the Salesforce DSE Team.
