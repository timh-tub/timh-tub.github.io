const languageToggle = document.getElementById('langToggle');

const translations = {
  de: {
    brand: 'Schöneberg Systems',
    'nav.label': 'Hauptnavigation',
    'panel.ariaLabel': 'Kurzprofil',
    'nav.services': 'Leistungen',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Digitale Lösungen für Unternehmen',
    'hero.title': 'Von der Website bis zur passenden Anwendung.',
    'hero.intro': 'Ich entwickle Websites, Web-Apps und praktische digitale Werkzeuge, die den Arbeitsalltag einfacher machen. Gemeinsam klären wir, was gebraucht wird, und setzen daraus eine verständliche, passende Lösung um.',
    'hero.primaryButton': 'Leistungen ansehen',
    'hero.secondaryButton': 'Kontakt',
    'panel.label': 'Von der Idee zur Umsetzung',
    'panel.text': 'Websites, Web-Apps und digitale Werkzeuge',
    'panel.ui': 'Einfach zu bedienen',
    'panel.ux': 'Passend zum Bedarf',
    'services.eyebrow': 'Leistungen',
    'services.title': 'Digitale Lösungen für konkrete Aufgaben.',
    'services.intro': 'Ob neuer Auftritt oder eine Anwendung für einen bestimmten Arbeitsablauf: Umfang und Umsetzung richten sich nach dem, was wirklich gebraucht wird.',
    'service.website.title': 'Websites',
    'service.website.text': 'Ein professioneller Online-Auftritt, der Angebote verständlich erklärt, auf Smartphone und Computer funktioniert und Interessierte zum nächsten Schritt führt.',
    'service.app.title': 'Apps & Webanwendungen',
    'service.app.text': 'Interaktive Anwendungen für Aufgaben, die eine normale Website nicht abdeckt – zum Beispiel Buchungen, Übersichten oder Kundenbereiche mit Login.',
    'service.tools.title': 'Digitale Werkzeuge für den Arbeitsalltag',
    'service.tools.text': 'Kleine interne Anwendungen, Formulare oder Dashboards, die wiederkehrende Abläufe ordnen und Informationen an einem Ort zusammenbringen.',
    'about.eyebrow': 'Über mich',
    'about.title': 'Von der Frage zur fertigen Lösung.',
    'about.text': 'Nicht jede Aufgabe braucht ein großes System. Ich helfe dabei, den passenden Umfang zu finden und entwickle digitale Lösungen, die einfach zu verstehen sind und im Alltag zuverlässig funktionieren.',
    'about.item1': 'Anforderungen und Ziele klären',
    'about.item2': 'Oberfläche und Funktionen entwickeln',
    'about.item3': 'Mobil und am Desktop nutzbar umsetzen',
    'footer.text': 'Offen für neue Ideen und Anfragen.',
    'footer.legalNav': 'Rechtliche Informationen',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutzerklärung',
    'form.title': 'Kontakt aufnehmen',
    'form.name': 'Name',
    'form.namePlaceholder': 'Dein Name',
    'form.email': 'E-Mail',
    'form.emailPlaceholder': 'du@beispiel.de',
    'form.message': 'Nachricht',
    'form.messagePlaceholder': 'Worum geht es?',
    'form.submit': 'Anfrage senden',
    'form.reset': 'Zurücksetzen',
    'form.direct': 'Oder direkt per E-Mail:'
  },
  en: {
    brand: 'Schöneberg Systems',
    'nav.label': 'Main navigation',
    'panel.ariaLabel': 'Profile summary',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Digital solutions for businesses',
    'hero.title': 'From a website to a solution built for the task.',
    'hero.intro': 'I build websites, web apps and practical digital tools that make day-to-day work easier. We first clarify what is needed, then turn it into a solution that is useful and easy to understand.',
    'hero.primaryButton': 'Explore services',
    'hero.secondaryButton': 'Let’s talk',
    'panel.label': 'From idea to implementation',
    'panel.text': 'Websites, web apps and digital tools',
    'panel.ui': 'Easy to use',
    'panel.ux': 'Fit for purpose',
    'services.eyebrow': 'Services',
    'services.title': 'Digital solutions for real-world tasks.',
    'services.intro': 'Whether you need a new online presence or an application for a specific workflow, the scope and approach are shaped around what is actually useful.',
    'service.website.title': 'Websites',
    'service.website.text': 'A professional online presence that explains what you offer, works on phones and computers, and helps visitors take the next step.',
    'service.app.title': 'Apps & web applications',
    'service.app.text': 'Interactive applications for tasks a standard website cannot handle, such as bookings, dashboards or customer areas with a login.',
    'service.tools.title': 'Digital tools for everyday work',
    'service.tools.text': 'Small internal applications, forms or dashboards that organise recurring tasks and bring information together in one place.',
    'about.eyebrow': 'About',
    'about.title': 'From the first question to a working solution.',
    'about.text': 'Not every task needs a large system. I help define the right scope and build digital solutions that are easy to understand and dependable in everyday use.',
    'about.item1': 'Clarifying needs and goals',
    'about.item2': 'Building interfaces and functionality',
    'about.item3': 'Making it work on mobile and desktop',
    'footer.text': 'Open to new ideas and enquiries.',
    'footer.legalNav': 'Legal information',
    'footer.imprint': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'form.title': 'Get in touch',
    'form.name': 'Name',
    'form.namePlaceholder': 'Your name',
    'form.email': 'Email',
    'form.emailPlaceholder': 'you@example.com',
    'form.message': 'Message',
    'form.messagePlaceholder': 'What would you like to discuss?',
    'form.submit': 'Send request',
    'form.reset': 'Reset',
    'form.direct': 'Or email directly:'
  }
};

const elements = Array.from(document.querySelectorAll('[data-i18n]'));

function updateLanguage(lang) {
  const dictionary = translations[lang];
  if (!dictionary) return;

  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (dictionary[key]) {
      element.setAttribute('placeholder', dictionary[key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.getAttribute('data-i18n-aria-label');
    if (dictionary[key]) {
      element.setAttribute('aria-label', dictionary[key]);
    }
  });

  document.documentElement.lang = lang;
  languageToggle.textContent = lang === 'de' ? 'DE / EN' : 'EN / DE';
  languageToggle.setAttribute('aria-label', lang === 'de' ? 'Language switch to English' : 'Language switch to German');
}

let currentLanguage = 'de';

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
  updateLanguage(currentLanguage);
});

updateLanguage(currentLanguage);

// Contact form handler (frontend-only, opens mail client via mailto)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      const validationMessage = currentLanguage === 'de'
        ? 'Bitte fülle Name, E-Mail und Nachricht aus.'
        : 'Please fill in your name, email and message.';
      alert(validationMessage);
      return;
    }

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const to = 'info@schoeneberg-systems.de';

    // Open user's mail client
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
