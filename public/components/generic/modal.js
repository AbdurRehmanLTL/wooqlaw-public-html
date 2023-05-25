// LitElement and html are the basic required imports
import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class Modal extends LitElement {

    render() {
        return html` 
            <div x-data="{ open: false }">
                <button x-on:click="open = true" class="...">Open Modal</button>
            
                <div x-dialog x-model="open" class="fixed inset-0 overflow-y-auto z-10" 
                    x-on:show-modal.camel.window="($event.detail.name === 'modal-createnew') ? show = true : null"
                    x-on:hide-modal.camel.window="($event.detail.name === 'modal-createnew') ? show = false : null"
                >
                    <div x-dialog:overlay class="fixed inset-0 bg-black bg-opacity-50"></div>
            
                    <div x-dialog:panel class="relative max-w-xl w-full bg-white rounded-xl shadow-lg overflow-y-auto">
                        <h2 x-dialog:title class="...">Some modal</h2>
            
                        <button x-on:click="$dialog.close()" class="...">Close</button>
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