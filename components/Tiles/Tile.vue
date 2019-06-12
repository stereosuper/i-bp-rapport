<template>
    <div
        class="tile"
        :class="[
            { 'two-cols': twoCols },
            `bg-${theme}`,
            `alt-${altTheme}`,
            `${height}-height`,
            { 'title-filled': titleFilled }
        ]"
    >
        <header>
            <ul class="hashtags">
                <li v-for="(filter, index) in filters" :key="index">
                    #{{ filter }}
                </li>
            </ul>
            <div class="btn-circular"></div>
        </header>
        <div class="wrapper-content">
            <div v-if="illusUrl" class="wrapper-illus">
                <img :src="illusUrl" class="illus" />
            </div>
            <div v-if="logoUrl" class="wrapper-logo">
                <img :src="logoUrl" class="logo" />
            </div>
            <div class="content" v-html="content"></div>
            <a v-if="cta" :href="cta.url" class="cta">
                <svg v-if="cta.type" :class="`icon icon-${cta.type}`">
                    <use :xlink:href="`#icon-${cta.type}`" />
                </svg>
                <span v-if="cta.label">{{ cta.label }}</span>
            </a>
            <div v-if="social" class="wrapper-social">
                <div class="social-title">Rejoignez-nous</div>
                <div class="social">
                    <a href="https://twitter.com/InformatiqueBP">
                        <svg class="icon icon-twitter">
                            <use xlink:href="#icon-twitter" />
                        </svg>
                    </a>
                    <a href="https://fr.linkedin.com/company/i-bp">
                        <svg class="icon icon-linkedin">
                            <use xlink:href="#icon-linkedin" />
                        </svg>
                    </a>
                    <a href="https://informatique.banquepopulaire.fr/">
                        <svg class="icon icon-link">
                            <use xlink:href="#icon-link" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        theme: {
            type: String,
            required: true,
            default: ""
        },
        altTheme: {
            type: String,
            required: false,
            default: ""
        },
        twoCols: {
            type: Boolean,
            required: false,
            default: false
        },
        height: {
            type: String,
            required: false,
            default: "medium"
        },
        content: {
            type: String,
            required: true,
            default: ""
        },
        illusUrl: {
            type: String,
            required: false,
            default: ""
        },
        logoUrl: {
            type: String,
            required: false,
            default: ""
        },
        social: {
            type: Boolean,
            required: false,
            default: false
        },
        filters: {
            type: Array,
            required: true
        },
        cta: {
            type: Object,
            required: false
        },
        titleFilled: {
            type: Boolean,
            required: false,
            default: false
        }
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

