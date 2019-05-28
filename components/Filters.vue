<template>
    <div class="filters container">
        <button type="button" class="on">
            <span class="filter">Toutes</span>
            <span class="nb-elem">22</span>
        </button>
        <button type="button">
            <span class="filter">#Inside</span>
            <span class="nb-elem">8</span>
        </button>
        <button type="button">
            <span class="filter">#Performances</span>
            <span class="nb-elem">7</span>
        </button>
        <button type="button">
            <span class="filter">#Banque</span>
            <span class="nb-elem">8</span>
        </button>
        <button type="button">
            <span class="filter">#Événement</span>
            <span class="nb-elem">7</span>
        </button>
        <button type="button">
            <span class="filter">#Transformation</span>
            <span class="nb-elem">8</span>
        </button>
        <button type="button">
            <span class="filter">#Tendances</span>
            <span class="nb-elem">7</span>
        </button>
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
.filters {
    display: flex;
    justify-content: space-between;
    padding-top: 70px;
    padding-bottom: 60px;
    button {
        position: relative;
        font-family: $chivo;
        font-weight: 500;
        line-height: 1;
        text-transform: uppercase;
        padding-bottom: 15px;
        color: $primary;
        &.on {
            color: $secondary;
            .filter {
                &::before {
                    content: "";
                }
            }
        }
    }
}
.filter {
    position: relative;
    &::before {
        content: none;
        position: absolute;
        bottom: -14px;
        left: 0;
        right: 0;
        border-top: 1px solid $secondary;
    }
}
.nb-elem {
    font-size: 1.4rem;
    vertical-align: super;
    color: $secondary;
}
</style>
