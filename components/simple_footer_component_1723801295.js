/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723801295", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg" style="min-height: 390px;">
        <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16 md:p-12 lg:p-16">
            <hr id="footer-divider" class="my-8 border-white border-opacity-20 sm:mx-auto lg:my-12">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white hover:text-pink-200 transition-colors duration-300">
                        <img id="footer-logo" src="./images/logo.svg" alt="Landwind Logo" class="h-8 mr-4 sm:h-10">
                        ChickenChatter's
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-lg text-center text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-300">
                    © 2023 ChickenChatter. All rights reserved. Pecking since 2023.
                </div>
            </div>
        </div>
    </footer>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
