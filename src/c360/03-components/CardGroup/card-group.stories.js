import { fragmentFrom } from 'elix/src/core/htmlLiterals';
import docs from './docs.mdx';

export default {
  title: 'C360 Components/Card Group',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const RFC = () => {
  return fragmentFrom.html`
    <h1>Card Group</h1>
    <p>
      You need to build this Card Group component from the specs
      outlined in the project's README file. Add one or more
      additional "Stories" (this function is a story) that
      showcase your component, and use Storybook's addons, such as
      the responsive viewport, or the AXE accessibility validator,
      to ensure that your component code is bulletproof.
    </p>
    <p>
      We have scaffolded out two components to assist with your
      development - this one, which is intended to contain the entire
      component structure, as well as a 'Card' component to represent
      an individual card.
    </p>
  `;
};

export const WithTwoItems = () => {
  return fragmentFrom.html`
    <c360-card-group>
      <c360-headline level="h1" size="x-large" slot="header">Want to learn more about Salesforce?</c360-headline>
      <c360-card width="12/12 6/12@small">
        <c360-text level="h2" size="xxlarge" color="brand" weight="bold">Contact us</c360-text>
        <c360-img></c360-img>
        
        <c360-text tag="p">Call us at <a href="tel:1-800-667-6389">1-800-667-6389</a>, click on chat in the lower right, or let us call you back.</c360-text>
        
        <c360-button variant="brand" slot="footer">Request a Call</c360-button>
      </c360-card>

      <c360-card width="12/12 6/12@small">
        <c360-text level="h2" size="xxlarge" color="brand" weight="bold">See it in action</c360-text>
        <c360-img></c360-img>
        
        <c360-text tag="p">Get an overview of what Salesforce can do for your bvusiness in our product demos.</c360-text>
        
        <c360-button variant="brand" slot="footer">Watch demos</c360-button>
      </c360-card>
    </c360-card-group>
  `;
};

export const WithThreeItems = () => {
  return fragmentFrom.html`
    <c360-card-group>
      <c360-headline level="h1" size="x-large" slot="header">Want to learn more about Salesforce?</c360-headline>

      <c360-card width="12/12 6/12@small 4/12@medium">
        <c360-text level="h2" size="xxlarge" color="brand" weight="bold">Contact us</c360-text>
        <c360-img></c360-img>
        <c360-text tag="p">Call us at <a href="tel:1-800-667-6389">1-800-667-6389</a>, click on chat in the lower right, or let us call you back.</c360-text>
        <c360-button variant="brand" slot="footer">Request a Call</c360-button>
      </c360-card>

      <c360-card width="12/12 6/12@small 4/12@medium">
        <c360-text level="h2" size="xxlarge" color="brand" weight="bold">See it in action</c360-text>
        <c360-img></c360-img>
        <c360-text tag="p">Get an overview of what Salesforce can do for your bvusiness in our product demos.</c360-text>
        <c360-button variant="brand" slot="footer">Watch demos</c360-button>
      </c360-card>

       <c360-card width="12/12 6/12@small 4/12@medium">
        <c360-text level="h2" size="xxlarge" color="brand" weight="bold">Get started now</c360-text>
        <c360-img></c360-img>
        <c360-text tag="p">Try Salesforce free for 30 days - no credit card required, no software to install.</c360-text>
        <c360-button variant="brand" slot="footer">Try for free</c360-button>
      </c360-card>
    </c360-card-group>
  `;
};
