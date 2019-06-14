<template>
    <div>
        <div class="header-wrapper">
            <Header />
            <Filters />
        </div>
        <nuxt />
        <Svgs />
        <Footer />
    </div>
</template>

<script>
import Scroll from "~/mixins/scroll.js";
import Window from "~/mixins/window.js";
import Header from "~/components/Header";
import Filters from "~/components/Filters";
import Footer from "~/components/Footer";
import Svgs from "~/components/Svgs";

export default {
    mixins: [Scroll, Window],
    components: {
        Header,
        Filters,
        Footer,
        Svgs
    },
    data() {
        return {};
    },
    computed: {},
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
.header-wrapper {
    display: flex;
    min-height: 100vh;
    flex-wrap: wrap;
}
</style>
