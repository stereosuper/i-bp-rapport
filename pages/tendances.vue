<template>
    <div class="wrapper-tiles">
        <Tile
            :theme="'white'"
            :alt-theme="'quinary'"
            :filters="['Inside', 'Tendances']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>20</strong> films métiers</h2><p>Diffusés lors des semaines thématiques.</p>`
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
            :altTheme="'tertiary'"
            :filters="['Tendances', 'Évènements']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>02</strong> numéros pour un nouveau magazine</h2>`
            "
            :illusUrl="'img/dalle_10_d-code_colo.svg'"
            :hasModal="true"
            :titleModal="`2 numéros pour un nouveau magazine`"
            :col1Modal="
                `<p>D-CODE décode, chaque semestre, une grande thématique. Le premier numéro, sorti en janvier 2018, aborde la cyber-sécurité sous bien des angles et le numéro 2 décrypte la culture de l’open. Il s'inscrit sur des thématiques métier, traitant de sujets stratégiques, de transformation et d'ouverture à l'écosystème d'i&#8209;BP et du groupe. Les thématiques traitées répondent à des attentes des collaborateurs.</p>`
            "
            :col2Modal="
                `<p>Pensé comme formant une collection, D-CODE est réalisé sur support papier (recyclé). C'est un objet qui se conserve, se consulte, se lit et se relit.</p>`
            "
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
            :ctaModalCol="2"
        />
        <Tile
            :theme="'secondary'"
            :filters="['Banque', 'Tendances', 'Évènements']"
            :height="'big'"
            :content="
                `<h2><strong>9</strong> entités du Groupe BPCE réunies pour le 5ème hackathon Banque
                Populaire</h2>`
            "
            :hasModal="true"
            :titleModal="
                `9 entités du Groupe BPCE réunies pour le 5ème Hackathon Banque Populaire`
            "
            :col1Modal="
                `<p>La 5ème édition du Hackathon Banque Populaire a réuni 30 participants représentant 9 entités du groupe et plus de 20 métiers. Ils étaient invités à répondre à la problématique suivante « comment réduire, grâce au digital, l’impact environnemental de nos collaborateurs ? ».</p>`
            "
            :col2Modal="
                `<p>Le projet victorieux, eGreen s’appuie sur un assistant intégré à la messagerie permettant de maîtriser la taille des mails envoyés, associé à un tableau de bord individuel et un challenge collectif visant à réduire de 10 % le volume de mails stockés par les collaborateurs.</p>`
            "
            :ctaModal="[
                {
                    type: 'twitter',
                    label: `Hackathon 5`,
                    url: 'https://twitter.com/HackathonBP'
                }
            ]"
            :ctaModalCol="2"
        />
        <Tile
            :theme="'white'"
            :altTheme="'quaternary-dark'"
            :filters="['Tendances']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>1000</strong> followers sur Twitter en mars 2018</h2>`
            "
            :illusUrl="'img/dalle_04_colo_V2.svg'"
            :social="true"
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
                `10 janvier, lancement du Centre d’Expertise Sécurité métier.`
            "
            :col1Modal="
                `<p>Le Centre d’Expertise Sécurité Métier voit le jour dans le cadre de la DSI Retail, afin de mieux répondre aux nouveaux enjeux de la cybersécurité : soutenir la transformation digitale, se prémunir contre les cyberattaques ou encore renforcer notre capacité à les détecter comme à y réagir.</p>`
            "
            :col2Modal="
                `<p>Ses missions ? Accompagner les projets de la DSI Retail et la 89C3, en intégrant une expertise sécurité forte dès les premières phases, promouvoir le développement sécurisé mais aussi favoriser la lutte contre la fraude et la sensibilisation à la sécurité.</p>`
            "
            :ctaModal="[
                {
                    type: 'file',
                    label: `La sécurité informatique dans le Groupe BPCE`,
                    url: 'pdf/Securite-informatique-Groupe-BPCE.pdf'
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
                `<p>Démarré en 2016, il a pour objectif la satisfaction des Banques Populaires en améliorant la qualité de leur système d’information Equinoxe, en le simplifiant, et en l’enrichissant au plus proche de leurs besoins et de ceux de leurs clients, dans des délais plus courts. Des chantiers ont également été menés à destination des collaborateurs d’i&#8209;BP : simplification des processus administratifs, création d’espaces de travail et d’échanges collaboratifs, accès à la formation digitale.</p>`
            "
            :col2Modal="
                `<p>Une filière d’excellence pour les métiers du développement a été créée. L’année 2018 a été axée sur le déploiement et l’appropriation des pratiques, des méthodes et des outils développés par les chantiers dans le cadre des deux premières feuilles de route d’Osons, autrement.</p>`
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
            :theme="'primary-alt-light'"
            :filters="['Banque', 'Tendances', 'Évènements']"
            :height="'small'"
            :content="`<h2>1 collaborateur i&#8209;BP parmi les lauréats</h2>`"
            :logoUrl="'img/trophees-make-it-simple.png'"
            :hasModal="true"
            :titleModal="`1 collaborateur i-BP parmi les lauréats `"
            :col1Modal="
                `<p>Les Trophées Make it Simple 2018 affichent un leitmotiv : encourager et valoriser les projets des collaborateurs du Groupe BPCE permettant de « faire plus simple ». Plus simple au bénéfice des clients, des collaborateurs, de l’entreprise et de ses partenaires au sens large.</p>`
            "
            :col2Modal="
                `<p>C’est le projet de l’équipe Banque Populaire Rives de Paris / i&#8209;BP qui a remporté le prix des collaborateurs. Il vise à soulager les équipes commerciales en agences de certains types de mails et dégager du temps commercial pour les clients grâce à un traitement centralisé des mails d’agences vers les « Middle Offices Commerciaux ».</p>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `Trophées Make It Simple`,
                    url: 'https://youtu.be/NvrKGm14-8g'
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
        this.$store.commit("setActiveFilter", 6);
    }
};
</script>

<style lang="scss" scoped>
</style>
