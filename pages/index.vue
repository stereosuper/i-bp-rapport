<template>
    <div class="wrapper-tiles">
        <Tile
            :theme="'tertiary'"
            :filters="['Transformation', 'Évènements']"
            :content="
                `<h2><strong>22</strong> couleurs pour le nouveau nuancier d'i&#8209;BP</h2>`
            "
            :hasModal="true"
            :titleModal="`22 couleurs pour le nouveau nuancier d’i&#8209;BP`"
            :col1Modal="
                `<p>i&#8209;BP change de logo ! La nouvelle identité est en cohérence avec le paysage de marque du groupe, et affirme notre place aux côtés des banques, mais en marquant notre spécificité métier.</p>`
            "
            :ctaModal="[
                {
                    type: 'file',
                    label: `Une nouvelle identité`,
                    url: '#'
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
                `<h2><strong class='medium'>37<span>%</span></strong> de femmes dans nos effectifs</h2><p>i&#8209;BP poursuit sa politique en faveur de la mixité et de l’égalité professionnelle.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
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
                    url: '#'
                }
            ]"
            :ctaModalCol="1"
        />
        <Tile
            :theme="'white'"
            :altTheme="'quaternary-dark'"
            :filters="['Tendances']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>1000</strong> followers Twitter en mars 2018</h2>`
            "
            :illusUrl="'img/twitter-followers.svg'"
            :social="true"
            :hasModal="true"
            :titleModal="`1000 followers sur Twitter en mars 2018`"
            :col1Modal="`<p>Retrouvez-nous sur nos réseaux !</p>`"
            :ctaModal="[
                {
                    type: 'twitter',
                    label: `@InformatiqueBP #iBP`,
                    url: 'https://twitter.com/informatiquebp?lang=fr'
                },
                {
                    type: 'linkedin',
                    label: `Informatique Banque Populaire`,
                    url:
                        'https://www.linkedin.com/company/informatique-banque-populaire/?originalSubdomain=fr'
                },
                {
                    type: 'link',
                    label: `www.informatique.banquepopulaire.fr`,
                    url: 'www.informatique.banquepopulaire.fr'
                }
            ]"
            :ctaModalCol="1"
        />
        <Tile
            :theme="'quinary'"
            :filters="['Inside', 'Évènements']"
            :height="'big'"
            :content="
                `<h2><strong>61</strong> C'est le nombre d'évènements auxquels i&#8209;BP a participé au titre de la marque employeur.</h2>`
            "
            :hasModal="true"
            :titleModal="
                `61 évènements auxquels i&#8209;BP a participé au titre de la marque employeur`
            "
            :col1Modal="
                `<p>La marque employeur a permis d’accentuer la notoriété de l'entreprise sur ses métiers, notamment sur la filière de développement, et sur ses territoires. i&#8209;BP existe désormais au-delà de son écosystème naturel. i&#8209;BP a participé en 2018 aux DevFest de Nantes et Toulouse qui ont rassemblé plusieurs milliers de développeurs, au salon de la Data lors de Nantes Digital Week ou à des évènements sur la sécurité informatique. Les relations écoles ont aussi été développées au plus près des sites et des métiers.</p>`
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
            :illusUrl="'img/twitter-followers.svg'"
            :cta="[
                {
                    type: 'file',
                    label: `Une belle aventure`,
                    url: '#'
                }
            ]"
        />
        <Tile
            :theme="'white'"
            :alt-theme="'quinary'"
            :filters="['Inside', 'Tendances']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>20</strong> films métiers</h2><p>Diffusés lors des semaines thématiques.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
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
            :ctaModalCol="1"
        />
        <Tile
            :theme="'primary-alt-light'"
            :filters="['Banque', 'Tendances', 'Évènements']"
            :height="'small'"
            :content="`<h2>Un collaborateur i&#8209;BP parmi les lauréats</h2>`"
            :logoUrl="'img/trophees-make-it-simple.png'"
            :hasModal="true"
            :titleModal="`1 collaborateur i&#8209;BP parmi les lauréats `"
            :col1Modal="
                `<p>Les Trophées Make it Simple 2018 affichent un leitmotiv : encourager et valoriser les projets des collaborateurs du Groupe BPCE permettant de « faire plus simple ». Plus simple au bénéfice des clients, des collaborateurs, de l’entreprise et de ses partenaires au sens large.</p>
                <p>C’est le projet de l’équipe Banque Populaire Rives de Paris / i&#8209;BP qui a remporté le prix des collaborateurs. Il vise à soulager les équipes commerciales en agences de certains types de mails et dégager du temps commercial pour les clients grâce à un traitement centralisé des mails d’agences vers les « Middle Offices Commerciaux ».</p>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `Trophées Make It Simple`,
                    url: 'https://youtu.be/NvrKGm14-8g'
                }
            ]"
            :ctaModalCol="1"
        />
        <Tile
            :theme="'secondary'"
            :filters="['Inside']"
            :height="'small'"
            :content="
                `<h2><strong>15</strong> engagements pour l'équilibre des temps de vie</h2>`
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
            :theme="'white'"
            :alt-theme="'tertiary'"
            :filters="['Banque', 'Performances']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong>6</strong> banques</h2><p>impliquées dans les deux opérations de fusion menées en 2018.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
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
                `10 janvier, lancement du Centre d’Expertise Sécurité métier.`
            "
            :col1Modal="
                `<p>Le Centre d’Expertise Sécurité Métier voit le jour dans le cadre de la DSI Retail, afin de mieux répondre aux nouveaux enjeux de la cybersécurité : soutenir la transformation digitale, se prémunir contre les cyberattaques ou encore renforcer notre capacité à les détecter comme à y réagir. Ses missions ? Accompagner les projets de la DSI Retail et la 89C3, en intégrant une expertise sécurité forte dès les premières phases, promouvoir le développement sécurisé mais aussi favoriser la lutte contre la fraude et la sensibilisation à la sécurité.</p>`
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
            :theme="'white'"
            :filters="[
                'Banque',
                'Performances',
                'Inside',
                'Transformation',
                'Tendances',
                'Évènements'
            ]"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>2018</strong> une année enthousiasmante</h2>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
            :hasModal="true"
            :titleModal="`2018, une année enthousiasmante`"
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
            :theme="'white'"
            :alt-theme="'tertiary'"
            :filters="['Banque', 'Transformation']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>14</strong> chantiers</h2><p>du Groupe d’Action Informatique.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
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
            :ctaModalCol="1"
        />
        <Tile
            :theme="'white'"
            :alt-theme="'tertiary'"
            :filters="['Transformation', 'Évènements']"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>48</strong> Collaborateurs</h2><p>pour la Direction Edition logicielle Data au 31/12/18.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
            :hasModal="true"
            :titleModal="
                `48 collaborateurs pour la Direction Édition logicielle Data *au 31/12/2018`
            "
            :col1Modal="
                `<p>La Data, nouveau moteur de croissance pour le Groupe BPCE, constitue un sujet stratégique dans lequel i&#8209;BP s’est investi en créant une direction dédiée. Un de ces objectifs est d'assurer la mise en œuvre de la gouvernance des données. Les premiers résultats obtenus en 2018 vont irradier vers les banques et le groupe.</p>`
            "
            :ctaModal="[
                {
                    type: 'play',
                    label: `#WeRData`,
                    url: 'https://youtu.be/41nIjRxklM8'
                },
                {
                    type: 'file',
                    label: `11 ans dans la Data`,
                    url: '#'
                }
            ]"
            :ctaModalCol="1"
        />
        <Tile
            :theme="'quinary'"
            :filters="['Banque', 'Performances']"
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
            :ctaModalCol="1"
        />
        <Tile
            :theme="'secondary'"
            :filters="['Banque', 'Tendances', 'Évènements']"
            :height="'small'"
            :content="
                `<h2><strong>9</strong> entités du Groupe BPCE réunies pour le 5ème hackathon Banque
                Populaire</h2>`
            "
            :hasModal="true"
            :titleModal="
                `9 entités du Groupe BPCE réunies pour le 5ème Hackathon Banque Populaire`
            "
            :col1Modal="
                `<p>La 5ème édition du Hackathon Banque Populaire a réuni 30 participants représentant 9 entités du groupe et plus de 20 métiers. Ils étaient invités à répondre à la problématique suivante « comment réduire, grâce au digital, l’impact environnemental de nos collaborateurs ? ». Le projet victorieux, eGreen s’appuie sur un assistant intégré à la messagerie permettant de maîtriser la taille des mails envoyés, associé à un tableau de bord individuel et un challenge collectif visant à réduire de 10 % le volume de mails stockés par les collaborateurs.</p>`
            "
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
            :alt-theme="'quinary'"
            :filters="['Inside']"
            :height="'small'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>245</strong> participants</h2><p>pour les journées handicap et Qualité de Vie au Travail.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
            :hasModal="true"
            :titleModal="
                `245 personnes aux journées handicap et Qualité de Vie au Travail`
            "
            :col1Modal="
                `<p>Un programme zen et pédagogique concocté par les référentes Handicap et Qualité de Vie au Travail. Échanges, quiz, jeu collaboratif… mais aussi des ateliers animés par des praticiens déficients visuels, autant d’idées originales pour sensibliser les collaborateurs. Ce road trip sur les six sites d’i&#8209;BP s’est terminé par un évènement exceptionnel, la conférence à Dijon de Manon Genest, championne du monde de para-triathlon et vice-championne d’Europe en para-athlétisme, sur le thème « Handicap et Performance ».</p>`
            "
            :ctaModal="[
                {
                    type: 'twitter',
                    label: `Témoignage inspirant`,
                    url:
                        'https://twitter.com/InformatiqueBP/status/1069943964311130112'
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
                `<h2><strong class='small'>15</strong> cadrages accompagnés par les coach agiles</h2>`
            "
            :illusUrl="'img/twitter-followers.svg'"
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
            :ctaModalCol="1"
        />
        <Tile
            :theme="'tertiary'"
            :filters="['Banque', 'Performances']"
            :height="'big'"
            :content="
                `<h2><strong class='medium'>359</strong> millions d’euros de chiffre d’affaires toutes activités confondues</h2>`
            "
        />
        <Tile
            :theme="'white'"
            :altTheme="'tertiary'"
            :filters="['Tendances', 'Évènements']"
            :height="'big'"
            :content="
                `<h2><strong class='small'>02</strong> numéros pour un nouveau magazine</h2>`
            "
            :illusUrl="'img/twitter-followers.svg'"
            :hasModal="true"
            :titleModal="`2 numéros pour un nouveau magazine`"
            :col1Modal="
                `<p>D-CODE décode, chaque semestre, une grande thématique. Le premier numéro, sorti en janvier 2018, aborde la cyber-sécurité sous bien des angles et le numéro 2 décrypte la culture de l’open. Il s'inscrit sur des thématiques métier, traitant de sujets stratégiques, de transformation et d'ouverture à l'écosystème d'i&#8209;BP et du groupe. Les thématiques traitées répondent à des attentes des collaborateurs.</p>
                <p>Pensé comme formant une collection, D-CODE est réalisé sur support papier (recyclé). C'est un objet qui se conserve, se consulte, se lit et se relit.</p>`
            "
            :ctaModal="[
                {
                    type: 'file',
                    label: `D-CODE #1`,
                    url: 'pdf/D-CODE#1.pdf'
                },
                {
                    type: 'file',
                    label: `D-CODE #2`,
                    url: 'pdf/D-CODE#2.pdf'
                }
            ]"
            :ctaModalCol="1"
        />
        <Tile
            :theme="'white'"
            :alt-theme="'quaternary-dark'"
            :filters="['Inside']"
            :height="'big'"
            :twoCols="true"
            :content="
                `<h2><strong class='medium'>75</strong> recrutements CDI</h2><p>Près de 30 % des embauches externes ont été réalisées via Linkedin et plus de 15 % sont le résultat d’une cooptation.</p>`
            "
            :illusUrl="'img/femmes-effectifs.svg'"
            :hasModal="true"
            :titleModal="
                `75 recrutements CDI  30 % des embauches externes via LinkedIn`
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
                    type: 'file',
                    label: `Ils ont testé`,
                    url: '#'
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
            :illusUrl="'img/twitter-followers.svg'"
            :hasModal="true"
            :titleModal="
                `6400 mètres carrés d’espaces de travail collaboratifs`
            "
            :col1Modal="
                `<p>Après Toulouse en 2017, de nouveaux espaces de travail sont aménagés à Paris et la construction d’un bâtiment est lancée à Nantes. Ces espaces favorisent le travail en mode collaboratif et répondent aux pratiques des équipes : laboratoires d’expérimentation, agilité, design thinking, test and learn...</p>`
            "
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
