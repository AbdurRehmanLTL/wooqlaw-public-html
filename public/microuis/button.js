import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { unsafeHTML } from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';
import { classMap } from 'https://unpkg.com/lit-html@latest/directives/class-map.js';


export class Button extends LitElement {
    static get properties() {
        return {
            click: {type: String},
            color: {type: String},
            customclass: {type: String},
            textclass: {type: String},
            text: { type: String },
            svgleft: { type: String },

        };
    }

    constructor() {
        super();
        this.color = "gray";
        this.text = "button";
        this.customclass = "flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none";
        
    }

    // returnStringSvgLeft() {
    // 	var frag = document.createRange().createContextualFragment(`${ this.svgleft }`);
    //   return frag;
    // }
    
    // ${ this.returnStringSvgLeft() }

    // <button class="icon flex w-fit items-center justify-center gap-2 rounded-full border bg-orange-500 py-1 pr-1 @xl:pr-2 pl-1">
    //             <span class="flex items-center justify-center circle">
    //                 <span class="icon">
    //                     ${unsafeHTML(this.svgleft)}
    //                 </span>
    //             </span>
    //             <span class="txt text-sm font-normal text-white hidden @xl:block">${this.text}</span>
    //         </button>

    // handleClick(event) {
    //     this.dispatchEvent(new CustomEvent("event-fired", { detail: 1 }));
    //     console.log( event.detail);
    // }

    render() {
        const classes = {
            "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300": this.color == "gray",
            "bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 text-white": this.color == "primary",
            "flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none": this.customclass = !null,
            "w-full block": this.full == true
        };

        return html`
            <button type="button" class="${classMap(classes)}" aria-label="${this.text}">
                ${
                    unsafeHTML(this.svgleft) ?? nothing
                }
                <span class="${this.textclass}">${this.text}</span>
            </button>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('arm-button', Button);
