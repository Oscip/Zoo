
function changeLanguage(language) {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const animalsLink = document.getElementById('animalsLink');
    const contactLink = document.getElementById('contactLink');
    const dropdownToggle = document.getElementById('navbarDropdown');

    // Translations
    const translations = {
        'english': {
            'title': 'Ankylosaurus',
            'description': `The Ankylosaurus, with its armored body and club-like tail, emerges as one of the most
                formidable and iconic dinosaurs of the Late Cretaceous period, approximately 68 to 66 million years ago.
                This tank-like herbivore, known for its distinctive appearance and defensive adaptations, roamed the
                ancient landscapes of what is now North America, leaving an indelible mark on the prehistoric world.`,
            'dropdownToggle': 'English',
            'homeLink': 'Home',
            'aboutLink': 'About',
            'animalsLink': 'Animals',
            'contactLink': 'Contact',
            'zooDepartmentTitle': 'Zoo Department',
            'zooOpeningHoursTitle': 'Opening hours:',
            'zooEmailTitle': 'Email:',
            'zooPhoneNumberTitle': 'Phone Number:',
            'activityDepartmentTitle': 'Activity Department',
            'activityHoursTitle': 'Activity hours:',
            'activityEmailTitle': 'Email:',
            'activityPhoneNumberTitle': 'Phone Number:',
            'veterinarianCentreTitle': 'Veterinarian Centre',
            'vetOpeningHoursTitle': 'Opening hours:',
            'vetEmailTitle': 'Email:',
            'vetPhoneNumberTitle': 'Phone Number:',
            'childCareTitle': 'Child Care',
            'childCareOpeningHoursTitle': 'Opening hours:',
            'childCareEmailTitle': 'Email:',
            'childCarePhoneNumberTitle': 'Phone Number:'
        },
        'french': {
            'title': 'Ankylosaure',
            'description': `L'Ankylosaure, avec son corps blindé et sa queue en forme de massue, émerge comme l'un des dinosaures les plus redoutables et emblématiques du Crétacé tardif, il y a environ 68 à 66 millions d'années. Cet herbivore de type char, connu pour son apparence distinctive et ses adaptations défensives, a parcouru les paysages anciens de ce qui est aujourd'hui l'Amérique du Nord, laissant une marque indélébile sur le monde préhistorique.`,
            'dropdownToggle': 'Français',
            'homeLink': 'Accueil',
            'aboutLink': 'À propos',
            'animalsLink': 'Animaux',
            'contactLink': 'Contact',
            'zooDepartmentTitle': 'Département du zoo',
            'zooOpeningHoursTitle': 'Heures d\'ouverture :',
            'zooEmailTitle': 'Email :',
            'zooPhoneNumberTitle': 'Numéro de téléphone :',
            'activityDepartmentTitle': 'Département d\'activité',
            'activityHoursTitle': 'Heures d\'activité :',
            'activityEmailTitle': 'Email :',
            'activityPhoneNumberTitle': 'Numéro de téléphone :',
            'veterinarianCentreTitle': 'Centre vétérinaire',
            'vetOpeningHoursTitle': 'Heures d\'ouverture :',
            'vetEmailTitle': 'Email :',
            'vetPhoneNumberTitle': 'Numéro de téléphone :',
            'childCareTitle': 'Garde d\'enfants',
            'childCareOpeningHoursTitle': 'Heures d\'ouverture :',
            'childCareEmailTitle': 'Email :',
            'childCarePhoneNumberTitle': 'Numéro de téléphone :'
        },
        'german': {
            'title': 'Ankylosaurus',
            'description': `Der Ankylosaurus, mit seinem gepanzerten Körper und seinem keulenartigen Schwanz, gehört zu den imposantesten und ikonischsten Dinosauriern des späten Kreidezeitalters, vor etwa 68 bis 66 Millionen Jahren. Dieser panzerartige Pflanzenfresser, bekannt für sein markantes Aussehen und seine defensiven Anpassungen, durchstreifte die alten Landschaften dessen, was heute Nordamerika ist, und hinterließ einen unauslöschlichen Eindruck in der prähistorischen Welt.`,
            'dropdownToggle': 'Deutsch',
            'homeLink': 'Startseite',
            'aboutLink': 'Über uns',
            'animalsLink': 'Tiere',
            'contactLink': 'Kontakt',
            'zooDepartmentTitle': 'Zooabteilung',
            'zooOpeningHoursTitle': 'Öffnungszeiten:',
            'zooEmailTitle': 'Email:',
            'zooPhoneNumberTitle': 'Telefonnummer:',
            'activityDepartmentTitle': 'Aktivitätsabteilung',
            'activityHoursTitle': 'Aktivitätszeiten:',
            'activityEmailTitle': 'Email:',
            'activityPhoneNumberTitle': 'Telefonnummer:',
            'veterinarianCentreTitle': 'Tierarztzentrum',
            'vetOpeningHoursTitle': 'Öffnungszeiten:',
            'vetEmailTitle': 'Email:',
            'vetPhoneNumberTitle': 'Telefonnummer:',
            'childCareTitle': 'Kinderbetreuung',
            'childCareOpeningHoursTitle': 'Öffnungszeiten:',
            'childCareEmailTitle': 'Email:',
            'childCarePhoneNumberTitle': 'Telefonnummer:'
        },
        'spanish': {
            'title': 'Anquilosaurio',
            'description': `El Anquilosaurio, con su cuerpo blindado y su cola en forma de maza, emerge como uno de los dinosaurios más formidables e icónicos del período Cretácico tardío, aproximadamente hace 68 a 66 millones de años. Este herbívoro tipo tanque, conocido por su apariencia distintiva y adaptaciones defensivas, deambulaba por los paisajes antiguos de lo que hoy es América del Norte, dejando una marca indeleble en el mundo prehistórico.`,
            'dropdownToggle': 'Español',
            'homeLink': 'Inicio',
            'aboutLink': 'Sobre nosotros',
            'animalsLink': 'Animales',
            'contactLink': 'Contacto',
            'zooDepartmentTitle': 'Departamento de Zoológico',
            'zooOpeningHoursTitle': 'Horario de apertura:',
            'zooEmailTitle': 'Correo electrónico:',
            'zooPhoneNumberTitle': 'Número de teléfono:',
            'activityDepartmentTitle': 'Departamento de Actividades',
            'activityHoursTitle': 'Horario de actividades:',
            'activityEmailTitle': 'Correo electrónico:',
            'activityPhoneNumberTitle': 'Númerode teléfono:',
            'veterinarianCentreTitle': 'Centro Veterinario',
            'vetOpeningHoursTitle': 'Horario de apertura:',
            'vetEmailTitle': 'Correo electrónico:',
            'vetPhoneNumberTitle': 'Número de teléfono:',
            'childCareTitle': 'Cuidado Infantil',
            'childCareOpeningHoursTitle': 'Horario de apertura:',
            'childCareEmailTitle': 'Correo electrónico:',
            'childCarePhoneNumberTitle': 'Número de teléfono:'
        }
    };
    title.innerText = translations[language]['title'];
    description.innerText = translations[language]['description'];
    dropdownToggle.innerText = translations[language]['dropdownToggle'];
    homeLink.innerText = translations[language]['homeLink'];
    aboutLink.innerText = translations[language]['aboutLink'];
    animalsLink.innerText = translations[language]['animalsLink'];
    contactLink.innerText = translations[language]['contactLink'];

    document.getElementById('zooDepartmentTitle').innerText = translations[language]['zooDepartmentTitle'];
    document.getElementById('zooOpeningHoursTitle').innerText = translations[language]['zooOpeningHoursTitle'];
    document.getElementById('zooEmailTitle').innerText = translations[language]['zooEmailTitle'];
    document.getElementById('zooPhoneNumberTitle').innerText = translations[language]['zooPhoneNumberTitle'];
    document.getElementById('activityDepartmentTitle').innerText = translations[language]['activityDepartmentTitle'];
    document.getElementById('activityHoursTitle').innerText = translations[language]['activityHoursTitle'];
    document.getElementById('activityEmailTitle').innerText = translations[language]['activityEmailTitle'];
    document.getElementById('activityPhoneNumberTitle').innerText = translations[language]['activityPhoneNumberTitle'];
    document.getElementById('veterinarianCentreTitle').innerText = translations[language]['veterinarianCentreTitle'];
    document.getElementById('vetOpeningHoursTitle').innerText = translations[language]['vetOpeningHoursTitle'];
    document.getElementById('vetEmailTitle').innerText = translations[language]['vetEmailTitle'];
    document.getElementById('vetPhoneNumberTitle').innerText = translations[language]['vetPhoneNumberTitle'];
    document.getElementById('childCareTitle').innerText = translations[language]['childCareTitle'];
    document.getElementById('childCareOpeningHoursTitle').innerText = translations[language]['childCareOpeningHoursTitle'];
    document.getElementById('childCareEmailTitle').innerText = translations[language]['childCareEmailTitle'];
    document.getElementById('childCarePhoneNumberTitle').innerText = translations[language]['childCarePhoneNumberTitle'];
}

