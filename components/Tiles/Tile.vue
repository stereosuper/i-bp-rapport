<template>
    <div
        class="tile"
        :class="[
            { 'two-cols': twoCols },
            `bg-${theme}`,
            `alt-${altTheme}`,
            `${height}-height`,
            { 'title-filled': titleFilled },
            { 'modal-on': modalOn },
            { 'has-modal': hasModal }
        ]"
    >
        <div v-if="hasModal" class="modal">
            <button type="button" class="btn-circular" @click="closeModal">
                <span>Retour</span>
            </button>
            <div class="content">
                <div>
                    <h3 v-if="titleModal">
                        {{ titleModal }}
                    </h3>
                    <div class="cols">
                        <div class="col">
                            <div v-if="col1Modal" v-html="col1Modal"></div>
                            <div
                                v-if="ctaModal && ctaModalCol === 1"
                                class="wrapper-buttons"
                            >
                                <div class="label-buttons">
                                    Pour aller plus loin :
                                </div>
                                <div class="wrapper-cta">
                                    <a
                                        v-for="(singleCtaModal,
                                        index) in ctaModal"
                                        :key="index"
                                        :href="singleCtaModal.url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="cta"
                                    >
                                        <span class="border"></span>
                                        <svg
                                            v-if="singleCtaModal.type"
                                            :class="
                                                `icon icon-${
                                                    singleCtaModal.type
                                                }`
                                            "
                                        >
                                            <use
                                                :xlink:href="
                                                    `#icon-${
                                                        singleCtaModal.type
                                                    }`
                                                "
                                            />
                                        </svg>
                                        <span
                                            v-if="singleCtaModal.label"
                                            class="text"
                                            >{{ singleCtaModal.label }}</span
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div v-if="col2Modal" v-html="col2Modal"></div>
                            <div
                                v-if="ctaModal && ctaModalCol === 2"
                                class="wrapper-buttons"
                            >
                                <div class="label-buttons">
                                    Pour aller plus loin :
                                </div>
                                <div class="wrapper-cta">
                                    <a
                                        v-for="(singleCtaModal,
                                        index) in ctaModal"
                                        :key="index"
                                        :href="singleCtaModal.url"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="cta"
                                    >
                                        <span class="border"></span>
                                        <svg
                                            v-if="singleCtaModal.type"
                                            :class="
                                                `icon icon-${
                                                    singleCtaModal.type
                                                }`
                                            "
                                        >
                                            <use
                                                :xlink:href="
                                                    `#icon-${
                                                        singleCtaModal.type
                                                    }`
                                                "
                                            />
                                        </svg>
                                        <span
                                            v-if="singleCtaModal.label"
                                            class="text"
                                            >{{ singleCtaModal.label }}</span
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tile-content" @click="openModal">
            <header>
                <ul class="hashtags">
                    <li v-for="(filter, index) in filters" :key="index">
                        #{{ filter }}
                    </li>
                </ul>
                <div v-if="hasModal" class="btn-open btn-circular">
                    <span>Voir</span>
                </div>
            </header>
            <div class="wrapper-content">
                <div v-if="illusUrl" class="wrapper-illus">
                    <img :src="illusUrl" class="illus" />
                </div>
                <div v-if="logoUrl" class="wrapper-logo">
                    <img :src="logoUrl" class="logo" />
                </div>
                <div class="content" v-html="content"></div>
                <div v-if="cta" class="wrapper-cta">
                    <a
                        v-for="(singleCta, index) in cta"
                        :key="index"
                        :href="singleCta.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="cta"
                    >
                        <span class="border"></span>
                        <svg
                            v-if="singleCta.type"
                            :class="`icon icon-${singleCta.type}`"
                        >
                            <use :xlink:href="`#icon-${singleCta.type}`" />
                        </svg>
                        <span v-if="singleCta.label" class="text">{{
                            singleCta.label
                        }}</span>
                    </a>
                </div>
                <div v-if="social" class="wrapper-social">
                    <div class="social-title">Rejoignez-nous</div>
                    <div class="social">
                        <a
                            href="https://twitter.com/informatiquebp?lang=fr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg class="icon icon-twitter">
                                <use xlink:href="#icon-twitter" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/informatique-banque-populaire/?originalSubdomain=fr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg class="icon icon-linkedin">
                                <use xlink:href="#icon-linkedin" />
                            </svg>
                        </a>
                        <a
                            href="https://informatique.banquepopulaire.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg class="icon icon-link">
                                <use xlink:href="#icon-link" />
                            </svg>
                        </a>
                    </div>
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
            type: Array,
            required: false
        },
        titleFilled: {
            type: Boolean,
            required: false,
            default: false
        },
        hasModal: {
            type: Boolean,
            required: false,
            default: false
        },
        titleModal: {
            type: String,
            required: false,
            default: ""
        },
        col1Modal: {
            type: String,
            required: false,
            default: ""
        },
        col2Modal: {
            type: String,
            required: false,
            default: ""
        },
        ctaModal: {
            type: Array,
            required: false
        },
        ctaModalCol: {
            type: Number,
            required: false,
            default: 1
        }
    },
    data() {
        return {
            modalOn: false
        };
    },
    computed: {},
    watch: {},
    mounted() {},
    destroyed() {},
    methods: {
        openModal() {
            if (this.hasModal) {
                this.modalOn = true;
            }
        },
        closeModal() {
            this.modalOn = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.tile {
    width: 33.3333%;
    position: relative;
    z-index: 1;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    &.small-height {
        .tile-content {
            min-height: 600px;
        }
    }
    &.big-height {
        .tile-content {
            min-height: 800px;
        }
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
            .social {
                a {
                    &:hover {
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
            .social {
                a {
                    &:hover {
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
            .social {
                a {
                    &:hover {
                        color: $quaternary;
                    }
                }
            }
        }
        &.alt-quaternary-dark {
            .content {
                /deep/ h2 {
                    strong {
                        color: $quaternary-dark;
                    }
                }
            }
            .social {
                a {
                    &:hover {
                        color: $quaternary-dark;
                    }
                }
            }
        }
        &.alt-quinary {
            .content {
                /deep/ h2 {
                    strong {
                        color: $quinary;
                    }
                }
            }
            .social {
                a {
                    &:hover {
                        color: $quinary;
                    }
                }
            }
        }
        .modal {
            background: $primary;
            .btn-circular {
                border-color: $primary;
                &::before,
                &::after {
                    background: $primary;
                }
            }
        }
        &.has-modal {
            .tile-content {
                &:hover,
                &:focus {
                    .btn-open {
                        border-color: $primary;
                        background: $primary-alt-light;
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
        .modal {
            background: $primary-alt-light;
            .btn-circular {
                border-color: $primary;
                &::before,
                &::after {
                    background: $primary;
                }
            }
        }
        &.has-modal {
            &:hover,
            &:focus {
                .btn-open {
                    background: $white;
                }
            }
        }
    }
    &.bg-primary,
    &.bg-secondary,
    &.bg-tertiary,
    &.bg-quaternary,
    &.bg-quinary {
        color: $white;
        .modal {
            .btn-circular {
                border-color: $primary;
                &::before,
                &::after {
                    background: $primary;
                }
            }
        }
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
        .modal {
            background: $primary;
            /deep/ h3 {
                color: $primary;
            }
        }
    }
    &.bg-quinary {
        &::before {
            background: $quinary;
        }
        .hashtags {
            color: $quinary-light;
        }
        .btn-circular {
            &::before,
            &::after {
                background: $quinary-light;
            }
            border-color: $quinary-light;
        }
        &:not(.title-filled) {
            .content {
                /deep/ h2 {
                    strong {
                        color: $quinary;
                    }
                }
            }
        }
        .modal {
            background: $quinary;
            /deep/ h3 {
                color: $quinary;
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
        .modal {
            background: $secondary;
            /deep/ h3 {
                color: $secondary;
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
        .modal {
            background: $tertiary;
            /deep/ h3 {
                color: $tertiary;
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
        .modal {
            background: $quaternary;
            /deep/ h3 {
                color: $quaternary;
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
    &.has-modal {
        cursor: pointer;
        &:hover,
        &:focus {
            .btn-open {
                background: rgba(#fff, 0.2);
                &:before,
                &:after {
                    opacity: 0;
                }
                > span {
                    opacity: 1;
                }
            }
        }
    }
    &.modal-on {
        z-index: 3;
        cursor: auto;
        .modal {
            display: block;
        }
    }
}
.tile-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 700px;
    height: 100%;
    padding: 50px $gutter 100px;
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
    display: flex;
    width: 80px;
    height: 80px;
    border: 1px solid;
    position: relative;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    border-radius: 50%;
    text-transform: uppercase;
    transition: $transition;
    &:hover,
    &:focus {
        background: $primary-alt-light;
        &:before,
        &:after {
            opacity: 0;
        }
        > span {
            opacity: 1;
        }
    }
    &:before,
    &:after,
    > span {
        transition: opacity $transition;
    }
    &::before,
    &::after {
        content: "";
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
    > span {
        padding: 3px 0 0;
        opacity: 0;
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
.modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 60px 60px 0;
    color: $primary;
    z-index: 2;
    .content {
        position: relative;
        display: flex;
        align-items: center;
        height: calc(100vh - 60px);
        z-index: 1;
        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 206px;
            left: 0;
            background: $white;
            z-index: -1;
        }
        > div {
            height: calc(100vh - 60px);
            padding: 90px 160px;
            overflow: auto;
            &::before,
            &::after {
                content: "";
                display: block;
                position: absolute;
                z-index: -1;
            }
            &::before {
                bottom: 0;
                left: 0;
                right: 268px;
                height: 206px;
                background: $white;
            }
            &::after {
                bottom: 0;
                right: 0;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 206px 268px 0 0;
                border-color: $white transparent transparent transparent;
            }
        }
    }
    h3 {
        width: 50%;
        margin-top: 0;
    }
    .cols {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .col {
        flex: 1 1 0;
        padding-right: 16.666%;
        > div {
            + .wrapper-buttons {
                margin-top: 50px;
            }
        }
    }
    .btn-circular {
        position: fixed;
        top: 50px;
        right: 160px;
        z-index: 2;
        &::before {
            transform: rotate(45deg);
        }
        &::after {
            transform: rotate(139deg);
        }
    }
}
.wrapper-buttons {
    margin: 0.6em 0 0;
}
.label-buttons {
    font-family: $chivo;
    font-size: 1.4rem;
    text-transform: uppercase;
}
.wrapper-cta {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    .cta {
        margin: 15px 40px 0 0;
    }
}

@media (max-width: $desktop-medium) {
    .tile {
        &.small-height {
            .tile-content {
                min-height: 400px;
            }
        }
        &.big-height {
            .tile-content {
                min-height: 600px;
            }
        }
    }
    .tile-content {
        padding: 50px $gutter-small 100px;
        min-height: 500px;
    }
    .modal {
        .content {
            &::before {
                bottom: 123px;
            }
            > div {
                padding: 90px 160px 90px $gutter-small;
                &::before {
                    right: 160px;
                }
                &::after {
                    border-width: 123px 160px 0 0;
                }
            }
        }
        .col {
            padding-right: $gutter-small;
        }
    }
}
@media (max-width: $desktop) {
    .tile {
        width: 100%;
        &.small-height {
            .tile-content {
                min-height: 0;
            }
        }
        &.big-height {
            .tile-content {
                min-height: 0;
            }
        }
        &.two-cols {
            width: 100%;
        }
        .tile-content {
            min-height: 0;
            height: auto;
        }
    }
    .wrapper-illus {
        width: 100%;
        max-width: 400px;
    }
    .modal {
        h3 {
            width: 100%;
        }
        .btn-circular {
            right: 105px;
        }
        .col {
            flex: 0 0 auto;
            width: calc(50% - 25px);
            padding-right: 0;
        }
    }
}
@media (max-width: $desktop-small) {
    .modal {
        padding: 0;
        .content {
            align-items: flex-start;
            height: 100vh;
            &::before,
            &::after {
                content: none;
            }
            > div {
                height: 100vh;
                padding: 150px $gutter-small 50px;
                &::before,
                &::after {
                    content: none;
                }
            }
        }
        .cols {
            flex-direction: column;
        }
        .col {
            width: 100%;
        }
        .btn-circular {
            top: 50px;
            right: $gutter-small;
        }
    }
    .tile {
        &.bg-white,
        &.bg-primary-alt-light,
        &.bg-primary,
        &.bg-secondary,
        &.bg-tertiary,
        &.bg-quaternary,
        &.bg-quinary {
            .modal {
                background: $white;
            }
        }
    }
}
@media (max-width: $tablet) {
    .tile {
        width: 100%;
        &.two-cols {
            width: 100%;
        }
    }
    .wrapper-illus {
        width: 100%;
        max-width: 400px;
    }
}
@media (max-width: $phone) {
    .tile {
        &.two-cols {
            .wrapper-content {
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
            }
            .wrapper-illus {
                width: 100%;
                + .content {
                    width: 100%;
                }
            }
        }
    }
    .tile-content {
        padding-top: 30px;
        padding-bottom: 80px;
    }
}
</style>
