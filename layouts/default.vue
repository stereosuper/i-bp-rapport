<template>
    <div>
        <Header />
        <Filters />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Header";
import Filters from "~/components/Filters";
import Footer from "~/components/Footer";

export default {
    components: {
        Header,
        Filters,
        Footer
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
