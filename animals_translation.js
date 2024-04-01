function changeLanguage(language) {
    const title = document.getElementById('zooTitle');
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const animalsLink = document.getElementById('animalsLink');
    const contactLink = document.getElementById('contactLink');
    const dropdownToggle = document.getElementById('navbarDropdown');

    if (language === 'english') {
        title.innerText = 'Zoo Jurassic Park';
        dropdownToggle.innerText = 'English';
        homeLink.innerText = 'Home';
        aboutLink.innerText = 'About';
        animalsLink.innerText = 'Animals';
        contactLink.innerText = 'Contact';

        // Footer translations
        document.getElementById('zooDepartmentTitle').innerText = 'Zoo Department';
        document.getElementById('zooOpeningHoursTitle').innerText = 'Opening hours:';
        document.getElementById('zooEmailTitle').innerText = 'Email:';
        document.getElementById('zooPhoneNumberTitle').innerText = 'Phone Number:';
        document.getElementById('activityDepartmentTitle').innerText = 'Activity Department';
        document.getElementById('activityHoursTitle').innerText = 'Activity hours:';
        document.getElementById('activityEmailTitle').innerText = 'Email:';
        document.getElementById('activityPhoneNumberTitle').innerText = 'Phone Number:';
        document.getElementById('veterinarianCentreTitle').innerText = 'Veterinarian Centre';
        document.getElementById('vetOpeningHoursTitle').innerText = 'Opening hours:';
        document.getElementById('vetEmailTitle').innerText = 'Email:';
        document.getElementById('vetPhoneNumberTitle').innerText = 'Phone Number:';
        document.getElementById('childCareTitle').innerText = 'Child Care';
        document.getElementById('childCareOpeningHoursTitle').innerText = 'Opening hours:';
        document.getElementById('childCareEmailTitle').innerText = 'Email:';
        document.getElementById('childCarePhoneNumberTitle').innerText = 'Phone Number:';
        translateAnimalTexts('english');
    } else if (language === 'french') {
        title.innerText = 'Zoo Jurassic Park';
        dropdownToggle.innerText = 'Français';
        homeLink.innerText = 'Accueil';
        aboutLink.innerText = 'À propos';
        animalsLink.innerText = 'Animaux';
        contactLink.innerText = 'Contact';
        // Footer translations
        document.getElementById('zooDepartmentTitle').innerText = 'Département du zoo';
        document.getElementById('zooOpeningHoursTitle').innerText = 'Heures d\'ouverture :';
        document.getElementById('zooEmailTitle').innerText = 'Email :';
        document.getElementById('zooPhoneNumberTitle').innerText = 'Numéro de téléphone :';
        document.getElementById('activityDepartmentTitle').innerText = 'Département d\'activité';
        document.getElementById('activityHoursTitle').innerText = 'Heures d\'activité :';
        document.getElementById('activityEmailTitle').innerText = 'Email :';
        document.getElementById('activityPhoneNumberTitle').innerText = 'Numéro de téléphone :';
        document.getElementById('veterinarianCentreTitle').innerText = 'Centre vétérinaire';
        document.getElementById('vetOpeningHoursTitle').innerText = 'Heures d\'ouverture :';
        document.getElementById('vetEmailTitle').innerText = 'Email :';
        document.getElementById('vetPhoneNumberTitle').innerText = 'Numéro de téléphone :';
        document.getElementById('childCareTitle').innerText = 'Garde d\'enfants';
        document.getElementById('childCareOpeningHoursTitle').innerText = 'Heures d\'ouverture :';
        document.getElementById('childCareEmailTitle').innerText = 'Email :';
        document.getElementById('childCarePhoneNumberTitle').innerText = 'Numéro de téléphone :';
        translateAnimalTexts('french');
    } else if (language === 'german') {
        title.innerText = 'Zoo Jurassic Park';
        dropdownToggle.innerText = 'Deutsch';
        homeLink.innerText = 'Startseite';
        aboutLink.innerText = 'Über uns';
        animalsLink.innerText = 'Tiere';
        contactLink.innerText = 'Kontakt';
        // Footer translations
        document.getElementById('zooDepartmentTitle').innerText = 'Zooabteilung';
        document.getElementById('zooOpeningHoursTitle').innerText = 'Öffnungszeiten:';
        document.getElementById('zooEmailTitle').innerText = 'Email:';
        document.getElementById('zooPhoneNumberTitle').innerText = 'Telefonnummer:';
        document.getElementById('activityDepartmentTitle').innerText = 'Aktivitätsabteilung';
        document.getElementById('activityHoursTitle').innerText = 'Aktivitätszeiten:';
        document.getElementById('activityEmailTitle').innerText = 'Email:';
        document.getElementById('activityPhoneNumberTitle').innerText = 'Telefonnummer:';
        document.getElementById('veterinarianCentreTitle').innerText = 'Tierarztzentrum';
        document.getElementById('vetOpeningHoursTitle').innerText = 'Öffnungszeiten:';
        document.getElementById('vetEmailTitle').innerText = 'Email:';
        document.getElementById('vetPhoneNumberTitle').innerText = 'Telefonnummer:';
        document.getElementById('childCareTitle').innerText = 'Kinderbetreuung';
        document.getElementById('childCareOpeningHoursTitle').innerText = 'Öffnungszeiten:';
        document.getElementById('childCareEmailTitle').innerText = 'Email:';
        document.getElementById('childCarePhoneNumberTitle').innerText = 'Telefonnummer:';
        translateAnimalTexts('german');
    } else if (language === 'spanish') {
        title.innerText = 'Zoo Jurassic Park';
        dropdownToggle.innerText = 'Español';
        homeLink.innerText = 'Inicio';
        aboutLink.innerText = 'Sobre nosotros';
        animalsLink.innerText = 'Animales';
        contactLink.innerText = 'Contacto';
        // Footer translations
        document.getElementById('zooDepartmentTitle').innerText = 'Departamento de Zoológico';
        document.getElementById('zooOpeningHoursTitle').innerText = 'Horario de apertura:';
        document.getElementById('zooEmailTitle').innerText = 'Correo electrónico:';
        document.getElementById('zooPhoneNumberTitle').innerText = 'Número de teléfono:';
        document.getElementById('activityDepartmentTitle').innerText = 'Departamento de Actividades';
        document.getElementById('activityHoursTitle').innerText = 'Horario de actividades:';
        document.getElementById('activityEmailTitle').innerText = 'Correo electrónico:';
        document.getElementById('activityPhoneNumberTitle').innerText = 'Número de teléfono:';
        document.getElementById('veterinarianCentreTitle').innerText = 'Centro Veterinario';
        document.getElementById('vetOpeningHoursTitle').innerText = 'Horario de apertura:';
        document.getElementById('vetEmailTitle').innerText = 'Correo electrónico:';
        document.getElementById('vetPhoneNumberTitle').innerText = 'Número de teléfono:';
        document.getElementById('childCareTitle').innerText = 'Cuidado Infantil';
        document.getElementById('childCareOpeningHoursTitle').innerText = 'Horario de apertura:';
        document.getElementById('childCareEmailTitle').innerText = 'Correo electrónico:';
        document.getElementById('childCarePhoneNumberTitle').innerText = 'Número de teléfono:';
        translateAnimalTexts('spanish');
    }
}

