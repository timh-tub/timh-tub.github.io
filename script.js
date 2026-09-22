const languageToggle = document.getElementById('langToggle');

const translations = {
  de: {
    brand: 'Your Company',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Frontend & digitales Produktdesign',
    'hero.title': 'Klare, durchdachte digitale Erlebnisse.',
    'hero.intro': 'Ich gestalte und baue digitale Produkte mit Fokus auf Klarheit, Benutzerführung und ein sauberes, modernes Erscheinungsbild. Dabei liegt der Schwerpunkt auf verständlicher Kommunikation, gutem UX und einer professionellen, nutzerfreundlichen Umsetzung.',
    'hero.primaryButton': 'Mehr erfahren',
    'hero.secondaryButton': 'Lass uns reden',
    'panel.label': 'Schwerpunkt',
    'panel.text': 'Webdesign, Frontend-Umsetzung, digitale Konzepte',
    'panel.ui': 'Saubere Schnittstellen',
    'panel.ux': 'Klare Erlebnisse',
    'about.eyebrow': 'Über mich',
    'about.title': 'Durchdachte Produktarbeit.',
    'about.text': 'Ich kombiniere Design-Sinn mit technischem Verständnis, damit digitale Produkte nicht nur gut aussehen, sondern auch verständlich, schnell und zuverlässig funktionieren.',
    'about.item1': 'Interface Design',
    'about.item2': 'Frontend Umsetzung',
    'about.item3': 'UX-Denken und Produktklarheit',
    'footer.text': 'Verfügbar für freelance und Produktarbeit.'
  },
  en: {
    brand: 'Your Company',
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
    'footer.text': 'Available for freelance and product work.'
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
      // simple validation feedback
      alert('Please fill in name, email and a short message.');
      return;
    }

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const to = 'your@email.com';

    // Open user's mail client
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
