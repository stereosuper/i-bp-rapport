<template>
    <div>
        <Header />
        <nuxt />
        <Svgs />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Svgs from "~/components/Svgs";

export default {
    components: {
        Header,
        Footer,
        Svgs
    }
};
</script>

<style></style>