<style lang="scss" scoped>
.tile {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33.3333%;
    min-height: 700px;
    padding: 50px $gutter 100px;
    z-index: 1;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    &.small-height {
        min-height: 600px;
    }
    &.big-height {
        min-height: 800px;
    }
    &.bg-white {
        color: $primary;
        border-top: 1px solid $primary-x-light;
        border-right: 1px solid $primary-x-light;
        &::before {
            background: $white;
        }
        .hashtags {
            color: $primary-light;
        }
        .btn-circular {
            &::before,
            &::after {
                background: $primary-light;
            }
            border-color: $primary-light;
        }
        .content {
            /deep/ h2 {
                strong {
                    color: $primary;
                    text-shadow: none;
                }
            }
        }
        &.alt-secondary {
            .content {
                /deep/ h2 {
                    strong {
                        color: $secondary;
                    }
                }
            }
        }
        &.alt-tertiary {
            .content {
                /deep/ h2 {
                    strong {
                        color: $tertiary;
                    }
                }
            }
        }
        &.alt-quaternary {
            .content {
                /deep/ h2 {
                    strong {
                        color: $quaternary;
                    }
                }
            }
        }
    }
    &.bg-primary-alt-light {
        color: $primary;
        border-top: 1px solid $primary-x-light;
        border-right: 1px solid $primary-x-light;
        &::before {
            background: $primary-alt-light;
        }
        .hashtags {
            color: $primary-light;
        }
        .btn-circular {
            &::before,
            &::after {
                background: $primary-light;
            }
            border-color: $primary-light;
        }
    }
    &.bg-primary,
    &.bg-secondary,
    &.bg-tertiary,
    &.bg-quaternary {
        color: $white;
    }
    &.bg-primary {
        &::before {
            background: $primary;
        }
        .hashtags {
            color: $primary-light;
        }
        .btn-circular {
            &::before,
            &::after {
                background: $primary-light;
            }
            border-color: $primary-light;
        }
        &:not(.title-filled) {
            .content {
                /deep/ h2 {
                    strong {
                        color: $primary;
                    }
                }
            }
        }
    }
    &.bg-secondary {
        &::before {
            background: $secondary;
        }
        .hashtags {
            color: $secondary-light;
        }
        .btn-circular {
            &::before,
            &::after {
                background: $secondary-light;
            }
            border-color: $secondary-light;
        }
        &:not(.title-filled) {
            .content {
                /deep/ h2 {
                    strong {
                        color: $secondary;
                    }
                }
            }
        }
    }
    &.bg-tertiary {
        &::before {
            background: $tertiary;
        }
        .hashtags {
            color: $tertiary-light;
        }
        .btn-circular {
            &::before,
            &::after {
                background: $tertiary-light;
            }
            border-color: $tertiary-light;
        }
        &:not(.title-filled) {
            .content {
                /deep/ h2 {
                    strong {
                        color: $tertiary;
                    }
                }
            }
        }
    }
    &.bg-quaternary {
        &::before {
            background: $quaternary;
        }
        .hashtags {
            color: $quaternary-light;
        }
        .btn-circular {
            &::before,
            &::after {
                background: $quaternary-light;
            }
            border-color: $quaternary-light;
        }
        &:not(.title-filled) {
            .content {
                /deep/ h2 {
                    strong {
                        color: $quaternary;
                    }
                }
            }
        }
    }
    &.two-cols {
        width: 66.6666%;
        .hashtags {
            flex-direction: row;
            align-items: center;
        }
        .wrapper-content {
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
        }
        .wrapper-illus {
            width: $tile2Col * 6;
            + .content {
                width: $tile2Col * 5;
            }
        }
        .illus {
            margin-bottom: 0;
        }
    }
    &.title-filled {
        /deep/ h2 {
            strong {
                text-shadow: none;
                color: $white;
            }
        }
    }
}
header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 80px;
    margin-bottom: 30px;
}
.hashtags {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    list-style-type: none;
    margin: 0;
    padding: 10px 0 0;
    > li {
        font-family: $chivo;
        font-size: 1.4rem;
        text-transform: uppercase;
        margin: 0 20px 5px 0;
    }
}
.btn-circular {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
    &::before,
    &::after {
        content: "";
        display: block;
        width: 16px;
        height: 1px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0 0 0 -8px;
    }
    &::after {
        transform: rotate(90deg);
    }
}
.wrapper-content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}
.wrapper-illus {
    width: $tileCol * 5;
}
.illus {
    display: block;
    width: 100%;
    margin-bottom: 25px;
}
.wrapper-logo {
    width: auto;
    margin-bottom: 40px;
}
.content {
    /deep/ h2 {
        strong {
            text-shadow: -1px -1px 0 $white, 1px -1px 0 $white,
                -1px 1px 0 $white, 1px 1px 0 $white;
        }
    }
}
.wrapper-social {
    margin-top: 30px;
}
.social-title {
    font-family: $chivo;
    font-size: 1.6rem;
    margin-bottom: 10px;
}
.social {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    a {
        margin: 5px 30px 0 0;
        color: $primary;
    }
    .icon {
        width: 16px;
        height: 16px;
    }
}
</style>
