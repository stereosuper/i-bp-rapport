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
                :filters="['Tendances', 'Évènements']"
                :height="'small'"
                :content="
                    `<h2><strong class='medium'>10</strong> janvier</h2><p>lancement du Centre d’Expertise Sécurité Métier</p>`
                "
                :logoUrl="'img/logo-cesm-small.png'"
                :hasModal="true"
                :titleModal="
                    `10 janvier, lancement du Centre d’Expertise Sécurité métier`
                "
                :col1Modal="
                    `<p>Le Centre d’Expertise Sécurité Métier voit le jour dans le cadre de la DSI Retail, afin de mieux répondre aux nouveaux enjeux de la cybersécurité : soutenir la transformation digitale, se prémunir contre les cyberattaques ou encore renforcer notre capacité à les détecter comme à y réagir.</p><p>Ses missions ? Accompagner les projets de la DSI Retail et la 89C3, en intégrant une expertise sécurité forte dès les premières phases, promouvoir le développement sécurisé mais aussi favoriser la lutte contre la fraude et la sensibilisation à la sécurité.</p>`
                "
                :col2Modal="
                    `<img src='img/logo-cesm-small.png' alt='Logo CESM'/>`
                "
                :ctaModal="[
                    {
                        type: 'file',
                        label: `La sécurité informatique dans le Groupe BPCE`,
                        url: 'pdf/Securite-informatique-Groupe-BPCE.pdf'
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
                :altTheme="'tertiary'"
                :filters="['Tendances', 'Évènements']"
                :height="'big'"
                :content="
                    `<h2><strong class='small'>2</strong> numéros</h2><p>pour un nouveau magazine</p>`
                "
                :illusUrl="'img/dalle_10_d-code_colo.svg'"
                :hasModal="true"
                :titleModal="`2 numéros pour un nouveau magazine`"
                :col1Modal="
                    `<p>D-CODE décode, chaque semestre, une grande thématique. Le premier numéro, sorti en janvier 2018, aborde la cyber-sécurité sous bien des angles et le numéro 2 décrypte la culture de l’open. Il s'inscrit sur des thématiques métier, traitant de sujets stratégiques, de transformation et d'ouverture à l'écosystème d'i&#8209;BP et du groupe. Les thématiques traitées répondent à des attentes des collaborateurs.</p><p>Pensé comme formant une collection, D-CODE est réalisé sur support papier (recyclé). C'est un objet qui se conserve, se consulte, se lit et se relit.</p>`
                "
                :col2Modal="`<img src='img/dalle_10_d-code_colo.svg'/>`"
                :ctaModal="[
                    {
                        type: 'file',
                        label: `D-CODE #1`,
                        url: 'pdf/D-CODE1.pdf'
                    },
                    {
                        type: 'file',
                        label: `D-CODE #2`,
                        url: 'pdf/D-CODE2.pdf'
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
        this.$store.commit("setActiveFilter", 4);
    }
};
</script>

<style lang="scss" scoped>
</style>
