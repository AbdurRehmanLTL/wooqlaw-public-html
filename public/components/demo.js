// LitElement and html are the basic required imports
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

// Create a class definition for your component and extend the LitElement base class
class ArmDemo extends LitElement {
  // Properties are defined through a static getter. When defined, LitElement will decode any
  // html attributes set on this component as properties which can be used from javascript.

  // Keys should be the property name, value the property type.
  // The type is used to deserialize html attribute string into a javascript property.
  // The supported types are String, Number, Boolean, Array Object.
  static get properties() {
    return {
      // message: { type: String },
      // count: { type: Number }
    };
  }

  constructor() {
    super();

    // default values can be set from the constructor
    // this.count = 0;
  }


  // The render callback renders your element's template. This should be a pure function,
  // it should always return the same template given the same properties. It should not perform
  // any side effects such as setting properties or manipulating the DOM. See the updated
  // or first-updated examples if you need side effects.
  render() {
    // Return the template using the html template tag. lit-html will parse the template and
    // create the DOM elements
    return html` 
        <div>
            <h2 calss="text-sm font-bold">Demo add your  in </h2>
            <code>
            return html
            </code>
        </div>
    `;
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
      return this;
    }
}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define("arm-demo", ArmDemo);