// LitElement and html are the basic required imports
import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class Cta extends LitElement {
    render() {
        return html` 
            <section class="py-6 px-5 bg-violet-700 flex font-medium text-sm lg:text-2xl sm:text-xl">
                <div class="container">
                    <h2 class="text-white text-center flex flex-wrap justify-center gap-1">
                        Are you a lawyer? Register yourself with
                        <b>wooqlaw®</b>, 
                        <a href="#" class="text-amber-200">It’s Free!</a>
                    </h2>
                    
                </div>
            </section>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("arm-cta", Cta);