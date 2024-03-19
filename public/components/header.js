// LitElement and html are the basic required imports
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class Header extends LitElement {
    render() {
        return html` 
            <div class="container top-0 z-20 px-0 md:px-4" :class="scrolAtTop ? 'sticky': 'relative'" @scroll.window="scrolAtTop = (window.pageYOffset > 80) ? true : false">
                <header class="w-full mx-auto mb-5 max-w-7xl" >
                    <div class="w-full mx-auto bg-white bg-opacity-75 shadow absolute1 rounded-b-2xl max-w-7xl backdrop-blur-md">
                        <div x-data="{ open: false }" class="flex flex-col px-4 md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                            <div class="flex flex-row items-center justify-between py-2 md:py-4">
                                <a href="/public" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline" aria-label="wooqlaw logo">
                                    <img class="w-24 md:w-40 md:h-12" src="./images/header/wooqlaw-logo.svg" alt="wooqlaw-logo">
                                </a>
                                <div class="flex items-center gap-2">
                                    <a :class="{'hidden':open}" class="md:hidden items-center px-1 py-2 text-xs font-medium rounded-lg bg-primary-100 text-violet-700 hover:text-violet-800" href="./listing.html">
                                        Find a Lawyer
                                    </a>
                                    <button type="button" class="border-0 rounded bg-transparent md:hidden" x-on:click="filter = ! filter" aria-label="Filter">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="4" fill="#EDE9FE"></rect><path d="M18.9391 8C19.5922 8 20.125 8.53152 20.125 9.18723C20.125 9.47469 20.0219 9.75313 19.8328 9.96797L15.3125 15.1328V23.4516C15.3125 24.0316 14.8441 24.5 14.2641 24.5C14.0363 24.5 13.8172 24.427 13.6324 24.2895L10.3582 21.8188C10.0145 21.5566 9.8125 21.1527 9.8125 20.7188V15.1328L5.29373 9.96797C5.10437 9.75313 5 9.47469 5 9.18723C5 8.53152 5.53152 8 6.18723 8H18.9391ZM11.1875 14.875V20.7188L13.9375 22.7941V14.8363C13.9375 14.7074 13.9977 14.5484 14.0707 14.4238L18.5223 9.33633H6.60102L11.0156 14.4238C11.1273 14.5484 11.1488 14.7074 11.1488 14.8363L11.1875 14.875ZM26.3125 22.4375C26.6906 22.4375 27 22.7469 27 23.125C27 23.5031 26.6906 23.8125 26.3125 23.8125H19.4375C19.0594 23.8125 18.75 23.5031 18.75 23.125C18.75 22.7469 19.0594 22.4375 19.4375 22.4375H26.3125ZM18.75 16.25C18.75 15.8719 19.0594 15.5625 19.4375 15.5625H26.3125C26.6906 15.5625 27 15.8719 27 16.25C27 16.6281 26.6906 16.9375 26.3125 16.9375H19.4375C19.0594 16.9375 18.75 16.6281 18.75 16.25ZM26.3125 8.6875C26.6906 8.6875 27 8.99516 27 9.375C27 9.75313 26.6906 10.0625 26.3125 10.0625H22.1875C21.8094 10.0625 21.5 9.75313 21.5 9.375C21.5 8.99516 21.8094 8.6875 22.1875 8.6875H26.3125Z" fill="#6D28D9"></path></svg>
                                    </button>
                                    <button x-on:click="open = !open" class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" aria-label="Menu">
                                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"> <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path> <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg>
                                    </button>
                                </div>
                            </div>
                            <nav :class="open ? 'flex h-[calc(100vh-3rem)] md:h-auto pt-5 md:pt-0 gap-y-8 md-gap-y-0' : 'hidden'" class="flex-col flex grow pb-4 divide-x md:items-center md:pb-0 md:flex md:justify-end md:flex-row">
                                <div class="pr-3">
                                    <a x-on:click="open = !open" class="items-center px-2.5 py-1 text-sm font-medium rounded-lg bg-primary-100 text-violet-700 md:text-base hover:text-violet-800" href="./listing.html">Find a Lawyer</a>
                                </div>
                                <div x-on:click.away="open = false" class="relative px-2" x-data="{ open: false }">
                                    <button x-on:click="open = !open" class="flex flex-row items-center w-full font-medium text-gray-600 w-text-sm md:text-base md:w-auto hover:text-violet-700"><span>Sign in</span>
                                        <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-0"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg>
                                    </button>
                                    <div x-show="open" x-transition:enter="transition ease-out duration-100"
                                        x-transition:enter-start="transform opacity-0 scale-95"
                                        x-transition:enter-end="transform opacity-100 scale-100"
                                        x-transition:leave="transition ease-in duration-75"
                                        x-transition:leave-start="transform opacity-100 scale-100"
                                        x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 z-10 w-full mt-1 origin-top-right rounded-md shadow-lg md:w-48"
                                        style="display: none;">
                                        <div class="px-2 py-2 bg-white rounded-md shadow">
                                            <a class="block px-2 py-1 text-sm font-medium text-gray-600 hover:text-violet-700"  href="/Identity/Account/LoginClient">Sign in as Client</a>
                                            <a class="block px-2 py-1 text-sm font-medium text-gray-600 hover:text-violet-700" href="https://pk.wooqlaw.net/Identity/LoginLawyer">Sign in as Lawyer </a>
                                        </div>
                                    </div>
                                </div>
                                <div x-on:click.away="open = false" class="relative px-2" x-data="{ open: false }">
                                    <button x-on:click="open = !open" class="flex flex-row items-center w-full font-medium text-gray-600 w-text-sm md:text-base md:w-auto hover:text-violet-700"><span>Register</span>
                                        <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-0"> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg>
                                    </button>
                                    <div x-show="open" x-transition:enter="transition ease-out duration-100"
                                        x-transition:enter-start="transform opacity-0 scale-95"
                                        x-transition:enter-end="transform opacity-100 scale-100"
                                        x-transition:leave="transition ease-in duration-75"
                                        x-transition:leave-start="transform opacity-100 scale-100"
                                        x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 z-10 w-full mt-1 origin-top-right rounded-md shadow-lg md:w-48"
                                        style="display: none;">
                                        <div class="px-2 py-2 bg-white rounded-md shadow"><a class="block px-2 py-1 text-sm font-medium text-gray-600 hover:text-violet-700"
                                                href="/Identity/Account/RegisterClient">Register as Client</a>
                                            <a class="block px-2 py-1 text-sm font-medium text-gray-600 hover:text-violet-700"
                                                href="https://pk.wooqlaw.net/Identity/Account/Registration/Step1">Register as
                                                Lawyer
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3 pl-3">
                                    <a aria-label="Notification" class="flex items-center justify-center gap-1 bg-gray-200 rounded-full w-7 h-7 hover:bg-gray-300" href="/cart">
                                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.49936 0.5C5.98575 0.5 5.5708 0.918945 5.5708 1.4375V2C3.45252 2.43359 1.85656 4.32617 1.85656 6.59375V7.14453C1.85656 8.52148 1.35456 9.85156 0.449215 10.8828L0.234486 11.126C-0.00926068 11.4014 -0.0672957 11.7969 0.0806935 12.1338C0.228683 12.4707 0.562384 12.6875 0.928004 12.6875H12.0707C12.4363 12.6875 12.7671 12.4707 12.918 12.1338C13.0689 11.7969 13.008 11.4014 12.7642 11.126L12.5495 10.8828C11.6442 9.85156 11.1422 8.52441 11.1422 7.14453V6.59375C11.1422 4.32617 9.5462 2.43359 7.42792 2V1.4375C7.42792 0.918945 7.01297 0.5 6.49936 0.5ZM7.81385 14.9521C8.16206 14.6006 8.35648 14.123 8.35648 13.625H6.49936H4.64224C4.64224 14.123 4.83666 14.6006 5.18487 14.9521C5.53308 15.3037 6.00606 15.5 6.49936 15.5C6.99266 15.5 7.46564 15.3037 7.81385 14.9521Z" fill="#6B7280"/>
                                    </svg>
                                    </a>
                                    <a aria-label="Cart" class="flex items-center justify-center gap-1 bg-gray-200 rounded-full w-7 h-7 hover:bg-gray-300" href="/cart">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.15625C0 0.792578 0.281029 0.5 0.630345 0.5H1.82538C2.40319 0.5 2.91535 0.85 3.15435 1.375H13.949C14.6398 1.375 15.144 2.05859 14.9628 2.75312L13.886 6.91758C13.6627 7.77617 12.9142 8.375 12.0606 8.375H4.48333L4.62516 9.1543C4.68294 9.46328 4.94296 9.6875 5.245 9.6875H12.817C13.1663 9.6875 13.4474 9.98008 13.4474 10.3438C13.4474 10.7074 13.1663 11 12.817 11H5.245C4.33625 11 3.5562 10.3273 3.38811 9.40039L2.03286 1.99023C2.01448 1.88633 1.92781 1.8125 1.82538 1.8125H0.630345C0.281029 1.8125 0 1.51992 0 1.15625ZM3.36184 13.1875C3.36184 13.0151 3.39445 12.8445 3.45781 12.6852C3.52116 12.526 3.61402 12.3813 3.73109 12.2594C3.84816 12.1375 3.98713 12.0409 4.14009 11.9749C4.29304 11.9089 4.45698 11.875 4.62253 11.875C4.78809 11.875 4.95202 11.9089 5.10498 11.9749C5.25793 12.0409 5.39691 12.1375 5.51398 12.2594C5.63104 12.3813 5.7239 12.526 5.78726 12.6852C5.85061 12.8445 5.88322 13.0151 5.88322 13.1875C5.88322 13.3599 5.85061 13.5305 5.78726 13.6898C5.7239 13.849 5.63104 13.9937 5.51398 14.1156C5.39691 14.2375 5.25793 14.3341 5.10498 14.4001C4.95202 14.4661 4.78809 14.5 4.62253 14.5C4.45698 14.5 4.29304 14.4661 4.14009 14.4001C3.98713 14.3341 3.84816 14.2375 3.73109 14.1156C3.61402 13.9937 3.52116 13.849 3.45781 13.6898C3.39445 13.5305 3.36184 13.3599 3.36184 13.1875ZM12.1867 11.875C12.521 11.875 12.8417 12.0133 13.0781 12.2594C13.3145 12.5056 13.4474 12.8394 13.4474 13.1875C13.4474 13.5356 13.3145 13.8694 13.0781 14.1156C12.8417 14.3617 12.521 14.5 12.1867 14.5C11.8523 14.5 11.5317 14.3617 11.2952 14.1156C11.0588 13.8694 10.926 13.5356 10.926 13.1875C10.926 12.8394 11.0588 12.5056 11.2952 12.2594C11.5317 12.0133 11.8523 11.875 12.1867 11.875Z" fill="#6B7280"/>
                                    </svg>                              
                                    </a>
                                    <div class="px-2">
                                        <img src="https://prodwooqlaw.blob.core.windows.net/uploads/PK.svg" alt="country" width="22" height="22">
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("arm-header", Header);