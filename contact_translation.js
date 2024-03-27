function changeLanguage(language) {
    const contactTitle = document.getElementById('contactTitle');
    const contactSubtitle = document.getElementById('contactSubtitle');
    const dropdownToggle = document.getElementById('navbarDropdown');
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const animalsLink = document.getElementById('animalsLink');
    const contactLink = document.getElementById('contactLink');

    if (language === 'english') {
        // Navbar & Form Title translations
        contactTitle.innerText = 'Contact Us';
        contactSubtitle.innerText = 'Please fill out the form below to contact us.';
        dropdownToggle.innerText = 'English';
        homeLink.innerText = 'Home';
        aboutLink.innerText = 'About';
        animalsLink.innerText = 'Animals';
        contactLink.innerText = 'Contact';

        // Form translations
        document.getElementById('name').placeholder = 'Name';
        document.getElementById('email').placeholder = 'Email';
        document.getElementById('message').placeholder = 'Message';
        document.getElementById('contactForm').querySelector('input[type="submit"]').value = 'Send Message';

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
        // Navbar & Form Title translations
        contactTitle.innerText = 'Contactez-Nous';
        contactSubtitle.innerText = 'Veuillez remplir le formulaire ci-dessous pour nous contacter.';
        dropdownToggle.innerText = 'Français';
        homeLink.innerText = 'Accueil';
        aboutLink.innerText = 'À propos';
        animalsLink.innerText = 'Animaux';
        contactLink.innerText = 'Contact';
        // Form translations
        document.getElementById('name').placeholder = 'Nom';
        document.getElementById('email').placeholder = 'Email';
        document.getElementById('message').placeholder = 'Message';
        document.getElementById('contactForm').querySelector('input[type="submit"]').value = 'Envoyer le message';

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
        // Navbar & Form Title translations
        contactTitle.innerText = 'Kontaktiere uns';
        contactSubtitle.innerText = 'Bitte füllen Sie das folgende Formular aus, um uns zu kontaktieren.';
        dropdownToggle.innerText = 'Deutsch';
        homeLink.innerText = 'Startseite';
        aboutLink.innerText = 'Über uns';
        animalsLink.innerText = 'Tiere';
        contactLink.innerText = 'Kontakt';
        // Form translations
        document.getElementById('name').placeholder = 'Name';
        document.getElementById('email').placeholder = 'Email';
        document.getElementById('message').placeholder = 'Nachricht';
        document.getElementById('contactForm').querySelector('input[type="submit"]').value = 'Nachricht senden';

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
        // Navbar & Form Title translations
        contactTitle.innerText = 'Contáctenos';
        contactSubtitle.innerText = 'Por favor, complete el formulario a continuación para contactarnos.';
        dropdownToggle.innerText = 'Español';
        homeLink.innerText = 'Inicio';
        aboutLink.innerText = 'Sobre nosotros';
        animalsLink.innerText = 'Animales';
        contactLink.innerText = 'Contacto';
        // Form translations
        document.getElementById('name').placeholder = 'Nombre';
        document.getElementById('email').placeholder = 'Correo electrónico';
        document.getElementById('message').placeholder = 'Mensaje';
        document.getElementById('contactForm').querySelector('input[type="submit"]').value = 'Enviar mensaje';

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
