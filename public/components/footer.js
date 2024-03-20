// LitElement and html are the basic required imports
import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

class Footer extends LitElement {
    render() {
        return html`
            <footer class="w-full py-7 bg-primary-100"><div class="container md:px-4"><div class="flex flex-col-reverse md:flex-row w-full gap-7 items-center justify-between"><div class="flex flex-col-reverse md:flex-row gap-3 md:divide-x md:divide-black"><div class="flex gap-3 text-center md:flex-row justify-center lg:justify-start text-xs lg:text-base font-medium lg:font-normal text-gray-900 items-center">
            <!--!-->
                    <p class="md:pl-3">
                        © 2023 wooqlaw®
                    </p>
                    <p class="">
                    <!--!-->
                        v-2.8.2.0
                        </p>
                        </div>
                        <!--!-->
                <div class="flex gap-3 flex-wrap text-center md:divide-x md:divide-black justify-center lg:justify-start text-xs lg:text-base font-medium lg:font-normal text-gray-900 items-center"><div class="md:pl-3"><a href="en-pk/term-of-clients" target="_blank"><!--!-->
                            Terms of Use
                        </a></div><!--!-->
                    <div class="md:pl-3"><a href="en-pk/cookie-policy" target="_blank"><!--!-->
                            Cookies Policy
                        </a></div><!--!-->
                    <div class="md:pl-3"><a href="en-pk/privacy-policy" target="_blank"><!--!-->
                            Privacy Policy
                        </a></div><!--!-->
                    <div class="md:pl-3"><a href="en-pk/contactus"><!--!-->
                            Help?
                        </a></div><!--!-->
                    <div class="md:pl-3"><a href="en-pk/helpfaq"><!--!-->
                            FAQ
                        </a></div><!--!-->
                    <!--!--><div class="md:pl-3"><a target="_blank" href="https://blog.wooqlaw.com/">
                            Blog
                        </a>
                        </div>
                        </div>
                        </div>
                        <!--!-->
            <!--!-->
            <div class="flex gap-4">
                                    <a href="#" class="w-7 h-7" aria-label="Instagram">
                                        <img class="w-7 h-7" src="./images/footer/instagram.svg" alt="instagram">   
                                    </a>
                                    <a href="#" class="w-7 h-7" aria-label="Linkedin">
                                        <img class="w-7 h-7" src="./images/footer/linkedin.svg" alt="linkedin"> 
                                    </a>
                                    <a href="#" class="w-7 h-7" aria-label="Twitter">
                                        <img class="w-7 h-7" src="./images/footer/twitter.svg" alt="twitter">   
                                    </a>
                                    <a href="#" class="w-7 h-7" aria-label="Facebook">
                                        <img class="w-7 h-7" src="./images/footer/facebook.svg" alt="facebook">
                                    </a>
                                </div>
                                <a href="#" class="w-[118] h-[47]" aria-label="Kartoa Technologies">
                                    <img class="w-[118] h-[47]" src="./images/footer/kartoa-logo.svg" alt="kartoa-logo">
                                </a>
                    </div>
                    </div>
                    </footer>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("arm-footer", Footer);