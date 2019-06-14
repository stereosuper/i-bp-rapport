<template>
    <div class="hero">
        <header class="header container">
            <img src='img/ibp.png' alt='' class='logo'>
        </header>
        <div class="content">
            <h1>
                <span class='subtitle'>Rapport d’activité</span> <strong>2018</strong>
                <span class='title'>Le kiosque à datas i&#8209;BP</span>
            </h1>
        </div>
        <img src='img/banner.svg' alt='' class='banner'>
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
    padding: 0 0 15vh;
    position: relative;
    color: $primary;
    &:before, &:after{
        content: '';
        position: absolute;
        background: $primary;
    }
    &:before{
        width: 1px;
        top: 0;
        bottom: 200px;
        right: 60px;
    }
    &:after{
        height: 1px;
        left: 0;
        right: 265px;
        bottom: 0;
    }
}
.header {
    display: flex;
    justify-content: flex-end;
    padding: 50px 60px 0;
}
.banner{
    max-width: 70%;
    max-height: 70vh;
    position: absolute;
    bottom: 5vh;
    right: 80px;
}
.logo {
    width: 185px;
    height: 47px;
    margin: 0 60px 0 0;
}
.content {
    width: $col * 2;
    max-width: 880px;
    padding: 10vh $gutter 5vh;
    &:before{
        content: '';
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
</style>
