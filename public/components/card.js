// LitElement and html are the basic required imports
import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

import '../microuis/avatar.js';
import '../microuis/button.js';
import '../microuis/rating.js';
import '../components/generic/modal.js';
import '../components/generic/dialog.js';

class Card extends LitElement {
    static get properties() {
        return {
            featured: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.featured = false;
    }

    render() {
        return html` 
            <div class="@container relative flex w-full flex-col flex-wrap items-start gap-4 md:gap-8 rounded-2xl border bg-white p-2 @xl:p-4 shadow mb-3">
               <div class="group flex flex-col w-full @xl:flex-row @xl:items-center justify-between gap-2 rounded-xl bg-gradient-to-b  ${this.featured ? 'from-yellow-100' : 'from-gray-100'}  p-2">
                  <div class="flex items-center gap-3">
                    <arm-avatar size="lg" circle="true" status="true" srcpath="https://prodwooqlaw.blob.core.windows.net/uploads/a858a2bd-ba68-4f01-14a5-08daf84f4e5c/128x128/8858132d-7abd-412b-b901-ba967a394f49.jpg"></arm-avatar>
                     <div content="flex flex-wrap">
                        <a href="/profile?id=a858a2bd-ba68-4f01-14a5-08daf84f4e5c&tab=overview" class="txt flex text-sm @xl:text-base font-medium text-black">Tanveer Iqbal Khan</a>
                        <span class="mb-1 text-sm font-normal txt">
                           <h3 class="text-sm font-normal">Advocate Supreme Court of Pakistan</h3>
                        </span>
                        <span class="icon">
                           <svg width="86" height="34" viewBox="0 0 86 34" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_dd_6474_99114)">
                                 <rect x="17.7871" y="4.44922" width="65.4207" height="17.1029" rx="8.55143"
                                    fill="#A855F7"></rect>
                                 <rect x="17.7871" y="4.44922" width="65.4207" height="17.1029" rx="8.55143"
                                    fill="url(#paint0_linear_6474_99114)"></rect>
                                 <path
                                    d="M37.6022 12.12C37.6022 12.4733 37.5189 12.8067 37.3522 13.12C37.1855 13.4333 36.9189 13.69 36.5522 13.89C36.1855 14.0833 35.7155 14.18 35.1422 14.18H33.8822V17H32.7422V10.05H35.1422C35.6755 10.05 36.1255 10.1433 36.4922 10.33C36.8655 10.51 37.1422 10.7567 37.3222 11.07C37.5089 11.3833 37.6022 11.7333 37.6022 12.12ZM35.1422 13.25C35.5755 13.25 35.8989 13.1533 36.1122 12.96C36.3255 12.76 36.4322 12.48 36.4322 12.12C36.4322 11.36 36.0022 10.98 35.1422 10.98H33.8822V13.25H35.1422ZM39.6795 12.29C39.8461 12.01 40.0661 11.7933 40.3395 11.64C40.6195 11.48 40.9495 11.4 41.3295 11.4V12.58H41.0395C40.5928 12.58 40.2528 12.6933 40.0195 12.92C39.7928 13.1467 39.6795 13.54 39.6795 14.1V17H38.5395V11.49H39.6795V12.29ZM47.2773 14.11C47.2773 14.3167 47.264 14.5033 47.2373 14.67H43.0273C43.0607 15.11 43.224 15.4633 43.5173 15.73C43.8107 15.9967 44.1707 16.13 44.5973 16.13C45.2107 16.13 45.644 15.8733 45.8973 15.36H47.1273C46.9607 15.8667 46.6573 16.2833 46.2173 16.61C45.784 16.93 45.244 17.09 44.5973 17.09C44.0707 17.09 43.5973 16.9733 43.1773 16.74C42.764 16.5 42.4373 16.1667 42.1973 15.74C41.964 15.3067 41.8473 14.8067 41.8473 14.24C41.8473 13.6733 41.9607 13.1767 42.1873 12.75C42.4207 12.3167 42.744 11.9833 43.1573 11.75C43.5773 11.5167 44.0573 11.4 44.5973 11.4C45.1173 11.4 45.5807 11.5133 45.9873 11.74C46.394 11.9667 46.7107 12.2867 46.9373 12.7C47.164 13.1067 47.2773 13.5767 47.2773 14.11ZM46.0873 13.75C46.0807 13.33 45.9307 12.9933 45.6373 12.74C45.344 12.4867 44.9807 12.36 44.5473 12.36C44.154 12.36 43.8173 12.4867 43.5373 12.74C43.2573 12.9867 43.0907 13.3233 43.0373 13.75H46.0873ZM54.9192 11.4C55.3526 11.4 55.7392 11.49 56.0792 11.67C56.4259 11.85 56.6959 12.1167 56.8892 12.47C57.0892 12.8233 57.1892 13.25 57.1892 13.75V17H56.0592V13.92C56.0592 13.4267 55.9359 13.05 55.6892 12.79C55.4426 12.5233 55.1059 12.39 54.6792 12.39C54.2526 12.39 53.9126 12.5233 53.6592 12.79C53.4126 13.05 53.2892 13.4267 53.2892 13.92V17H52.1592V13.92C52.1592 13.4267 52.0359 13.05 51.7892 12.79C51.5426 12.5233 51.2059 12.39 50.7792 12.39C50.3526 12.39 50.0126 12.5233 49.7592 12.79C49.5126 13.05 49.3892 13.4267 49.3892 13.92V17H48.2492V11.49H49.3892V12.12C49.5759 11.8933 49.8126 11.7167 50.0992 11.59C50.3859 11.4633 50.6926 11.4 51.0192 11.4C51.4592 11.4 51.8526 11.4933 52.1992 11.68C52.5459 11.8667 52.8126 12.1367 52.9992 12.49C53.1659 12.1567 53.4259 11.8933 53.7792 11.7C54.1326 11.5 54.5126 11.4 54.9192 11.4ZM59.0698 10.76C58.8632 10.76 58.6898 10.69 58.5498 10.55C58.4098 10.41 58.3398 10.2367 58.3398 10.03C58.3398 9.82333 58.4098 9.65 58.5498 9.51C58.6898 9.37 58.8632 9.3 59.0698 9.3C59.2698 9.3 59.4398 9.37 59.5798 9.51C59.7198 9.65 59.7898 9.82333 59.7898 10.03C59.7898 10.2367 59.7198 10.41 59.5798 10.55C59.4398 10.69 59.2698 10.76 59.0698 10.76ZM59.6298 11.49V17H58.4898V11.49H59.6298ZM65.9666 11.49V17H64.8266V16.35C64.6466 16.5767 64.4099 16.7567 64.1166 16.89C63.8299 17.0167 63.5232 17.08 63.1966 17.08C62.7632 17.08 62.3732 16.99 62.0266 16.81C61.6866 16.63 61.4166 16.3633 61.2166 16.01C61.0232 15.6567 60.9266 15.23 60.9266 14.73V11.49H62.0566V14.56C62.0566 15.0533 62.1799 15.4333 62.4266 15.7C62.6732 15.96 63.0099 16.09 63.4366 16.09C63.8632 16.09 64.1999 15.96 64.4466 15.7C64.6999 15.4333 64.8266 15.0533 64.8266 14.56V11.49H65.9666ZM73.9907 11.4C74.424 11.4 74.8107 11.49 75.1507 11.67C75.4974 11.85 75.7674 12.1167 75.9607 12.47C76.1607 12.8233 76.2607 13.25 76.2607 13.75V17H75.1307V13.92C75.1307 13.4267 75.0074 13.05 74.7607 12.79C74.514 12.5233 74.1774 12.39 73.7507 12.39C73.324 12.39 72.984 12.5233 72.7307 12.79C72.484 13.05 72.3607 13.4267 72.3607 13.92V17H71.2307V13.92C71.2307 13.4267 71.1074 13.05 70.8607 12.79C70.614 12.5233 70.2774 12.39 69.8507 12.39C69.424 12.39 69.084 12.5233 68.8307 12.79C68.584 13.05 68.4607 13.4267 68.4607 13.92V17H67.3207V11.49H68.4607V12.12C68.6474 11.8933 68.884 11.7167 69.1707 11.59C69.4574 11.4633 69.764 11.4 70.0907 11.4C70.5307 11.4 70.924 11.4933 71.2707 11.68C71.6174 11.8667 71.884 12.1367 72.0707 12.49C72.2374 12.1567 72.4974 11.8933 72.8507 11.7C73.204 11.5 73.584 11.4 73.9907 11.4Z"
                                    fill="#78350F"></path>
                              </g>
                              <circle cx="16.665" cy="13.001" r="12.665" fill="#A855F7"></circle>
                              <circle cx="16.665" cy="13.001" r="12.665" fill="url(#paint1_linear_6474_99114)">
                              </circle>
                              <g filter="url(#filter1_dd_6474_99114)">
                                 <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.056 5.63801C17.4487 4.52431 15.8495 4.52431 15.2422 5.63801L13.8159 8.25329C13.5854 8.67593 13.1771 8.97257 12.7039 9.06118L9.77587 9.6095C8.52899 9.84299 8.03483 11.3639 8.90633 12.2857L9.87261 13.3077C11.527 12.1491 16.0604 10.1452 21.1294 11.2973C20.9549 11.3234 20.7704 11.3496 20.5774 11.377C17.6465 11.7929 12.7529 12.4873 11.127 17.6887L10.9943 18.7117C10.831 19.9697 12.1248 20.9096 13.2707 20.3656L15.9619 19.0882C16.3968 18.8817 16.9014 18.8817 17.3363 19.0882L20.0275 20.3656C21.1734 20.9096 22.4672 19.9697 22.3039 18.7117L21.9206 15.7575C21.8587 15.2801 22.0146 14.8001 22.3453 14.4503L24.3919 12.2857C25.2634 11.3639 24.7692 9.84299 23.5223 9.6095L20.5943 9.06118C20.1211 8.97257 19.7128 8.67593 19.4823 8.25329L18.056 5.63801Z"
                                    fill="white"></path>
                              </g>
                              <defs>
                                 <filter id="filter0_dd_6474_99114" x="15.1075" y="2.66283" width="70.7791"
                                    height="22.4627" filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                    </feColorMatrix>
                                    <feOffset dy="0.893192"></feOffset>
                                    <feGaussianBlur stdDeviation="1.33979"></feGaussianBlur>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
                                    </feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                       result="effect1_dropShadow_6474_99114"></feBlend>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                    </feColorMatrix>
                                    <feOffset dy="0.893192"></feOffset>
                                    <feGaussianBlur stdDeviation="0.893192"></feGaussianBlur>
                                    <feColorMatrix type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="effect1_dropShadow_6474_99114"
                                       result="effect2_dropShadow_6474_99114"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6474_99114"
                                       result="shape"></feBlend>
                                 </filter>
                                 <filter id="filter1_dd_6474_99114" x="0.867774" y="2.26973" width="31.5633"
                                    height="30.9188" filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                    </feColorMatrix>
                                    <feOffset dy="5.06602"></feOffset>
                                    <feGaussianBlur stdDeviation="3.79951"></feGaussianBlur>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0">
                                    </feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                       result="effect1_dropShadow_6474_99114"></feBlend>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                    </feColorMatrix>
                                    <feOffset dy="2.53301"></feOffset>
                                    <feGaussianBlur stdDeviation="2.53301"></feGaussianBlur>
                                    <feColorMatrix type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="effect1_dropShadow_6474_99114"
                                       result="effect2_dropShadow_6474_99114"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_6474_99114"
                                       result="shape"></feBlend>
                                 </filter>
                                 <linearGradient id="paint0_linear_6474_99114" x1="50.4975" y1="4.44922" x2="50.4975"
                                    y2="21.5521" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFBD4D"></stop>
                                    <stop offset="1" stop-color="#DE9213"></stop>
                                 </linearGradient>
                                 <linearGradient id="paint1_linear_6474_99114" x1="16.665" y1="0.335937" x2="16.665"
                                    y2="25.666" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFBD4D"></stop>
                                    <stop offset="1" stop-color="#DE9213"></stop>
                                 </linearGradient>
                              </defs>
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div class="flex flex-row justify-between @xl:flex-col items-center @xl:items-start gap-2">
                     <arm-rating size="sm"></arm-rating>
                     <!-- $dispatch('show-modal') -->
                     <!-- <arm-button x-data="modal" x-on:click="showModal('modal-createnew')" color="primary" textclass="font-normal text-sm text-white hidden @xl:block" customclass="icon flex w-fit items-center justify-center gap-2 rounded-full border bg-orange-500 hover:bg-orange-600 py-1 pr-1 @xl:pr-2 pl-1" text="Play Intro" svgleft='<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26C6.04462 26 0 20.1793 0 13C0 5.82075 6.04462 0 13.5 0C20.9554 0 27 5.82075 27 13C27 20.1793 20.9554 26 13.5 26ZM10.125 6.50975V19.4902L20.25 13L10.125 6.50975Z" fill="white"></path></svg>'> 
                     </arm-button>  -->
                     <arm-button x-data="modal" x-on:click="showModal('modal-createnew')" color="primary" textclass="font-normal text-sm text-white hidden @xl:block" customclass="icon flex w-fit items-center justify-center gap-2 rounded-full border bg-orange-500 hover:bg-orange-600 py-1 pr-1 @xl:pr-2 pl-1" text="Play Intro" svgleft='<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 26C6.04462 26 0 20.1793 0 13C0 5.82075 6.04462 0 13.5 0C20.9554 0 27 5.82075 27 13C27 20.1793 20.9554 26 13.5 26ZM10.125 6.50975V19.4902L20.25 13L10.125 6.50975Z" fill="white"></path></svg>'> 
                     </arm-button> 
                  </div>
               </div>
               <div class="w-full group">
                  <div class="flex items-center gap-2 mb-2">
                     <span class="flex items-center justify-center bg-gray-100 rounded icon h-7 w-7 shrink-0">
                        <svg
                           width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M14.7778 2.48786L8.0731 0.0877511C7.92843 0.0291713 7.76005 0 7.58929 0C7.41853 0 7.25014 0.0291713 7.0865 0.0872768L0.38065 2.48786C0.152687 2.57087 0 2.78906 0 3.03571C0 3.28237 0.152687 3.50174 0.38065 3.58333L1.80412 4.09347C1.52213 4.46819 1.32362 4.90363 1.22188 5.37298C0.949847 5.488 0.758929 5.75837 0.758929 6.07143C0.758929 6.30748 0.8731 6.50995 1.0421 6.64916L0.453223 10.1829C0.414565 10.4139 0.592913 10.625 0.827469 10.625H2.20825C2.44273 10.625 2.62115 10.4144 2.58249 10.1832L1.99361 6.6494C2.16271 6.51018 2.27679 6.28725 2.27679 6.07143C2.27679 5.82739 2.15408 5.6201 1.97511 5.48112C2.07595 5.05992 2.28058 4.67903 2.5666 4.36574L7.08697 5.98391C7.25014 6.04297 7.41853 6.07143 7.58929 6.07143C7.76005 6.07143 7.92962 6.04228 8.09231 5.98406L14.797 3.58395C15.0268 3.50056 15.1786 3.28237 15.1786 3.03571C15.1786 2.78906 15.0268 2.57087 14.7778 2.48786ZM7.71024 4.91169C7.60522 4.94926 7.51584 4.92786 7.47094 4.91183L4.16225 3.72824L7.70075 2.63917C7.90123 2.57765 8.01286 2.36525 7.95144 2.16437C7.88992 1.96425 7.67704 1.84965 7.47687 1.91416L2.96931 3.30134L2.2284 3.03571L7.44841 1.15926C7.55343 1.1217 7.64281 1.14305 7.68771 1.15912L12.9492 3.03571L7.71024 4.91169ZM10.727 5.84612L11.0045 8.50712C11.0045 8.75851 9.8305 9.48661 7.58929 9.48661C5.34807 9.48661 4.17411 8.75804 4.17411 8.50617L4.45206 5.84754L3.35921 5.45622L3.0388 8.44688C3.03571 9.8969 5.32673 10.625 7.58929 10.625C9.85184 10.625 12.1429 9.89714 12.1405 8.44759L11.8201 5.45693L10.727 5.84612Z"
                              fill="#71717A"></path>
                        </svg>
                     </span>
                     <span class="txt text-text-xs @xl:text-text-sm truncate grow">BA LLB | 30 years experience </span>
                  </div>
                  <div class="flex items-center gap-2 mb-2">
                     <span class="flex items-center justify-center bg-gray-100 rounded icon h-7 w-7 shrink-0">
                        <svg
                           width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7.03113 4.83907C7.03113 5.95306 6.10571 6.85535 4.96315 6.85535C3.82059 6.85535 2.89517 5.95306 2.89517 4.83907C2.89517 3.72508 3.82059 2.82279 4.96315 2.82279C6.10571 2.82279 7.03113 3.72508 7.03113 4.83907ZM4.96315 4.03256C4.50561 4.03256 4.13596 4.39297 4.13596 4.83907C4.13596 5.28517 4.50561 5.64558 4.96315 5.64558C5.42069 5.64558 5.79034 5.28517 5.79034 4.83907C5.79034 4.39297 5.42069 4.03256 4.96315 4.03256ZM9.9263 4.83907C9.9263 7.04186 6.90188 10.9635 5.57579 12.5816C5.25784 12.9672 4.66846 12.9672 4.35051 12.5816C3.00115 10.9635 0 7.04186 0 4.83907C0 2.16649 2.22204 0 4.96315 0C7.70322 0 9.9263 2.16649 9.9263 4.83907ZM4.96315 1.20977C2.9081 1.20977 1.24079 2.83539 1.24079 4.83907C1.24079 5.15159 1.35685 5.6355 1.63629 6.28071C1.90719 6.90576 2.29184 7.59633 2.7349 8.29447C3.46903 9.45887 4.32208 10.5628 4.96315 11.3844C5.60422 10.5628 6.45726 9.45887 7.1914 8.29447C7.63343 7.59633 8.01859 6.90576 8.29001 6.28071C8.56919 5.6355 8.68551 5.15159 8.68551 4.83907C8.68551 2.83539 7.0182 1.20977 4.96315 1.20977Z"
                              fill="#71717A"></path>
                        </svg>
                     </span>
                     <span class="txt text-text-xs @xl:text-text-sm truncate grow">Rawalpindi office, Rawalpindi</span>
                  </div>
                  <div class="flex items-center gap-2">
                     <span class="flex items-center justify-center bg-gray-100 rounded icon h-7 w-7 shrink-0">
                        <svg
                           width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M6.00075 8.05492C6.00075 7.66847 6.03298 7.84516 4.00551 3.70382C3.79971 3.2819 3.39888 3.06854 3.0004 3.06854C2.60191 3.06854 2.20062 3.2819 1.99247 3.70382C-0.0467877 7.88231 9.05703e-05 7.68094 9.05703e-05 8.05492C9.05703e-05 9.11285 1.34204 9.97276 2.97935 9.97276C4.61665 9.97276 6.00075 9.11213 6.00075 8.05492ZM2.99805 4.21924L4.69044 7.67135H1.31176L2.99805 4.21924ZM12.1679 11.1235H8.06349V3.73739C8.70575 3.52882 9.20268 2.98703 9.33864 2.30141H12.189C12.4996 2.30141 12.7304 2.0437 12.7304 1.74763C12.7304 1.40841 12.5007 1.1507 12.1679 1.1507H9.198C8.92843 0.473466 8.26742 0 7.50092 0C6.73443 0 6.07341 0.473466 5.7851 1.1507H2.81288C2.50229 1.1507 2.27141 1.40841 2.27141 1.70448C2.27141 2.00054 2.50112 2.30141 2.81288 2.30141H5.66321C5.79799 2.98751 6.29609 3.53002 6.93789 3.73691V11.1235H2.81288C2.50229 11.1235 2.27141 11.3812 2.27141 11.6772C2.27141 11.9733 2.50112 12.2742 2.81288 12.2742H12.1679C12.4785 12.2742 12.7093 12.0165 12.7093 11.7204C12.7304 11.38 12.5007 11.1235 12.1679 11.1235ZM7.50092 2.68497C7.08791 2.68497 6.77193 2.34024 6.77193 1.91784C6.77193 1.49543 7.10877 1.1507 7.50092 1.1507C7.89308 1.1507 8.22991 1.49543 8.22991 1.91784C8.22991 2.34024 7.91347 2.68497 7.50092 2.68497ZM14.9807 8.05492C14.9807 7.66847 15.0129 7.84516 12.9855 3.70382C12.8008 3.2819 12.3788 3.06854 11.9804 3.06854C11.5819 3.06854 11.1803 3.2813 10.9724 3.70382C8.95422 7.88231 9.0011 7.68094 9.0011 8.05492C9.0011 9.11285 10.3431 9.97276 12.0014 9.97276C13.6598 9.97276 14.9807 9.11213 14.9807 8.05492ZM10.2927 7.67135C10.2927 7.67135 11.5458 5.11823 11.9794 4.21924L13.6711 7.67135H10.2927Z"
                              fill="#71717A"></path>
                        </svg>
                     </span>
                     <span class="txt text-text-xs @xl:text-text-sm truncate grow">Criminal Law | Civil Law |
                     Constitutional Law</span>
                  </div>
               </div>
               <div class="group flex-wrap flex @sm:flex-nowrap gap-2 w-full">
                  <a
                     href="/profile?id=a858a2bd-ba68-4f01-14a5-08daf84f4e5c&amp;tab=appointments&amp;slot=99894" class="flex w-full @xl:w-60 items-center justify-between gap-2 rounded-md bg-violet-50 hover:bg-violet-200 p-2">
                     <span class="txt flex text-left flex-col text-2xs @xl:text-xs font-normal">
                     Available Today
                     <span class="txt text-xs @xl:text-sm font-medium text-violet-700">Mon 15 May 23, 11:00
                     AM</span></span>
                     <span class="flex items-center justify-center w-8 h-8 rounded icon bg-violet-100">
                        <svg width="16"
                           height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7.42857 10.0003C7.74286 10.0003 8 10.2574 8 10.5717V14.0003C8 14.3146 7.74286 14.5717 7.42857 14.5717H4C3.68571 14.5717 3.42857 14.3146 3.42857 14.0003V10.5717C3.42857 10.2574 3.68571 10.0003 4 10.0003H7.42857ZM4.57143 0.857422C5.04643 0.857422 5.42857 1.24135 5.42857 1.71456V3.14314H10.5714V1.71456C10.5714 1.24135 10.9536 0.857422 11.4286 0.857422C11.9036 0.857422 12.2857 1.24135 12.2857 1.71456V3.14314H13.7143C14.975 3.14314 16 4.16635 16 5.42885V16.8574C16 18.1181 14.975 19.1431 13.7143 19.1431H2.28571C1.02321 19.1431 0 18.1181 0 16.8574V5.42885C0 4.16635 1.02321 3.14314 2.28571 3.14314H3.71429V1.71456C3.71429 1.24135 4.09643 0.857422 4.57143 0.857422ZM14.2857 7.71457H1.71429V16.8574C1.71429 17.1717 1.97 17.4289 2.28571 17.4289H13.7143C14.0286 17.4289 14.2857 17.1717 14.2857 16.8574V7.71457Z"
                              fill="#6D28D9"></path>
                        </svg>
                     </span>
                  </a>
                  <button class="flex w-full @xl:w-60 items-center justify-between gap-2 rounded-md bg-emerald-50 hover:bg-emerald-200 p-2">
                     <span class="flex flex-col text-xs font-normal text-left txt">
                     Not Available Now
                     <span class="text-sm font-medium txt text-emerald-700"> Send Message </span></span>
                     <span class="flex items-center justify-center w-8 h-8 rounded icon bg-emerald-100">
                        <svg width="23"
                           height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7.54331 0.666016C11.5258 0.666016 14.7526 3.34847 14.7526 6.65728C14.7526 9.96609 11.5258 12.6485 7.54331 12.6485C6.89516 12.6485 6.26781 12.5702 5.66819 12.4375C4.60759 13.0843 3.07665 13.7379 1.19876 13.7379C0.852848 13.7379 0.539519 13.537 0.403929 13.2238C0.268269 12.9107 0.333728 12.5498 0.567559 12.3047C0.585617 12.2911 1.3523 11.4707 1.919 10.3984C0.929447 9.37377 0.333984 8.0734 0.333984 6.65728C0.333984 3.34847 3.56189 0.666016 7.54331 0.666016ZM6.03905 10.8137C6.54509 10.9567 7.05113 11.0146 7.54331 11.0146C10.6003 11.0146 13.0889 9.06059 13.0889 6.65728C13.0889 4.25397 10.6003 2.3 7.54331 2.3C4.48628 2.3 1.99767 4.25397 1.99767 6.65728C1.99767 7.85553 2.61151 8.74061 3.12656 9.27505L3.94211 10.1227L3.39483 11.1541C3.27109 11.3584 3.1321 11.6239 2.98722 11.8486C3.60106 11.675 4.20553 11.406 4.79475 11.018L5.37358 10.6946L6.03905 10.8137ZM15.6399 5.03011C19.4664 5.17308 22.5165 7.79766 22.5165 11.0146C22.5165 12.4307 21.9204 13.7311 20.9325 14.7557C21.4975 15.828 22.2635 16.6484 22.2843 16.662C22.5165 16.9071 22.5824 17.2679 22.416 17.5811C22.312 17.8943 21.9966 18.0951 21.65 18.0951C19.7749 18.0951 18.2429 17.4416 17.1823 16.7948C16.5827 16.9275 15.9553 17.0058 15.3072 17.0058C12.4651 17.0058 10.0076 15.6374 8.83267 13.6528C9.43229 13.5745 10.0076 13.4417 10.5553 13.2579C11.5258 14.5242 13.2934 15.3718 15.3072 15.3718C15.7994 15.3718 16.3054 15.314 16.8114 15.171L17.4769 15.0519L18.0557 15.3753C18.645 15.7633 19.2481 16.0322 19.865 16.2059C19.7194 15.9812 19.5808 15.7157 19.456 15.5114L18.9084 14.48L19.7229 13.6323C20.2393 13.1013 20.8528 12.2128 20.8528 11.0146C20.8528 8.75763 18.6588 6.89897 15.8306 6.6777L15.8618 6.65728C15.8618 6.0956 15.7855 5.55094 15.6399 5.03011Z"
                              fill="#10B981"></path>
                        </svg>
                     </span>
                  </button>
               </div>
            </div>
            <arm-modal title="Video" name="modal-createnew" size="xl">
               <!-- <div>
                  <p>fdfg</p>
               </div> -->
            </arm-modal>
            <!-- <arm-dialog title="Video" id="video" size="xl">
               <div>
                  <p>fdfg</p>
               </div>
            </arm-dialog> -->
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define("arm-card", Card);