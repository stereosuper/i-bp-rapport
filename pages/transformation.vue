<template>
    <div>
        <div class="header-wrapper">
            <Hero />
            <Filters />
        </div>
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
                :col2Modal="
                    `<img src='img/edito_serge_matry.jpg' alt='Serge Matry'/>`
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
                :filters="['Transformation', 'Évènements']"
                :twoCols="true"
                :content="
                    `<h2><strong class='medium'>48</strong> collaborateurs</h2><p>pour la Direction Edition logicielle Data <span class='small'>* au 31/12/18</span></p>`
                "
                :illusUrl="'img/dalle_06_data_colo_V2.svg'"
                :hasModal="true"
                :titleModal="
                    `48 collaborateurs pour la Direction Édition logicielle Data au 31/12/2018`
                "
                :col1Modal="
                    `<p>La Data, nouveau moteur de croissance pour le Groupe BPCE, constitue un sujet stratégique dans lequel i&#8209;BP s’est investi en créant une direction dédiée. Un de ses objectifs est d'assurer la mise en œuvre de la gouvernance des données. Les premiers résultats obtenus en 2018 vont irradier vers les banques et le groupe.</p>`
                "
                :col2Modal="`<img src='img/dalle_06_data_colo_V2.svg'/>`"
                :ctaModal="[
                    {
                        type: 'play',
                        label: `#WeRData`,
                        url: 'https://youtu.be/41nIjRxklM8'
                    },
                    {
                        type: 'micro',
                        label: `11 ans dans la Data`,
                        url: 'pdf/IBP_interview_data.pdf'
                    }
                ]"
                :ctaModalCol="1"
            />
            <Tile
                :theme="'white'"
                :alt-theme="'tertiary'"
                :filters="['Transformation', 'Performances']"
                :height="'small'"
                :twoCols="true"
                :content="
                    `<h2><strong class='medium'>14</strong> chantiers</h2><p>du Groupe d’Action Informatique</p>`
                "
                :illusUrl="'img/dalle_02_chantier_colo.svg'"
                :hasModal="true"
                :titleModal="
                    `14 chantiers pour traiter les problèmes et irritants remontés par les conseillers`
                "
                :col1Modal="
                    `<p>A la rentrée 2018, les opérateurs informatiques se sont réunis dans un Groupe d’Action Informatique pour traiter les problèmes et irritants remontés par les conseillers en agences lors d’enquêtes. La démarche est transverse et associe les banques, les caisses, i&#8209;BP, IT-CE, 89C3, BPCE-IT et Natixis, pour la satisfaction des conseillers du réseau.</p>`
                "
                :col2Modal="`<img src='img/dalle_02_chantier_colo.svg'/>`"
                :ctaModal="[
                    {
                        type: 'file',
                        label: `GAI en quelques mots`,
                        url: 'pdf/Les-chantiers-du-GAl.pdf'
                    }
                ]"
                :ctaModalCol="1"
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
                    `<h2><strong>3<sup>e</sup></strong> année</h2><p>pour le projet d'entreprise Osons, autrement</p>`
                "
                :hasModal="true"
                :titleModal="
                    `3<sup>ème</sup> année pour le projet d'entreprise Osons, autrement`
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
                :ctaModalCol="1"
            />
            <Tile
                :theme="'white'"
                :altTheme="'secondary'"
                :filters="['Performances', 'Transformation']"
                :height="'big'"
                :content="
                    `<h2><strong class='small'>15</strong> cadrages</h2><p>accompagnés par les coachs agiles</p>`
                "
                :illusUrl="'img/dalle_08_agilite_colo.svg'"
                :hasModal="true"
                :titleModal="`15 cadrages accompagnés par les coachs agile.`"
                :col1Modal="
                    `<p>La DSI Retail est montée en puissance durant cette année 2018 et i&#8209;BP y a pleinement pris sa place via des apports sur la méthode avec Tempo et l’agilité, par la participation des équipes dans les projets 89C3 ou dans les BAPI (Business Application Programming Interface) Factories.</p>`
                "
                :col2Modal="`<img src='img/dalle_08_agilite_colo.svg'/>`"
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
                :ctaModalCol="1"
            />
            <Tile
                :theme="'tertiary'"
                :filters="['Transformation', 'Évènements']"
                :content="
                    `<h2><strong>22</strong> couleurs</h2><p>pour le nouveau nuancier d'i&#8209;BP</p>`
                "
                :hasModal="true"
                :titleModal="`22 couleurs pour le nouveau nuancier d’i-BP`"
                :col1Modal="
                    `<p>i&#8209;BP change de logo ! La nouvelle identité est en cohérence avec le paysage de marque du groupe, et affirme notre place aux côtés des banques, mais en marquant notre spécificité métier.</p>`
                "
                :col2Modal="
                    `<img src='img/nouveau_nuancier_i-BP.jpg' alt='Nouveau nuancier i-BP'/>`
                "
                :ctaModal="[
                    {
                        type: 'micro',
                        label: `Une nouvelle identité`,
                        url: 'pdf/IBP_interview_identite.pdf'
                    }
                ]"
                :ctaModalCol="1"
            />
            <Tile
                :theme="'white'"
                :altTheme="'quaternary'"
                :filters="['Transformation']"
                :height="'big'"
                :content="
                    `<h2><strong class='small'>6400</strong> mètres carrés</h2><p>d’espaces de travail collaboratifs</p>`
                "
                :illusUrl="'img/dalle_11_espace_colo.svg'"
                :hasModal="true"
                :titleModal="
                    `6400 mètres carrés d’espaces de travail collaboratifs`
                "
                :col1Modal="
                    `<p>Après Toulouse en 2017, de nouveaux espaces de travail sont aménagés à Paris et la construction d’un bâtiment est lancée à Nantes. Ces espaces favorisent le travail en mode collaboratif et répondent aux pratiques des équipes : laboratoires d’expérimentation, agilité, design thinking, test and learn...</p>`
                "
                :col2Modal="`<img src='img/dalle_11_espace_colo.svg'/>`"
                :ctaModal="[
                    {
                        type: 'play',
                        label: `Espaces de travail à Paris`,
                        url: 'https://youtu.be/nEwSFXbgZpY'
                    },
                    {
                        type: 'play',
                        label: `Espaces de travail à Toulouse`,
                        url: 'https://youtu.be/izrDMMFPcTw'
                    }
                ]"
                :ctaModalCol="1"
            />
        </div>
    </div>
</template>

<script>
import Tile from "~/components/Tiles/Tile";
import Hero from "~/components/Hero";
import Filters from "~/components/Filters";

export default {
    components: {
        Tile,
        Hero,
        Filters
    },
    mounted() {
        this.$store.commit("setActiveFilter", 5);
    }
};
</script>

<style lang="scss" scoped>
</style>
