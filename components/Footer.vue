<template>
    <footer>
        <div>
            ©2019, informatique banque populaire
        </div>
        <div>
            <a class="logo-groupe-bpce" href="https://groupebpce.com/"
                ><img src="img/logo-groupe-bpce.svg" alt="Groupe BPCE"
            /></a>
        </div>
        <div>
            <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
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
</style>
