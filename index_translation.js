function changeLanguage(language) {
    var title = document.getElementById('zooTitle');
    var activityText1 = document.getElementById('activityText1');
    var activityText2 = document.getElementById('activityText2');
    var activityText3 = document.getElementById('activityText3');
    var activityText4 = document.getElementById('activityText4');
    var activityText5 = document.getElementById('activityText5');
    var activityText6 = document.getElementById('activityText6');
    var homeLink = document.getElementById('homeLink');
    var aboutLink = document.getElementById('aboutLink');
    var animalsLink = document.getElementById('animalsLink');
    var contactLink = document.getElementById('contactLink');
    var dropdownToggle = document.getElementById('navbarDropdown');

    if (language === 'english') {
        title.innerText = 'Zoo Jurassic Park';
        activityText1.innerText = "Our Triceratops got hurt today and our infirmary went on to help our animal. She had a twisted ankle but now it's fixed and it'll be healed in a few weeks.";
        activityText2.innerText = "At Jurassic Park's new Aqua Park, the daily highlight is a mesmerizing aquatic show loved by both Jurassic animals and spectators—a must-see attraction for all visitors.";
        activityText3.innerText = "At Jurassic Park Zoo, veterinarians train Jurassic animals for safe interaction, fostering harmony between creatures and visitors.";
        activityText4.innerText = "We just renovated our small theater and made some new theater scenes to it. Make sure to go and check it out!";
        activityText5.innerText = "Go and visit the jurassic Park Museum that tells you the story about the animals that you see in front of you.";
        activityText6.innerText = "We have a military camp activity where you can go with our park recruiters and learn how to be with an dinosaur.";
        homeLink.innerText = 'Home';
        aboutLink.innerText = 'About';
        animalsLink.innerText = 'Animals';
        contactLink.innerText = 'Contact';
        dropdownToggle.innerText = 'English';

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
        title.innerText = 'Zoo Jurassic Park';
        activityText1.innerText = "Notre Tricératops s'est blessé aujourd'hui et notre infirmerie est intervenue pour aider notre animal. Elle avait une cheville tordue mais maintenant c'est réparé et elle guérira dans quelques semaines.";
        activityText2.innerText = "Au nouveau parc aquatique de Jurassic Park, le point culminant quotidien est un spectacle aquatique fascinant apprécié à la fois par les animaux et les spectateurs jurassiques - une attraction incontournable pour tous les visiteurs.";
        activityText3.innerText = "Au zoo de Jurassic Park, les vétérinaires entraînent les animaux jurassiques pour une interaction sûre, favorisant l'harmonie entre les créatures et les visiteurs.";
        activityText4.innerText = "Nous venons de rénover notre petit théâtre et d'ajouter de nouvelles scènes de théâtre. N'oubliez pas de passer !";
        activityText5.innerText = "Visitez le musée Jurassic Park, qui vous raconte l'histoire des animaux que vous voyez devant vous.";
        activityText6.innerText = "Nous organisons une activité de camp militaire où vous pourrez apprendre à manipuler un dinosaure avec nos recruteurs du parc.";
        homeLink.innerText = 'Accueil';
        aboutLink.innerText = 'À propos';
        animalsLink.innerText = 'Animaux';
        contactLink.innerText = 'Contact';
        dropdownToggle.innerText = 'Français';
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
        title.innerText = 'Zoo Jurassic Park';
        activityText1.innerText = "Unser Triceratops wurde heute verletzt und unsere Krankenstation half unserem Tier. Sie hatte sich einen Knöchel verdreht, aber jetzt ist er wieder in Ordnung und wird in ein paar Wochen geheilt sein.";
        activityText2.innerText = "Im neuen Aqua Park von Jurassic Park ist das tägliche Highlight eine faszinierende Wassershow, die von beiden jurassischen Tieren und Zuschauern gleichermaßen geliebt wird - eine Sehenswürdigkeit für alle Besucher.";
        activityText3.innerText = "Im Jurassic Park Zoo trainieren Tierärzte jurassische Tiere für sichere Interaktionen und fördern so die Harmonie zwischen Kreaturen und Besuchern.";
        activityText4.innerText = "Wir haben gerade unser kleines Theater renoviert und einige neue Theaterszenen eingebaut. Schauen Sie unbedingt vorbei!";
        activityText5.innerText = "Besuchen Sie das Jurassic Park Museum, das Ihnen die Geschichte der Tiere erzählt, die Sie vor sich sehen.";
        activityText6.innerText = "Wir haben eine Militärcamp-Aktivität, bei der Sie mit unseren Parkrekrutierern lernen können, wie man mit einem Dinosaurier umgeht.";
        homeLink.innerText = 'Startseite';
        aboutLink.innerText = 'Über uns';
        animalsLink.innerText = 'Tiere';
        contactLink.innerText = 'Kontakt';
        dropdownToggle.innerText = 'Deutsch';
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
        title.innerText = 'Zoo Jurassic Park';
        activityText1.innerText = "Nuestro Triceratops resultó herido hoy y nuestra enfermería se encargó de ayudar a nuestro animal. Tenía un tobillo torcido pero ahora está arreglado y se curará en unas pocas semanas.";
        activityText2.innerText = "En el nuevo parque acuático de Jurassic Park, el punto culminante diario es un espectáculo acuático fascinante que es amado tanto por los animales jurásicos como por los espectadores, una atracción imperdible para todos los visitantes.";
        activityText3.innerText = "En el zoológico de Jurassic Park, los veterinarios entrenan a los animales jurásicos para una interacción segura, fomentando así la armonía entre las criaturas y los visitantes.";
        activityText4.innerText = "Acabamos de renovar nuestro pequeño teatro y agregar nuevos escenarios. ¡No olvides pasar por aquí!";
        activityText5.innerText = "Visita el Museo Jurassic Park, que te cuenta la historia de los animales que ves ante ti.";
        activityText6.innerText = "Estamos organizando una actividad en un campamento militar donde podrás aprender a manejar un dinosaurio con nuestros reclutadores del parque.";
        homeLink.innerText = 'Inicio';
        aboutLink.innerText = 'Sobre nosotros';
        animalsLink.innerText = 'Animales';
        contactLink.innerText = 'Contacto';
        dropdownToggle.innerText = 'Español';
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
