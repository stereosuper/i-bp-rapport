<template>
    <div class="hero">
        <div class="content">
            <h1>
                <span class="subtitle">Rapport d’activité</span>
                <span class="title"
                    >Le kiosque à&nbsp;datas&nbsp;i&#8209;BP</span
                >
                <strong>2018</strong>
            </h1>
        </div>
        <img src="img/banner.svg" alt="" class="banner" />
    </div>
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
.hero {
    width: 100%;
    min-height: calc(100vh - 80px);
    padding-top: 120px;
    position: relative;
    color: $primary;
    background: $white;
    z-index: 3;
    &:before,
    &:after {
        content: "";
        position: absolute;
        background: $primary;
    }
    &:before {
        width: 1px;
        top: 0;
        bottom: 200px;
        right: 60px;
    }
    &:after {
        height: 1px;
        left: 0;
        right: 265px;
        bottom: 0;
    }
}
.banner {
    max-width: 70%;
    max-height: 70vh;
    position: absolute;
    bottom: 5vh;
    right: $gutter;
}
.content {
    width: $col * 2;
    max-width: 880px;
    padding: 10vh $gutter 5vh;
    &:before {
        content: "";
        width: 285px;
        height: 1px;
        position: absolute;
        bottom: 0;
        right: -20px;
        background: $primary;
        transform-origin: 0 0;
        transform: rotate(-44.5deg);
    }
}

@media (max-width: $desktop) {
    .hero {
        min-height: calc(100vh - 70px);
    }
    .content {
        width: 100%;
        padding-right: 140px;
        padding-left: $gutter/2;
    }
}

@media (max-width: $tablet) {
    .hero {
        &:before,
        &:after {
            content: none;
        }
        padding-bottom: 5vh;
    }

    .content {
        padding: 10vh #{$gutter/2} 5vh;
        &:before {
            content: none;
        }
    }

    .banner {
        display: block;
        max-width: 500px;
        position: relative;
        bottom: auto;
        right: auto;
        margin: 0 auto;
    }
}
</style>
