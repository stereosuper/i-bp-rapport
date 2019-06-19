<template>
    <div id="content" class="wrapper-filters" ref="wrapperFilters">
        <div
            class="filters container"
            :class="[{ 'is-fixed': isFixed }, { 'filters-open': filtersOpen }]"
            ref="filters"
        >
            <div class="filter-title">
                <span class="title">Filtre</span>
                <span class="filter-active" v-if="activeFilter === 0"
                    ><span class="filter">Toutes</span
                    ><span class="nb-elem">22</span></span
                >
                <span class="filter-active" v-else-if="activeFilter === 1"
                    ><span class="filter">Inside</span
                    ><span class="nb-elem">8</span></span
                >
                <span class="filter-active" v-else-if="activeFilter === 2"
                    ><span class="filter">Performances</span
                    ><span class="nb-elem">6</span></span
                >
                <span class="filter-active" v-else-if="activeFilter === 3"
                    ><span class="filter">Banque</span
                    ><span class="nb-elem">9</span></span
                >
                <span class="filter-active" v-else-if="activeFilter === 4"
                    ><span class="filter">Évènements</span
                    ><span class="nb-elem">8</span></span
                >
                <span class="filter-active" v-else-if="activeFilter === 5"
                    ><span class="filter">Transformation</span
                    ><span class="nb-elem">7</span></span
                >
                <span class="filter-active" v-else-if="activeFilter === 6"
                    ><span class="filter">Tendances</span
                    ><span class="nb-elem">8</span></span
                >
            </div>
            <div class="wrapper-button">
                <button type="button" class="btn-filter" @click="toggleFilters">
                    <svg class="icon icon-filter">
                        <use xlink:href="#icon-filter"></use>
                    </svg>
                </button>
                <button type="button" class="btn-close" @click="toggleFilters">
                    <svg class="icon icon-cross">
                        <use xlink:href="#icon-cross"></use>
                    </svg>
                </button>
            </div>
            <div class="content-filters">
                <nuxt-link to="/#content" :class="{ on: activeFilter === 0 }">
                    <span class="filter">Toutes</span>
                    <span class="nb-elem">22</span>
                </nuxt-link>
                <nuxt-link
                    to="/inside#content"
                    :class="{ on: activeFilter === 1 }"
                    @click.native="toggleFilters"
                >
                    <span class="filter">#Inside</span>
                    <span class="nb-elem">8</span>
                </nuxt-link>
                <nuxt-link
                    to="/performances#content"
                    :class="{ on: activeFilter === 2 }"
                    @click.native="toggleFilters"
                >
                    <span class="filter">#Performances</span>
                    <span class="nb-elem">6</span>
                </nuxt-link>
                <nuxt-link
                    to="/banque#content"
                    :class="{ on: activeFilter === 3 }"
                    @click.native="toggleFilters"
                >
                    <span class="filter">#Banque</span>
                    <span class="nb-elem">9</span>
                </nuxt-link>
                <nuxt-link
                    to="/evenements#content"
                    :class="{ on: activeFilter === 4 }"
                    @click.native="toggleFilters"
                >
                    <span class="filter">#Évènements</span>
                    <span class="nb-elem">8</span>
                </nuxt-link>
                <nuxt-link
                    to="/transformation#content"
                    :class="{ on: activeFilter === 5 }"
                    @click.native="toggleFilters"
                >
                    <span class="filter">#Transformation</span>
                    <span class="nb-elem">7</span>
                </nuxt-link>
                <nuxt-link
                    to="/tendances#content"
                    :class="{ on: activeFilter === 6 }"
                    @click.native="toggleFilters"
                >
                    <span class="filter">#Tendances</span>
                    <span class="nb-elem">8</span>
                </nuxt-link>
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
            isFixed: false,
            filtersOpen: false
        };
    },
    computed: {
        scroll() {
            return this.$store.state.scrollTop;
        },
        w() {
            return this.$store.state.window;
        },
        activeFilter() {
            return this.$store.state.activeFilter;
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
        this.$store.commit(
            "setNoTransitionElts",
            this.$el.querySelectorAll(".content-filters")
        );
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
        toggleFilters() {
            if (this.w.w <= 1100) {
                this.filtersOpen = !this.filtersOpen;
                this.$store.commit("toggleOverflowScrollable");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper-filters {
    position: relative;
    display: block;
    width: 100%;
    height: 80px;
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
        &::before {
            box-shadow: 0px 0px 30px rgba(50, 51, 94, 0.18);
        }
    }
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        background: $white;
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
    button,
    a {
        position: relative;
        font-family: $chivo;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1;
        text-transform: uppercase;
        padding: 15px 0;
        color: $primary;
        margin-right: 30px;
        &:hover,
        &:focus {
            color: $secondary;
        }
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
.title {
    &::after {
        content: " : ";
    }
}
.filter-active {
    font-family: $chivo;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: $secondary;
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
    .wrapper-filters {
        height: 70px;
    }
    .filters {
        height: 70px;
        &.filters-open {
            .content-filters {
                transform: translate3d(0, 0, 0);
                pointer-events: auto;
            }
            .btn-filter {
                display: none;
            }
            .btn-close {
                display: block;
            }
            .filter-active {
                opacity: 0;
            }
            .title {
                &::after {
                    content: "s ";
                }
            }
        }
    }
    .filter-title {
        display: block;
        position: relative;
    }
    .wrapper-button {
        display: block;
    }
    .content-filters {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: nowrap;
        height: calc(100vh - 70px);
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        padding: 50px $gutter-small;
        background: $white;
        z-index: -1;
        transform: translate3d(0, calc(-100% - 70px), 0);
        transition: transform 0.3s ease-out;
        pointer-events: none;
        button,
        a {
            margin: 0 0 28px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
