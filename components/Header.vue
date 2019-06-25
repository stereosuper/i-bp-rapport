<template>
    <header class="header container">
        <nuxt-link to="/" class="logo"
            ><img src="img/ibp.png" alt=""
        /></nuxt-link>
    </header>
</template>

<script>
export default {
    components: {},
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

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding: 50px 60px 0;
    z-index: 5;
}
.logo {
    display: block;
    width: 185px;
    height: 50px;
    margin: 0 60px 0 0;
    > img {
        width: 100%;
    }
}

@media (max-width: $desktop) {
    .logo {
        margin-right: $gutter/2;
    }
}

@media (max-width: $tablet) {
    .header {
        justify-content: center;
    }

    .logo {
        margin-right: 0;
    }
}

@media (max-width: $phone) {
    .header {
        padding-top: 17px;
    }
}
</style>
