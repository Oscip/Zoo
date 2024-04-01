function changeLanguage(language) {
    const historyText = document.getElementById('historyText');
    const aboutText = document.getElementById('aboutText');
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const animalsLink = document.getElementById('animalsLink');
    const contactLink = document.getElementById('contactLink');
    const dropdownToggle = document.getElementById('navbarDropdown');

    const englishHistory = "Jurassic Park is a theme park and dinosaur attraction located on Isla Nublar, a fictional island off the coast of Costa Rica. Founded by billionaire philanthropist John Hammond, the park was designed to showcase genetically engineered dinosaurs cloned from prehistoric DNA.";
    const englishAbout = "At Jurassic Park, visitors can embark on a journey through time to experience the wonders of the Mesozoic Era. From towering Brachiosaurus to fearsome Tyrannosaurus rex, our park offers an unparalleled opportunity to witness these ancient creatures in a safe and controlled environment. With state-of-the-art facilities and expert staff, Jurassic Park is committed to providing an unforgettable experience for guests of all ages. Join us as we explore the mysteries of the past and discover the awe-inspiring world of dinosaurs.";
    const frenchHistory = "Jurassic Park est un parc à thème et une attraction de dinosaures situé sur Isla Nublar, une île fictive au large de la côte du Costa Rica. Fondé par le milliardaire philanthrope John Hammond, le parc a été conçu pour présenter des dinosaures génétiquement modifiés clonés à partir d'ADN préhistorique.";
    const frenchAbout = "Au Jurassic Park, les visiteurs peuvent embarquer pour un voyage à travers le temps pour découvrir les merveilles de l'ère mésozoïque. Du majestueux Brachiosaure au redoutable Tyrannosaurus rex, notre parc offre une opportunité incomparable de voir ces créatures anciennes dans un environnement sûr et contrôlé. Avec des installations ultramodernes et un personnel expert, Jurassic Park s'engage à offrir une expérience inoubliable aux visiteurs de tous âges. Rejoignez-nous alors que nous explorons les mystères du passé et découvrons le monde impressionnant des dinosaures.";
    const germanHistory = "Der Jurassic Park ist ein Themenpark und eine Dinosaurierattraktion auf Isla Nublar, einer fiktiven Insel vor der Küste von Costa Rica. Gegründet vom Milliardär und Philanthropen John Hammond, wurde der Park entworfen, um genetisch veränderte Dinosaurier zu präsentieren, die aus prähistorischer DNA geklont wurden.";
    const germanAbout = "Im Jurassic Park können Besucher eine Reise durch die Zeit unternehmen, um die Wunder des Mesozoikums zu erleben. Vom majestätischen Brachiosaurus bis zum furchterregenden Tyrannosaurus rex bietet unser Park eine unvergleichliche Möglichkeit, diese urzeitlichen Kreaturen in einer sicheren und kontrollierten Umgebung zu sehen. Mit hochmodernen Einrichtungen und erfahrenem Personal ist der Jurassic Park bestrebt, Gästen jeden Alters ein unvergessliches Erlebnis zu bieten. Begleiten Sie uns, während wir die Geheimnisse der Vergangenheit erkunden und die beeindruckende Welt der Dinosaurier entdecken.";
    const spanishHistory = "Jurassic Park es un parque temático y una atracción de dinosaurios ubicada en Isla Nublar, una isla ficticia frentea la costa de Costa Rica. Fundado por el multimillonario filántropo John Hammond, el parque fue diseñado para exhibir dinosaurios genéticamente modificados clonados a partir de ADN prehistórico.";
    const spanishAbout = "En Jurassic Park, los visitantes pueden embarcarse en un viaje a través del tiempo para experimentar las maravillas de la era mesozoica. Desde el imponente Brachiosaurus hasta el temible Tyrannosaurus rex, nuestro parque ofrece una oportunidad incomparable para presenciar estas antiguas criaturas en un ambiente seguro y controlado. Con instalaciones de última generación y personal experto, Jurassic Park se compromete a brindar una experiencia inolvidable para los huéspedes de todas las edades. Únase a nosotros mientras exploramos los misterios del pasado y descubrimos el mundo impresionante de los dinosaurios.";
    if (language === 'english') {
        historyText.innerText = englishHistory;
        aboutText.innerText = englishAbout;
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
    } else if (language === 'french') {
        historyText.innerText = frenchHistory;
        aboutText.innerText = frenchAbout;
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
    } else if (language === 'german') {
        historyText.innerText = germanHistory;
        aboutText.innerText = germanAbout;
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
    } else if (language === 'spanish') {
        historyText.innerText = spanishHistory;
        aboutText.innerText = spanishAbout;
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
    }
}