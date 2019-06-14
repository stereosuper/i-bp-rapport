<template>
    <footer>
        <div>
            ©2019, informatique banque populaire
        </div>
        <div>
            <a
                class="logo-groupe-bpce"
                href="https://groupebpce.com/"
                target="_blank"
                rel="noopener noreferrer"
                ><img src="img/logo-groupe-bpce.svg" alt="Groupe BPCE"
            /></a>
        </div>
        <div>
            <nuxt-link to="/mentions">Mentions légales</nuxt-link>
        </div>
    </footer>
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
footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px $gutter;
    font-family: $chivo;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: $primary-light;
    > div {
        display: flex;
        justify-content: flex-start;
        width: 33.3333%;
        &:nth-child(2) {
            justify-content: center;
        }
        &:nth-child(3) {
            justify-content: flex-end;
        }
    }
}
.logo-groupe-bpce {
    display: block;
    width: 100%;
    max-width: 148px;
}
@media (max-width: $desktop-medium) {
    footer {
        padding: 30px $gutter-small;
    }
}
@media (max-width: $desktop-small) {
    footer {
        flex-direction: column;
        padding-top: 25px;
        padding-bottom: 25px;
        > div {
            width: 100%;
            justify-content: center;
            margin: 10px 0;
            &:nth-child(1) {
                order: 3;
            }
            &:nth-child(2) {
                order: 1;
            }
            &:nth-child(3) {
                order: 2;
                justify-content: center;
            }
        }
    }
}
</style>
