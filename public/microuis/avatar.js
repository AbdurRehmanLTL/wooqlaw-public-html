import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class Avatar extends LitElement {

    render() {
        return html`
            <a href="#" class="relative flex w-20 h-20 shrink-0">
                <img class="object-cover w-20 h-20 rounded-full" src="https://prodwooqlaw.blob.core.windows.net/uploads/a858a2bd-ba68-4f01-14a5-08daf84f4e5c/128x128/8858132d-7abd-412b-b901-ba967a394f49.jpg" alt="saiqa-haleema">
                <span class="absolute right-0 flex w-3 h-3 bg-green-600 rounded-full outline outline-white bottom-2"></span>
            </a>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('arm-avatar', Avatar);
