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
                :theme="'primary-alt-light'"
                :filters="['Banque', 'Tendances', 'Évènements']"
                :height="'small'"
                :content="
                    `<h2><strong>1</strong> collaborateur i&#8209;BP</h2><p>parmi les lauréats</p>`
                "
                :logoUrl="'img/trophees-make-it-simple.png'"
                :hasModal="true"
                :titleModal="`1 collaborateur i-BP parmi les lauréats `"
                :col1Modal="
                    `<p>Les Trophées Make it Simple 2018 affichent un leitmotiv : encourager et valoriser les projets des collaborateurs du Groupe BPCE permettant de « faire plus simple ». Plus simple au bénéfice des clients, des collaborateurs, de l’entreprise et de ses partenaires au sens large.</p><p>C’est le projet de l’équipe Banque Populaire Rives de Paris / i&#8209;BP qui a remporté le prix des collaborateurs. Il vise à soulager les équipes commerciales en agences de certains types de mails et dégager du temps commercial pour les clients grâce à un traitement centralisé des mails d’agences vers les « Middle Offices Commerciaux ».</p>`
                "
                :col2Modal="
                    `<img src='img/trophees-make-it-simple.png' alt='Make it simple'/>`
                "
                :ctaModal="[
                    {
                        type: 'play',
                        label: `Trophées Make It Simple`,
                        url: 'https://www.youtube.com/watch?v=NvrKGm14-8g'
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
                :theme="'secondary'"
                :filters="['Banque', 'Tendances', 'Évènements']"
                :height="'small'"
                :content="
                    `<h2><strong>9</strong> entités du Groupe BPCE</h2><p>réunies pour le 5<sup>ème</sup> Hackathon Banque Populaire</p>`
                "
                :hasModal="true"
                :titleModal="
                    `9 entités du Groupe BPCE réunies pour le 5ème Hackathon Banque Populaire`
                "
                :col1Modal="
                    `<p>La 5ème édition du Hackathon Banque Populaire a réuni 30 participants représentant 9 entités du groupe et plus de 20 métiers. Ils étaient invités à répondre à la problématique suivante « comment réduire, grâce au digital, l’impact environnemental de nos collaborateurs ? ».</p><p>Le projet victorieux, e-green s’appuie sur un assistant intégré à la messagerie permettant de maîtriser la taille des mails envoyés, associé à un tableau de bord individuel et un challenge collectif visant à réduire de 10 % le volume de mails stockés par les collaborateurs.</p>`
                "
                :col2Modal="`<img src='img/hackathon5.png' alt='Hackaton 5'/>`"
                :ctaModal="[
                    {
                        type: 'twitter',
                        label: `Hackathon 5`,
                        url: 'https://twitter.com/HackathonBP'
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
                    `<h2><strong>6</strong> banques impliquées</h2><p>dans les deux opérations de fusion menées en 2018</p>`
                "
                :illusUrl="'img/dalle_03_fusion_V2_colo.svg'"
                :hasModal="true"
                :titleModal="
                    `6 banques impliquées dans les 2 opérations de fusion menées en 2018`
                "
                :col1Modal="
                    `<p>Deux importants projets de fusion, Banque Populaire Grand Ouest et Banque Populaire Aquitaine Centre Atlantique, ont été menés avec succès et avec des niveaux de performance jamais atteints auparavant. Le professionnalisme des équipes i&#8209;BP et la maîtrise de travaux mobilisant de multiples acteurs du groupe se sont de nouveau concrétisés, au service des banques.</p>`
                "
                :col2Modal="`<img src='img/dalle_03_fusion_V2_colo.svg'/>`"
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
                :ctaModalCol="1"
            />
            <Tile
                :theme="'quinary'"
                :filters="['Banque', 'Performances']"
                :content="
                    `<h2><strong class='small'>23&nbsp;000</strong> jours homme</h2><p>pour le Plan Informatique Annuel</p>`
                "
                :hasModal="true"
                :titleModal="
                    `23 000 jours homme pour le Plan Informatique Annuel`
                "
                :col1Modal="
                    `<p>De nombreux projets se sont concrétisés par des livraisons aux Banques Populaires, dont les enjeux sont l'autonomie du client, l'efficacité des outils collaborateurs, l'harmonisation avec le Groupe BPCE et la réponse aux exigences de conformité. L'efficacité core banking et la digitalisation restent au cœur de la stratégie.</p>`
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
                        url: 'pdf/PIA-2018.pdf'
                    }
                ]"
                :ctaModalCol="2"
            />
            <Tile
                :theme="'white'"
                :altTheme="'secondary'"
                :filters="['Banque', 'Évènements']"
                :height="'big'"
                :content="
                    `<h2><strong class='small'>10</strong> ans de la plateforme LAB*</h2><p>*Lutte Anti-Blanchiment</p>`
                "
                :illusUrl="'img/dalle_09_anniv_colo_V2.svg'"
                :cta="[
                    {
                        type: 'micro',
                        label: `Une belle aventure`,
                        url: 'pdf/IBP_interview_lab.pdf'
                    }
                ]"
            />
            <Tile
                :theme="'tertiary'"
                :filters="['Banque', 'Performances']"
                :height="'big'"
                :content="
                    `<h2><strong class='regular'>358,7</strong> millions d’euros</h2><p>de chiffre d’affaires toutes activités confondues</p>`
                "
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
        this.$store.commit("setActiveFilter", 3);
    }
};
</script>

<style lang="scss" scoped>
</style>
