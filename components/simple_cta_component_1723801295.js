/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723801295", {
    template: `
    <section id="cta-component" style="min-height: 550px" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 p-8" ><div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 lg:px-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style=""><div id="cta-content" class="max-w-screen-sm mx-auto text-center"><div id="cta-title-container" class="flex" style=""><h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white" style="" data-mf-new="true">This is the Hen's Production's</h2></div> <div id="cta-subtitle-container" class="flex" style=""><p id="cta-subtitle" class="flex-1 mb-6 font-light text-white md:text-lg" style="">Revolutionize your coop with our all-in-one hen care solution. From egg tracking to feed optimization, we've got your flock covered.</p></div> <div id="cta-button-container" class="flex" style=""><a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white bg-opacity-80 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105" style="">Start Egg-cellent Care's</a></div></div></div></section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
