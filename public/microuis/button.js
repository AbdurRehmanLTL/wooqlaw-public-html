import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';


export class Button extends LitElement {
    static get properties() {
        return {
            color: {type: String},
            text: { type: String },
            svg: { type: String },
        };
    }

    constructor() {
        super();
        this.text = "button";
    }

    // returnStringSvg() {
    // 	var frag = document.createRange().createContextualFragment(`${ this.svg }`);
    //   return frag;
    // }
    
    // ${ this.returnStringSvg() }

    

    render() {
        return html`
            <button type="button" class="px-3 py-2 text-sm font-medium text-center ${this.color = "primary" ? 'bg-primary-700' : 'from-gray-100'} rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Small
            </button>

            <button class="icon flex w-fit items-center justify-center gap-2 rounded-full border bg-orange-500 py-1 pr-1 @xl:pr-2 pl-1">
                <span class="flex items-center justify-center circle">
                    <span class="icon">
                        ${unsafeHTML(this.svg)}
                    </span>
                </span>
                <span class="txt text-sm font-normal text-white hidden @xl:block">${this.text}</span>
            </button>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('arm-button', Button);
