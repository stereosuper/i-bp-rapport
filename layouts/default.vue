<template>
    <div
        class="content-page"
        :class="{ 'overflow-not-scrollable': !overflowScrollable }"
    >
        <Header />
        <nuxt />
        <Svgs />
        <Footer />
    </div>
</template>

<script>
import Scroll from "~/mixins/scroll.js";
import Window from "~/mixins/window.js";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Svgs from "~/components/Svgs";

export default {
    mixins: [Scroll, Window],
    components: {
        Header,
        Footer,
        Svgs
    },
    data() {
        return {};
    },
    computed: {
        overflowScrollable() {
            return this.$store.state.overflowScrollable;
        }
    },
    watch: {},
    mounted() {
        this.$store.commit(
            "setNoTransitionElts",
            this.$el.querySelectorAll(".nte, .btn")
        );
        this.initScroll();
        this.initWindow();
    },
    destroyed() {
        this.destroyScroll();
        this.destroyWindow();
    },
    methods: {}
};
</script>

<style lang="scss">
</style>
