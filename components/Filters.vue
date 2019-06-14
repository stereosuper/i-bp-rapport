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
    flex-wrap: wrap;
    padding-top: 42px;
    padding-bottom: 32px;
    button {
        position: relative;
        font-family: $chivo;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1;
        text-transform: uppercase;
        padding-bottom: 15px;
        color: $primary;
        &::before {
            content: none;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            border-top: 1px solid $secondary;
        }
        &.on {
            color: $secondary;
            &::before {
                content: "";
            }
        }
    }
}
.nb-elem {
    font-size: 1.4rem;
    vertical-align: super;
    color: $secondary;
}
</style>
