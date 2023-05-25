import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { classMap } from 'https://unpkg.com/lit-html@latest/directives/class-map.js';

export class Avatar extends LitElement {
    static get properties() {
        return {
            size: {type: String},
            status: { type: Boolean },
            circle: { type: Boolean },
            srcpath: { type: String }
        };
    }

    constructor() {
        super();
        this.size = "sm";
        this.status = false;
        this.circle = false;
        this.srcpath = "";
    }

    render() {
        const classes = {
            "w-7 h-7 text-sm": this.size == "sm",
            "w-8 h-8 text-base": this.size == "base",
            "w-20 h-20 text-lg": this.size == "lg",
            "w-36 h-36 text-xl": this.size == "xl",
            "bg-gray-100": this.srcpath == "",
            "rounded-full": this.circle == true,
        };
        return html`
            <div href="#" class="${classMap(classes)} relative flex items-center justify-center shrink-0">
                ${(!this.srcpath == "") 
                    ? html`
                        <img class="${classMap(classes)} object-cover" src="${this.srcpath}" alt="profile">
                    `
                    : html `
                        <span class="font-medium text-gray-600">AR</span>
                    `
                }
                ${(this.status)
                    ? html`
                        <span class="absolute right-0 flex w-3 h-3 bg-green-600 rounded-full outline outline-white bottom-2"></span>
                    `
                    : ""
                }
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('arm-avatar', Avatar);
