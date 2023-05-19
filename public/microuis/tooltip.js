import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class Tooltip extends LitElement {

    render() {
        return html`
            <div x-data>
                <template x-ref="template">
                    <p>wooqlaw Public Portal</p>
                </template>

                <button x-tooltip="{
                    content: () => $refs.template.innerHTML,
                    allowHTML: true,
                    appendTo: $root,
                    interactive: true
                }">
                    <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 14.792C10.3452 14.792 10.625 14.5122 10.625 14.167V9.16699C10.625 8.82182 10.3452 8.54199 10 8.54199C9.65484 8.54199 9.37502 8.82182 9.37502 9.16699V14.167C9.37502 14.5122 9.65484 14.792 10 14.792Z" fill="#1F2A37" />
                        <path d="M10 5.83366C10.4603 5.83366 10.8334 6.20676 10.8334 6.66699C10.8334 7.12723 10.4603 7.50033 10 7.50033C9.53978 7.50033 9.16669 7.12723 9.16669 6.66699C9.16669 6.20676 9.53978 5.83366 10 5.83366Z" fill="#1F2A37" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.04169 10.0003C1.04169 5.05277 5.05247 1.04199 10 1.04199C14.9476 1.04199 18.9584 5.05277 18.9584 10.0003C18.9584 14.9479 14.9476 18.9587 10 18.9587C5.05247 18.9587 1.04169 14.9479 1.04169 10.0003ZM10 2.29199C5.74283 2.29199 2.29169 5.74313 2.29169 10.0003C2.29169 14.2575 5.74283 17.7087 10 17.7087C14.2572 17.7087 17.7084 14.2575 17.7084 10.0003C17.7084 5.74313 14.2572 2.29199 10 2.29199Z" fill="#1F2A37" />
                    </svg>
                </button>
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('arm-tooltip', Tooltip);