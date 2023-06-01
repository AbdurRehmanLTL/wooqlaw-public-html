// LitElement and html are the basic required imports
import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";
import { classMap } from 'https://unpkg.com/lit-html@latest/directives/class-map.js';

class Modal extends LitElement {
    static get properties() {
        return {
            name: {type: String},
            title: {type: String},
            size: {type: String},
        };
    }

    constructor() {
        super()
            .attachShadow({mode:"open"})
            .innerHTML = `<slot ></slot>`;
        this.size = "sm"
    }

    render() {
        const classes = {
            "max-w-sm": this.size == "sm",
            "max-w-md": this.size == "md",
            "max-w-lg": this.size == "lg",
            "max-w-xl": this.size == "xl",
            "max-w-2xl": this.size == "2xl",
        };
        return html` 
            <div x-data="{ open: false }">
                <button x-on:click="open = true" class="...">Open Modal</button>

                
                    <div x-dialog  x-model="open" class="fixed inset-0 overflow-y-auto z-20" 
                        x-on:show-modal.camel.window="($event.detail.name === '${this.name}') ? open = true : null"
                        x-on:hide-modal.camel.window="($event.detail.name === '${this.name}') ? $dialog.close() : null"
                    >
                    <!--  x-on:show-modal.window="open = !open"  -->
                        <div x-dialog:overlay class="fixed inset-0 bg-black bg-opacity-50"></div>
                        <div class="relative min-h-screen flex items-center justify-center p-4">
                            <div x-dialog:panel class="${classMap(classes)} relative mx-auto w-full bg-white rounded-lg shadow">
                                 <!-- Modal header -->
                                <div class="flex items-start justify-between p-4 border-b rounded-t">
                                    <h3 class="text-xl font-semibold text-gray-900">
                                        ${this.title}
                                    </h3>
                                    <button x-on:click="$dialog.close()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <!-- Modal body -->
                                <div class="p-5">
                                    <slot></slot>
                                </div>
                                <!-- Modal footer -->
                                <div class="flex items-center justify-end p-6 border-t border-gray-200 rounded-b gap-x-2">
                                    <button x-on:click="$dialog.close()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Start Messaging</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("arm-modal", Modal);