function translateAnimalTexts(language) {
    const animals = [
        {
            name: "Tyrannosaurus Rex",
            description: {
                english: "The iconic apex predator of the Jurassic period...",
                french: "Le prédateur emblématique du sommet de la période jurassique...",
                german: "Der ikonische Spitzenräuber des Jura-Zeitalters...",
                spanish: "El icónico depredador máximo del período Jurásico..."
            }
        },
        {
            name: "Velociraptor",
            description: {
                english: "Swift and cunning, the Velociraptor was a pack-hunting carnivore...",
                french: "Rapide et rusé, le Vélociraptor était un carnivore chasseur en meute...",
                german: "Schnell und listig war der Velociraptor ein Rudel jagender Fleischfresser...",
                spanish: "Veloz y astuto, el Velociraptor era un carnívoro cazador de manadas..."
            }
        },
        {
            name: "Triceratops",
            description: {
                english: "The Triceratops was a massive herbivore adorned with a formidable frill and three sharp horns...",
                french: "Le Tricératops était un herbivore massif orné d'une redoutable collerette et de trois cornes acérées...",
                german: "Der Triceratops war ein massiver Pflanzenfresser, geschmückt mit einer imposanten Kragen und drei scharfen Hörnern...",
                spanish: "El Triceratops era un herbívoro masivo adornado con una formidable gola y tres cuernos afilados..."
            }
        },
        {
            name: "Stegosaurus",
            description: {
                english: "With its distinctive double row of bony plates along its back and spiked tail...",
                french: "Avec sa double rangée distinctive de plaques osseuses le long de son dos et sa queue épineuse...",
                german: "Mit seiner charakteristischen doppelten Reihe von Knochenplatten entlang seines Rückens und dem stacheligen Schwanz...",
                spanish: "Con su distintiva doble fila de placas óseas a lo largo de su espalda y cola espinosa..."
            }
        },
        {
            name: "Brachiosaurus",
            description: {
                english: "Towering over the Jurassic landscape, the Brachiosaurus was one of the largest land animals to ever roam the Earth...",
                french: "Dominant le paysage jurassique, le Brachiosaure était l'un des plus grands animaux terrestres à avoir jamais parcouru la Terre...",
                german: "Der über die jurassische Landschaft aufragende Brachiosaurus war eines der größten landlebenden Tiere, die jemals die Erde durchstreiften...",
                spanish: "Dominando el paisaje jurásico, el Brachiosaurus fue uno de los animales terrestres más grandes que jamás haya vagado por la Tierra..."
            }
        },
        {
            name: "Dilophosaurus",
            description: {
                english: "Sporting a distinctive pair of crests on its head and a colorful frill around its neck...",
                french: "Arborant une paire distinctive de crêtes sur sa tête et une collerette colorée autour de son cou...",
                german: "Mit einer charakteristischen Doppelkamm auf dem Kopf und einer bunten Kragen um den Hals...",
                spanish: "Con una distintiva pareja de crestas en la cabeza y una colorida gola alrededor del cuello..."
            }
        },
        {
            name: "Pteranodon",
            description: {
                english: "Taking to the skies with grace and power, the Pteranodon was a majestic flying reptile of the Late Cretaceous period...",
                french: "S'envolant avec grâce et puissance, le Ptéranodon était un majestueux reptile volant du Crétacé supérieur...",
                german: "Mit Anmut und Kraft in die Lüfte steigend, war der Pteranodon ein majestätisches fliegendes Reptil aus der oberen Kreidezeit...",
                spanish: "Elevándose a los cielos con gracia y poder, el Pteranodon era un majestuoso reptil volador del período Cretácico tardío..."
            }
        },
        {
            name: "Ankylosaurus",
            description: {
                english: "Armored like a walking fortress, the Ankylosaurus was a heavily built herbivore equipped with thick, bony plates and a club-like tail...",
                french: "Protégé comme une forteresse ambulante, l'Ankylosaurus était un herbivore lourdement construit équipé de plaques osseuses épaisses et d'une queue en forme de massue...",
                german: "Gepanzert wie eine wandernde Festung, war der Ankylosaurus ein schwer gebauter Pflanzenfresser, ausgestattet mit dicken, knöchernen Platten und einem keulenartigen Schwanz...",
                spanish: "Blindado como una fortaleza ambulante, el Ankylosaurus era un herbívoro pesadamente construido equipado con placas óseas gruesas y una cola en forma de maza..."
            }
        },
        {
            name: "Parasaurolophus",
            description: {
                english: "Known for its iconic elongated crest, the Parasaurolophus was a herbivorous dinosaur of the Late Cretaceous period...",
                french: "Connu pour sa crête allongée emblématique, le Parasaurolophus était un dinosaure herbivore du Crétacé supérieur...",
                german: "Bekannt für seine ikonische, verlängerte Krone, war der Parasaurolophus ein pflanzenfressender Dinosaurier aus der oberen Kreidezeit...",
                spanish: "Conocido por su icónica cresta alargada, el Parasaurolophus era un dinosaurio herbívoro del período Cretácico tardío..."
            }
        }
    ];
    const animalCards = document.querySelectorAll('.card-body');

    animalCards.forEach((card, index) => {
        const animal = animals[index];
        card.querySelector('strong').innerText = animal.name;
        card.querySelector('.card-text').innerText = animal.description[language];
    });
}
