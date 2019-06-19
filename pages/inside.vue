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
                :altTheme="'secondary'"
                :filters="['Inside']"
                :twoCols="true"
                :content="
                    `<h2><strong class='medium'>37<span>%</span></strong> de femmes</h2><p>dans nos effectifs</p>`
                "
                :illusUrl="'img/dalle_12_mixite_colo.svg'"
                :hasModal="true"
                :titleModal="`37 % de femmes dans nos effectifs`"
                :col1Modal="
                    `<p>i&#8209;BP poursuit sa politique en faveur de la mixité et de l’égalité professionnelle. La représentativité des femmes dans les effectifs est en progression constante malgré un secteur très fortement masculinisé.</p>`
                "
                :ctaModal="[
                    {
                        type: 'linkedin',
                        label: `Mixité et équilibre`,
                        url:
                            'https://www.linkedin.com/pulse/la-mixit%C3%A9-une-question-d%C3%A9quilibre-st%C3%A9phane-beaujaneau/'
                    },
                    {
                        type: 'file',
                        label: `Chiffres clés`,
                        url: 'pdf/afterwork_infographie.pdf'
                    }
                ]"
                :ctaModalCol="2"
            />
            <Tile
                :theme="'white'"
                :alt-theme="'quinary'"
                :filters="['Inside', 'Tendances']"
                :height="'small'"
                :twoCols="true"
                :content="
                    `<h2><strong class='medium'>20</strong> films métiers</h2><p>diffusés lors des semaines thématiques.</p>`
                "
                :illusUrl="'img/dalle_05_video_colo_V3.svg'"
                :hasModal="true"
                :titleModal="
                    `20 films métiers diffusés lors des semaines thématiques`
                "
                :col1Modal="
                    `<p>La parole est donnée aux collaborateurs pour qu'ils parlent de leur métier, leur quotidien et leurs ambitions au service des banques. D'abord diffusées en interne lors de semaines thématiques, les vidéos seront aussi utilisées lors d'évènements et sur les réseaux sociaux pour mettre en valeur les compétences des femmes et des hommes d’i&#8209;BP.</p>`
                "
                :ctaModal="[
                    {
                        type: 'play',
                        label: `#WeRMobile`,
                        url: 'https://youtu.be/denq5me1aWE'
                    },
                    {
                        type: 'play',
                        label: `#WeRAgile`,
                        url: 'https://www.youtube.com/watch?v=iE0IymebJT4'
                    },
                    {
                        type: 'play',
                        label: `#WeRNotBots`,
                        url: 'https://www.youtube.com/watch?v=c30-0VV5SKs'
                    },
                    {
                        type: 'play',
                        label: `#WeRData`,
                        url: 'https://www.youtube.com/watch?v=0uUzURi2fUs'
                    }
                ]"
                :ctaModalCol="2"
            />
            <Tile
                :theme="'secondary'"
                :filters="['Inside']"
                :height="'small'"
                :content="
                    `<h2><strong>15</strong> engagements</h2><p>pour l'équilibre des temps de vie</p>`
                "
                :hasModal="true"
                :titleModal="`15 engagements pour l’équilibre des temps de vie`"
                :col1Modal="
                    `<p>En mai, les membres du Comité de direction générale ont signé la charte des 15 engagements pour l’équilibre des temps de vie éditée par le gouvernement et encouragée par le Groupe BPCE.</p>`
                "
                :ctaModal="[
                    {
                        type: 'file',
                        label: `La charte`,
                        url: 'pdf/Charte-equilibre.pdf'
                    }
                ]"
                :ctaModalCol="1"
            />
            <Tile
                :theme="'quinary'"
                :filters="['Inside', 'Évènements']"
                :height="'big'"
                :content="
                    `<h2><strong>61</strong> évènements</h2><p>auxquels i&#8209;BP a participé au titre de la marque employeur</p>`
                "
                :hasModal="true"
                :titleModal="
                    `61 évènements auxquels i-BP a participé au titre de la marque employeur`
                "
                :col1Modal="
                    `<p>La marque employeur a permis d’accentuer la notoriété de l'entreprise sur ses métiers, notamment sur la filière de développement, et sur ses territoires. i&#8209;BP existe désormais au-delà de son écosystème naturel. i&#8209;BP a participé en 2018 aux DevFest de Nantes et Toulouse qui ont rassemblé plusieurs milliers de développeurs, au salon de la Data lors de Nantes Digital Week ou à des évènements sur la sécurité informatique.</p><p>Les relations écoles ont aussi été développées au plus près des sites et des métiers.</p>`
                "
                :col2Modal="
                    `<img src='img/marque_employeur.jpg' alt='Marque employeur'/>`
                "
                :ctaModal="[
                    {
                        type: 'linkedin',
                        label: `Le DevFest Toulouse`,
                        url:
                            'https://www.linkedin.com/feed/update/urn:li:activity:6465950475341623296'
                    },
                    {
                        type: 'twitter',
                        label: `Afterwork recrutement`,
                        url:
                            'https://twitter.com/InformatiqueBP/status/985824624360480769'
                    }
                ]"
                :ctaModalCol="2"
            />
            <Tile
                :theme="'white'"
                :alt-theme="'quaternary-dark'"
                :filters="['Inside']"
                :height="'big'"
                :twoCols="true"
                :content="
                    `<h2><strong class='medium'>75</strong> recrutements</h2><p>en CDI</p>`
                "
                :illusUrl="'img/dalle_01_colo_V3.svg'"
                :hasModal="true"
                :titleModal="
                    `75 recrutements CDI <br/>30 % des embauches externes via LinkedIn`
                "
                :col1Modal="
                    `<p>2018 a été une année de forte activité en matière de recrutements et gestion de carrière : 75 personnes ont rejoint l’entreprise en CDI et 80 collaborateurs ont bénéficié d’une mobilité interne. Près de 30 % des embauches externes ont été réalisées via LinkedIn et plus de 15 % sont le résultat d’une cooptation.</p>`
                "
                :ctaModal="[
                    {
                        type: 'play',
                        label: `Journée des nouveaux embauchés`,
                        url: 'https://youtu.be/OHoYb-DKo-I'
                    },
                    {
                        type: 'micro',
                        label: `Ils ont testé`,
                        url: 'pdf/IBP_interview_cooptation.pdf'
                    }
                ]"
                :ctaModalCol="2"
            />
            <Tile
                :theme="'white'"
                :alt-theme="'quinary'"
                :filters="['Inside']"
                :height="'small'"
                :twoCols="true"
                :content="
                    `<h2><strong class='medium'>245</strong> participants</h2><p>pour les journées handicap et Qualité de Vie au Travail.</p>`
                "
                :illusUrl="'img/dalle_07_qvt_colo.svg'"
                :hasModal="true"
                :titleModal="
                    `245 personnes aux journées handicap et Qualité de Vie au Travail`
                "
                :col1Modal="
                    `<p>Un programme zen et pédagogique concocté par les référentes Handicap et Qualité de Vie au Travail. Échanges, quiz, jeu collaboratif… mais aussi des ateliers animés par des praticiens déficients visuels, autant d’idées originales pour sensibliser les collaborateurs.</p>`
                "
                :col2Modal="
                    `<p>Ce road trip sur les six sites d’i&#8209;BP s’est terminé par un évènement exceptionnel, la conférence à Dijon de Manon Genest, championne du monde de para-triathlon et vice-championne d’Europe en para-athlétisme, sur le thème « Handicap et Performance ».</p>`
                "
                :ctaModal="[
                    {
                        type: 'twitter',
                        label: `Témoignage inspirant`,
                        url:
                            'https://twitter.com/InformatiqueBP/status/1069943964311130112'
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
                :ctaModalCol="2"
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
        this.$store.commit("setActiveFilter", 1);
    }
};
</script>

<style lang="scss" scoped>
</style>
