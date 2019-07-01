<template>
    <div class="container default-style">
        <h2>Mentions légales</h2>

        <h3>Adresses</h3>

        <h4>Siège social</h4>
        <p>
            Le Futura <br />
            Zac du Pas du Lac <br />
            23 place de Wicklow <br />
            78067 Saint-Quentin-en-Yvelines cedex <br />
            Tél. : 01 30 13 45 00
        </p>

        <h4>Autres sites</h4>
        <p>
            1 rue du Paquier <br />
            BP 22 <br />
            21601 Longvic cedex <br />
            Tél. : 03 80 68 73 73
        </p>

        <p>
            56 route de Lavaur <br />
            BP 63106 <br />
            31131 Balma cedex <br />
            Tél. : 05 61 61 71 71
        </p>

        <p>
            1 rue Édith Piaf <br />
            BP 80229 <br />
            44815 Saint-Herblain cedex <br />
            Tél. : 02 40 67 48 00
        </p>

        <p>
            15 rue Fernand Braudel <br />
            3e étage <br />
            75013 Paris <br />
            Tél. : 01 84 95 15 07
        </p>

        <p>
            26 avenue de la Mirande <br />
            66240 Saint Estève <br />
            Tél. : 05 61 61 71 71
        </p>

        <h3>Rapport d'activité 2018 i-BP</h3>
        <p>
            <strong>Directeur de publication</strong> : Serge Matry <br />
            <strong>Responsable de la publication</strong> : Annick Bellaigue
            (02 40 67 48 41) <br />
            <strong>Comité de rédaction</strong> : Cécile Joret avec la
            contribution d’Isabelle Tylek, du service communication et des
            collaborateurs et directions d’i-BP <br />
            <strong>Conception et réalisation</strong> : L’Unique Équipe en
            collaboration avec Les Indiens et Stéréosuper <br />
            <strong>Crédits photos</strong> : iStock, Shutterstock, 123rf,
            Groupe BPCE, Service communication i-BP
        </p>
        <h3>Suivre i-BP</h3>
        <div class="wrapper-social">
            <a
                href="https://www.linkedin.com/company/informatique-banque-populaire/"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="icon icon-linkedin">
                    <use xlink:href="#icon-linkedin"></use></svg
                ><span>Informatique Banque Populaire</span></a
            >
            <a
                href="https://twitter.com/informatiquebp?lang=fr"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="icon icon-twitter">
                    <use xlink:href="#icon-twitter"></use></svg
                ><span>@InformatiqueBP</span></a
            >
            <a
                href="https://informatique.banquepopulaire.fr/"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="icon icon-link">
                    <use xlink:href="#icon-link"></use></svg
                ><span>www.informatique.banquepopulaire.fr</span></a
            >
        </div>
    </div>
</template>

<script>
export default {
    layout: "simple"
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 950px;
    padding: 200px 30px 120px;
    margin: 0 auto;
}

@media (max-width: $tablet) {
    .container {
        padding: 150px 30px 50px;
    }
}
</style>
