<template>
    <div>
        <div class='header-wrapper'>
            <Header />
            <Filters />
        </div>
        <nuxt />
        <Svgs />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Header";
import Filters from "~/components/Filters";
import Footer from "~/components/Footer";
import Svgs from "~/components/Svgs";

export default {
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
    mounted() {},
    destroyed() {},
    methods: {}
};
</script>

<style lang="scss">
.header-wrapper{
    display: flex;
    min-height: 100vh;
    flex-wrap: wrap;
}
</style>
