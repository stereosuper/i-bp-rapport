<template>
    <div class="wrapper-tiles">
        <Tile
            :theme="'tertiary'"
            :filters="['Transformation', 'Événement']"
            :content="
                `<h2><strong>22</strong> couleurs pour le nouveau nuancier d'i-BP.</h2>`
            "
        />
        <Tile
            :theme="'white'"
            :filters="['Banque', 'Performances']"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>37<span>%</span></strong> de femmes dans nos effectifs</h2><p>i-BP poursuit sa politique en faveur de la mixité et de l’égalité professionnelle.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'white'"
            :altTheme="'tertiary'"
            :filters="['Tendances']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>1000</strong> followers Twitter en mars 2018</h2>`
            "
            :illusUrl="'img/twitter-followers.svg'"
            :social="true"
        />
        <Tile
            :theme="'primary'"
            :filters="['Inside']"
            :height="'big'"
            :content="
                `<h2><strong>61</strong> C'est le nombre d'évènements auxquels i-BP a participé au titre de la marque employeur.</h2>`
            "
        />
        <Tile
            :theme="'white'"
            :altTheme="'secondary'"
            :filters="['Banque', 'Évènement']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>10</strong> ans de la plateforme LAB*</h2><p>*Lutte Anti-Blanchiment</p>`
            "
            :illusUrl="'img/twitter-followers.svg'"
            :cta="{
                type: 'file',
                label: `L'interview`,
                url: '#'
            }"
        />
        <Tile
            :theme="'white'"
            :filters="['Inside', 'Tendances']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>20</strong> films métiers</h2><p>Diffusées en interne lors de sémaines thématiques.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'primary-alt-light'"
            :filters="['Tendances', 'Banque', 'Événement']"
            :height="'small'"
            :content="
                `<h2>Un collaborateur i-BP parmi les lauréats du prix des collaborateurs.</h2>`
            "
            :logoUrl="'img/trophees-make-it-simple.png'"
        />
        <Tile
            :theme="'secondary'"
            :filters="['Tendances']"
            :height="'small'"
            :content="
                `<h2><strong>15</strong> engagements pour l'équilibre des temps de vie</h2>`
            "
        />
        <Tile
            :theme="'white'"
            :filters="['Inside']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong>6</strong> banques</h2><p>impliquées dans les deux opérations de fusion menées en 2018.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'primary-alt-light'"
            :filters="['Tendances', 'Événement']"
            :height="'small'"
            :content="
                `<h2>Le Centre d’Expertise Sécurité Métier voit le jour</h2>`
            "
            :logoUrl="'img/logo-cesm-small.png'"
        />
        <Tile
            :theme="'white'"
            :filters="[
                'Inside',
                'Tendances',
                'Banque',
                'Performances',
                'Transformation',
                'Événements'
            ]"
            :height="'small'"
            :twoCols="true"
            :content="
                `<blockquote><p>L’année 2018 aura été pour i-BP une année enthousiasmante</p></blockquote>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'quaternary'"
            :filters="[
                'Transformation',
                'Banque',
                'Performances',
                'Inside',
                'Tendances'
            ]"
            :height="'small'"
            :content="
                `<h2><strong>3<sup>e</sup></strong> année pour Osons, autrement</h2>`
            "
        />
        <Tile
            :theme="'white'"
            :filters="['Transformation', 'Performances']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>14</strong> chantiers</h2><p>du groupe d’action informatique.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'white'"
            :filters="['Transformation', 'Événements']"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>48</strong> Collaborateurs</h2><p>CDI pour la Direction Edition logicielle Data au 31/12/18.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'primary'"
            :filters="['Transformation']"
            :content="
                `<h2><strong>23</strong> mille jours homme pour le plan informatique annuel</h2>`
            "
        />
        <Tile
            :theme="'primary-alt-light'"
            :filters="['Tendances', 'Banque', 'Événement']"
            :height="'small'"
            :content="
                `<h2>9 entités du Groupe BPCE réunies pour le  5ème hackathon Banque Populaire</h2>`
            "
            :logoUrl="'img/logo-groupe-bpce.png'"
        />
        <Tile
            :theme="'white'"
            :filters="['Inside']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>245</strong> personnes</h2><p>présentes aux journées handicap et QVT.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'white'"
            :altTheme="'secondary'"
            :filters="['Performances', 'Transformation']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>15</strong> cadrages accompagnés par les coach agiles</h2>`
            "
            :illusUrl="'img/twitter-followers.svg'"
        />
        <Tile
            :theme="'tertiary'"
            :filters="['Banque', 'Performances']"
            :height="'big'"
            :content="
                `<h2><strong class='medium'>359</strong> millions d’euros de chiffre d’affaires en 2018, toutes activités confondues</h2>`
            "
            :titleFilled="true"
        />
        <Tile
            :theme="'white'"
            :altTheme="'tertiary'"
            :filters="['Tendances', 'Événement']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>02</strong> numéros pour un nouveau magazine</h2>`
            "
            :illusUrl="'img/twitter-followers.svg'"
        />
        <Tile
            :theme="'white'"
            :filters="['Inside']"
            :height="'big'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>75</strong> recrutements CDI</h2><p>Près de 30 % des embauches externes ont été réalisées via Linkedin et plus de 15 % sont le résultat d’une cooptation.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
        />
        <Tile
            :theme="'white'"
            :altTheme="'quaternary'"
            :filters="['Performances', 'Banque']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>6400</strong> mètres carrés</h2>`
            "
            :illusUrl="'img/twitter-followers.svg'"
        />
    </div>
</template>

<script>
import Tile from "~/components/Tiles/Tile";

export default {
    components: {
        Tile
    }
};
</script>

<style lang="scss" scoped>
.wrapper-tiles {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    border-bottom: 1px solid $primary-x-light;
    border-left: 1px solid $primary-x-light;
}
</style>
