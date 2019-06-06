<template>
    <div>
        <Header />
        <Filters />
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

<style></style>
