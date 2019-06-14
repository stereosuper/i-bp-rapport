<template>
    <div
        class="wrapper-filters"
        ref="wrapperFilters"
        :style="{ height: filtersHeight + 'px' }"
    >
        <div
            class="filters container"
            :class="[{ 'is-fixed': isFixed }]"
            ref="filters"
        >
            <div class="filter-title">Filtre :</div>
            <div class="wrapper-button">
                <button type="button" class="btn-filter">
                    <svg class="icon icon-filter">
                        <use xlink:href="#icon-filter"></use>
                    </svg>
                </button>
                <button type="button" class="btn-close">
                    <svg class="icon icon-cross">
                        <use xlink:href="#icon-cross"></use>
                    </svg>
                </button>
            </div>
            <div class="content-filters">
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
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            wrapperFilters: null,
            wrapperFiltersPos: null,
            filters: null,
            filtersHeight: 80,
            isFixed: false
        };
    },
    computed: {
        scroll() {
            return this.$store.state.scrollTop;
        },
        w() {
            return this.$store.state.window;
        }
    },
    watch: {
        scroll() {
            this.scrollf();
        },
        w() {
            this.scrollf();
        }
    },
    mounted() {
        this.wrapperFilters = this.$refs.wrapperFilters;
        this.filters = this.$refs.filters;
        this.scrollf();
    },
    destroyed() {},
    methods: {
        scrollf() {
            this.filtersHeight = this.filters.offsetHeight;
            this.wrapperFiltersPos = this.wrapperFilters.getBoundingClientRect().top;
            if (this.wrapperFiltersPos > 0) {
                this.isFixed = false;
            } else {
                this.isFixed = true;
            }
        },
        setWrapperHeight() {}
    }
};
</script>

<style lang="scss" scoped>
.wrapper-filters {
    position: relative;
    display: block;
    width: 100%;
    min-height: 80px;
    background: $white;
}
.filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: $white;
    z-index: 2;
    &.is-fixed {
        position: fixed;
        box-shadow: 0px 0px 30px rgba(50, 51, 94, 0.18);
    }
}
.content-filters {
    display: flex;
    align-self: flex-end;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 15px;
    padding-bottom: 15px;
    button {
        position: relative;
        font-family: $chivo;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1;
        text-transform: uppercase;
        padding: 15px 0;
        color: $primary;
        margin-right: 30px;
        &:last-child {
            margin-right: 0;
        }
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
.filter-title {
    display: none;
    font-family: $chivo;
    font-size: 1.8rem;
    color: $primary;
}
.wrapper-button {
    display: none;
    position: relative;
    width: 30px;
    height: 30px;
    > button {
        width: 100%;
        height: 100%;
        > svg {
            width: 100%;
            height: 100%;
        }
    }
    svg {
        fill: $primary;
    }
}
.btn-close {
    display: none;
    padding: 5px;
}

@media (max-width: $desktop) {
    .filters {
        height: 70px;
    }
    .filter-title {
        display: block;
    }
    .wrapper-button {
        display: block;
    }
    .content-filters {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 50px $gutter-small;
        background: $white;
    }
}
</style>
