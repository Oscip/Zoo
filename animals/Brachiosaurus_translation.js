
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

