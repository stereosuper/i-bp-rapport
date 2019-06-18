<template>
    <div class="wrapper-tiles">
        <Tile
            :theme="'white'"
            :filters="[
                'Banque',
                'Performances',
                'Inside',
                'Transformation',
                'Tendances',
                'Évènements'
            ]"
            :content="
                `<blockquote><p>L’année 2018 aura été pour i&#8209;BP une année enthousiasmante</p><span class='blockquote-author'><cite>Serge Matry</cite>, <span>Directeur général d'i&#8209;BP</span></blockquote>`
            "
            :illusUrl="'img/2018.svg'"
            :hasModal="true"
            :col1Modal="
                `<blockquote><p>L’année 2018 aura été pour i&#8209;BP une année enthousiasmante</p><span class='blockquote-author'><cite>Serge Matry</cite>, <span>Directeur général d'i&#8209;BP</span></blockquote>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `L’année 2018`,
                    url: 'https://youtu.be/6ddcFmj-w0E'
                }
            ]"
            :ctaModalCol="1"
        />
        <Tile
            :theme="'white'"
            :alt-theme="'tertiary'"
            :filters="['Banque', 'Performances']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong>6</strong> banques</h2><p>impliquées dans les deux opérations de fusion menées en 2018.</p>`
            "
            :illusUrl="'img/dalle_03_fusion_V2_colo.svg'"
            :hasModal="true"
            :titleModal="
                `6 banques impliquées dans les 2 opérations de fusion menées en 2018`
            "
            :col1Modal="
                `<p>Deux importants projets de fusion, Banque Populaire Grand Ouest et Banque Populaire Aquitaine Centre Atlantique, ont été menés avec succès et avec des niveaux de performance jamais atteints auparavant. Le professionnalisme des équipes i&#8209;BP et la maîtrise de travaux mobilisant de multiples acteurs du groupe se sont de nouveau concrétisés, au service des banques.</p>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `Les fusions côté i-BP`,
                    url: 'https://youtu.be/MZpPYzRbcY8'
                },
                {
                    type: 'play',
                    label: `Les fusions côté banque`,
                    url: 'https://youtu.be/eFC1uiMMTPA'
                }
            ]"
            :ctaModalCol="2"
        />
        <Tile
            :theme="'tertiary'"
            :filters="['Banque', 'Performances']"
            :height="'big'"
            :content="
                `<h2><strong class='regular'>358,7</strong> millions d’euros de chiffre d’affaires toutes activités confondues</h2>`
            "
        />
        <Tile
            :theme="'white'"
            :altTheme="'secondary'"
            :filters="['Performances', 'Transformation']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>15</strong> cadrages accompagnés par les coach agiles</h2>`
            "
            :illusUrl="'img/dalle_08_agilite_colo.svg'"
            :hasModal="true"
            :titleModal="`15 cadrages accompagnés par les coachs agile.`"
            :col1Modal="
                `<p>La DSI Retail est montée en puissance durant cette année 2018 et i&#8209;BP y a pleinement pris sa place via des apports sur la méthode avec Tempo et l’agilité, par la participation des équipes dans les projets 89C3 ou dans les BAPI (Business Application Programming Interface) Factories.</p>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `La minute agile S01E1`,
                    url: 'https://www.youtube.com/watch?v=AJodBjY-46o'
                },
                {
                    type: 'play',
                    label: `La minute agile S01E2`,
                    url: 'https://www.youtube.com/watch?v=45J9oqIZAyM'
                },
                {
                    type: 'play',
                    label: `La minute agile S01E7`,
                    url: 'https://www.youtube.com/watch?v=Li7Elz9PvjI'
                },
                {
                    type: 'play',
                    label: `Comprendre le cadrage agile`,
                    url: 'https://youtu.be/Ua5VjrXMPnM'
                },
                {
                    type: 'play',
                    label: `Retour d'expérience`,
                    url: 'https://youtu.be/TntXS0De-AM'
                }
            ]"
            :ctaModalCol="2"
        />
        <Tile
            :theme="'quinary'"
            :filters="['Banque', 'Performances']"
            :height="'big'"
            :content="
                `<h2><strong>23</strong> mille jours homme pour le Plan Informatique Annuel</h2>`
            "
            :hasModal="true"
            :titleModal="`23 000 jours homme pour le Plan Informatique Annuel`"
            :col1Modal="
                `<p>De nombreux projets se sont concrétisés par des livraisons aux Banques Populaires, dont les enjeux sont l'autonomie du client, l'efficacité des outils collaborateurs, l'harmonisation avec le Groupe BPCE et la réponse aux exigences de conformité. L'efficacité score banking et la digitalisation restent au cœur de la stratégie.</p>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `Livraisons 2018 - saison 1`,
                    url: 'https://www.youtube.com/watch?v=AN3gKzWxqPE'
                },
                {
                    type: 'play',
                    label: `Livraisons 2018 - saison 2`,
                    url: 'https://www.youtube.com/watch?v=bHopLRTjtTQ'
                },
                {
                    type: 'file',
                    label: `Détail du PIA 2018`,
                    url: '/pdf/PIA-2018.pdf'
                }
            ]"
            :ctaModalCol="2"
        />
        <Tile
            :theme="'quaternary'"
            :filters="[
                'Banque',
                'Performances',
                'Inside',
                'Transformation',
                'Tendances'
            ]"
            :height="'small'"
            :content="
                `<h2><strong>3<sup>e</sup></strong> année pour le projet d'entreprise Osons, autrement</h2>`
            "
            :hasModal="true"
            :titleModal="
                `3ème année pour le projet d'entreprise Osons, autrement`
            "
            :col1Modal="
                `<p>Démarré en 2016, il a pour objectif la satisfaction des Banques Populaires en améliorant la qualité de leur système d’information Equinoxe, en le simplifiant, et en l’enrichissant au plus proche de leurs besoins et de ceux de leurs clients, dans des délais plus courts. Des chantiers ont également été menés à destination des collaborateurs d’i&#8209;BP : simplification des processus administratifs, création d’espaces de travail et d’échanges collaboratifs, accès à la formation digitale.</p><p>Une filière d’excellence pour les métiers du développement a été créée. L’année 2018 a été axée sur le déploiement et l’appropriation des pratiques, des méthodes et des outils développés par les chantiers dans le cadre des deux premières feuilles de route d’Osons, autrement.</p>`
            "
            :col2Modal="
                `<img src='img/osons_autrement.png' alt='Osons autrement'/>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `La transformation d’i-BP`,
                    url: 'https://www.youtube.com/watch?v=7t2uYqvST88'
                }
            ]"
            :ctaModalCol="2"
        />
        <Tile
            :theme="'white'"
            :alt-theme="'tertiary'"
            :filters="['Banque', 'Transformation']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>14</strong> chantiers</h2><p>du Groupe d’Action Informatique.</p>`
            "
            :illusUrl="'img/dalle_02_chantier_colo.svg'"
            :hasModal="true"
            :titleModal="
                `14 chantiers pour traiter les problèmes et irritants remontés par les conseillers`
            "
            :col1Modal="
                `<p>A la rentrée 2018, les opérateurs informatiques se sont réunis dans un groupe d’action informatique pour traiter les problèmes et irritants remontés par les conseillers en agences lors d’enquêtes. La démarche est transverse et associe les banques, les caisses, i&#8209;BP, IT-CE, 89C3, BPCE-IT et Natixis, pour la satisfaction des conseillers du réseau.</p>`
            "
            :ctaModal="[
                {
                    type: 'file',
                    label: `GAI en quelques mots`,
                    url: 'pdf/Les-chantiers-du-GAl.pdf'
                }
            ]"
            :ctaModalCol="2"
        />
    </div>
</template>

<script>
import Tile from "~/components/Tiles/Tile";

export default {
    components: {
        Tile
    },
    mounted() {
        this.$store.commit("setActiveFilter", 2);
    }
};
</script>

<style lang="scss" scoped>
</style>
