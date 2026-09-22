const languageToggle = document.getElementById('langToggle');

const translations = {
  de: {
    brand: 'Schöneberg Systems',
    'nav.label': 'Hauptnavigation',
    'panel.ariaLabel': 'Kurzprofil',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Frontend & digitales Produktdesign',
    'hero.title': 'Digitale Erlebnisse mit klarer Linie.',
    'hero.intro': 'Ich entwickle digitale Auftritte und Produkte mit klarer Struktur, guter Nutzerführung und einem zeitgemäßen visuellen Anspruch. Von der ersten Idee bis zur Umsetzung verbinde ich Gestaltung und Technik zu einer stimmigen Lösung.',
    'hero.primaryButton': 'Mehr erfahren',
    'hero.secondaryButton': 'Kontakt',
    'panel.label': 'Schwerpunkt',
    'panel.text': 'Webdesign, Frontend-Umsetzung, digitale Konzepte',
    'panel.ui': 'Saubere Schnittstellen',
    'panel.ux': 'Klare Erlebnisse',
    'about.eyebrow': 'Über mich',
    'about.title': 'Design und Technik mit Substanz.',
    'about.text': 'Ich verbinde Designverständnis mit technischem Know-how, damit digitale Lösungen gut aussehen, verständlich bleiben und zuverlässig funktionieren.',
    'about.item1': 'Interface Design',
    'about.item2': 'Frontend Umsetzung',
    'about.item3': 'UX-Denken und Produktklarheit',
    'footer.text': 'Offen für neue Ideen und Anfragen.',
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
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Frontend & digital product design',
    'hero.title': 'Designing clear, thoughtful digital experiences.',
    'hero.intro': 'I design and build digital products with a focus on clarity, user guidance and a clean, modern visual identity. The emphasis is on clear communication, strong UX and a professional, user-friendly implementation.',
    'hero.primaryButton': 'Learn more',
    'hero.secondaryButton': 'Let’s talk',
    'panel.label': 'Focus',
    'panel.text': 'Web design, frontend development, digital concepts',
    'panel.ui': 'Clean interfaces',
    'panel.ux': 'Clear experiences',
    'about.eyebrow': 'About',
    'about.title': 'Thoughtful product work.',
    'about.text': 'I combine design sensibility with technical understanding so digital products not only look good, but are also clear, fast and reliable for users.',
    'about.item1': 'Interface design',
    'about.item2': 'Frontend implementation',
    'about.item3': 'UX thinking and product clarity',
    'footer.text': 'Open to new ideas and enquiries.',
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
    const to = 'info@xn--schneberg-systems-1zb.de';

    // Open user's mail client
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
