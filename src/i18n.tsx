import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "uk";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
    // Navigation
    "nav.home": { en: "Home", uk: "Головна" },
    "nav.about": { en: "About", uk: "Про мене" },
    "nav.skills": { en: "Skills", uk: "Навички" },
    "nav.projects": { en: "Projects", uk: "Проєкти" },
    "nav.contact": { en: "Contact", uk: "Контакти" },

    // Hero
    "hero.init": { en: "initializing_portfolio.exe", uk: "ініціалізація_портфоліо.exe" },
    "hero.subtitle": {
        en: "Crafting digital experiences with code & creativity",
        uk: "Створюю цифрові продукти за допомогою коду та креативу",
    },
    "hero.btn.projects": { en: "View Projects", uk: "Переглянути проєкти" },
    "hero.btn.contact": { en: "Let's Connect", uk: "Звʼязатися" },
    "hero.btn.about": { en: "About Me", uk: "Про мене" },
    "hero.stat.projects": { en: "Projects", uk: "Проєкти" },
    "hero.stat.tech": { en: "Technologies", uk: "Технології" },
    "hero.stat.exp": { en: "Years Experience", uk: "Років досвіду" },
    "hero.stat.coffee": { en: "Coffee Cups", uk: "Чашок кави" },

    // About
    "about.title": { en: "<ABOUT />", uk: "<ПРО МЕНЕ />" },
    "about.subtitle": {
        en: "Get to know the developer behind the code",
        uk: "Познайомтесь із розробником, який стоїть за цим кодом",
    },
    "about.role": {
        en: "Fullstack Developer",
        uk: "Fullstack-розробник",
    },
    "about.since": {
        en: "Building fullstack digital products since 2020",
        uk: "Створюю fullstack‑рішення з 2020 року",
    },
    "about.stat.years": {
        en: "Years Experience",
        uk: "Років досвіду",
    },
    "about.stat.projects": {
        en: "Projects Delivered",
        uk: "Реалізованих проєктів",
    },
    "about.stat.tech": {
        en: "Technologies",
        uk: "Технологій",
    },
    "about.stat.rating": {
        en: "Client Rating",
        uk: "Рейтинг клієнтів",
    },
    "about.whoami.status": {
        en: "Available for top-rated projects",
        uk: "Відкритий до крутих проєктів",
    },
    "about.whoami.favorite": {
        en: "React, Next.js, TypeScript, Node.js, Supabase, Firebase, MongoDB, AI",
        uk: "React, Next.js, TypeScript, Node.js, Supabase, Firebase, MongoDB, AI",
    },
    "about.whoami.hobby": {
        en: "Building cool stuff 🚀",
        uk: "Створювати круті речі 🚀",
    },

    // About tabs
    "about.tab.story": { en: "My Story", uk: "Моя історія" },
    "about.tab.values": { en: "Values", uk: "Цінності" },
    "about.tab.process": { en: "Process", uk: "Процес" },

    "about.story.title": {
        en: "From 2020 to Fullstack Reality",
        uk: "Від 2020 до fullstack‑реальності",
    },
    "about.story.1": {
        en: "Started my professional journey in 2020 and never stopped shipping.",
        uk: "Я почав комерційний шлях у 2020 році й відтоді постійно запускаю нові рішення.",
    },
    "about.story.2": {
        en: "Over 5+ years I’ve built production-ready apps for web and startups of different scales.",
        uk: "За 5+ років створив production‑додатки для веб‑проєктів і стартапів різного масштабу.",
    },
    "about.story.3": {
        en: "Delivered 100+ projects – from landing pages and dashboards to full-scale SaaS platforms.",
        uk: "Реалізував 100+ проєктів — від лендингів і дашбордів до повноцінних SaaS‑платформ.",
    },
    "about.story.4": {
        en: "Grew from pure frontend into a fullstack developer working with React, Next.js, Node.js, Supabase, Firebase and MongoDB.",
        uk: "Виріс із чистого фронтенду у fullstack‑розробника з React, Next.js, Node.js, Supabase, Firebase та MongoDB.",
    },
    "about.story.5": {
        en: "Actively exploring AI-powered flows (ChatGPT and related tools) to speed up development and boost product quality.",
        uk: "Активно використовую AI‑інструменти (ChatGPT та інші), щоб пришвидшувати розробку та підвищувати якість продукту.",
    },

    "about.values.title": {
        en: "What Drives Me",
        uk: "Що мною рухає",
    },
    "about.values.1": {
        en: "🎯 User-First Approach: Every feature is designed to solve a real problem and feel intuitive.",
        uk: "🎯 User‑first підхід: кожна фіча вирішує реальну задачу й залишається інтуїтивною.",
    },
    "about.values.2": {
        en: "⚡ Performance & Reliability: I care about fast, stable and secure experiences from frontend to backend.",
        uk: "⚡ Швидкість і надійність: дбаю про те, щоб усе працювало швидко, стабільно та безпечно — від фронтенду до бекенду.",
    },
    "about.values.3": {
        en: "🧩 Clean, Typed Code: TypeScript across the stack, predictable architecture and maintainable solutions.",
        uk: "🧩 Чистий типізований код: TypeScript на всіх рівнях, передбачувана архітектура та зручна підтримка.",
    },
    "about.values.4": {
        en: "🚀 Continuous Learning: React, Next.js, Node.js, databases and AI tools are part of my daily toolkit.",
        uk: "🚀 Постійний розвиток: React, Next.js, Node.js, бази даних та AI‑інструменти — мій щоденний стек.",
    },
    "about.values.5": {
        en: "🤝 Partnership Mindset: I act as a technical partner, not just a coder, focusing on long‑term success.",
        uk: "🤝 Партнерський підхід: працюю як технічний партнер, а не просто виконавець, думаючи про довгостроковий результат.",
    },

    "about.process.title": {
        en: "How I Work",
        uk: "Як я працюю",
    },
    "about.process.1": {
        en: "🔍 Discovery: Clarifying business goals, user needs and technical constraints.",
        uk: "🔍 Discovery: спочатку прояснюю бізнес‑цілі, потреби користувачів та технічні обмеження.",
    },
    "about.process.2": {
        en: "🎨 Plan & Architecture: Designing UX flows, data models and API structure before coding.",
        uk: "🎨 План і архітектура: продумую UX‑флоу, моделі даних та структуру API до написання коду.",
    },
    "about.process.3": {
        en: "⚙️ Development: Building with React, Next.js, Node.js, TypeScript, Supabase, Firebase and MongoDB.",
        uk: "⚙️ Розробка: будую рішення на React, Next.js, Node.js, TypeScript, Supabase, Firebase та MongoDB.",
    },
    "about.process.4": {
        en: "🧪 Testing & Polish: Checking edge cases, performance and responsive behaviour on all key devices.",
        uk: "🧪 Тестування: перевіряю крайові кейси, продуктивність і адаптивність на ключових пристроях.",
    },
    "about.process.5": {
        en: "🚀 Launch & Support: Deploying, monitoring, iterating and staying in touch to keep the product evolving.",
        uk: "🚀 Запуск і підтримка: деплой, моніторинг та подальші ітерації, щоб продукт постійно розвивався.",
    },

    // Skills
    "skills.subtitle": {
        en: "Fullstack tools I use to design, build and scale modern web apps",
        uk: "Fullstack‑інструменти, з якими я проєктую, створюю та масштабую сучасні веб‑додатки",
    },

    // Projects
    "projects.title": { en: "<PROJECTS />", uk: "<ПРОЄКТИ />" },
    "projects.subtitle": {
        en: "Some things I've built with passion and coffee",
        uk: "Деякі з речей, які я створив із натхненням та кавою",
    },
    "projects.filter.all": { en: "All Projects", uk: "Усі проєкти" },
    "projects.filter.frontend": { en: "Frontend", uk: "Фронтенд" },
    "projects.filter.fullstack": { en: "Full Stack", uk: "Full Stack" },
    "projects.filter.backend": { en: "Backend", uk: "Бекенд" },
    "projects.btn.code": { en: "Code", uk: "Код" },
    "projects.btn.demo": { en: "Live Demo", uk: "Демо" },

    // Contact
    "contact.title": { en: "<CONTACT />", uk: "<КОНТАКТИ />" },
    "contact.subtitle": {
        en: "Let's build something amazing together",
        uk: "Давайте створимо щось круте разом",
    },
    "contact.heading": { en: "Get In Touch", uk: "Напишіть мені" },
    "contact.text": {
        en: "I'm always excited to work on new projects and collaborate with talented people. Whether you have a project in mind, want to discuss opportunities, or just want to say hi, feel free to reach out!",
        uk: "Я завжди радий новим проєктам та співпраці з амбітними людьми. Якщо у вас є ідея, пропозиція чи просто хочете привітатися — сміливо пишіть!",
    },
    "contact.status.current": { en: "Current Status:", uk: "Поточний статус:" },
    "contact.status.available": { en: "Available", uk: "Вільний для проєктів" },
    "contact.status.response": { en: "Response Time:", uk: "Час відповіді:" },
    "contact.status.response.value": {
        en: "Within 24 hours",
        uk: "До 24 годин",
    },
    "contact.status.preferred": {
        en: "Preferred Contact:",
        uk: "Бажаний спосіб звʼязку:",
    },
    "contact.status.preferred.value": {
        en: "Email or LinkedIn",
        uk: "Email або LinkedIn",
    },
    "contact.status.timezone": { en: "Time Zone:", uk: "Часовий пояс:" },
    "contact.status.timezone.value": { en: "GMT+0", uk: "GMT+0" },

    "contact.form.name": { en: "Name *", uk: "Імʼя *" },
    "contact.form.email": { en: "Email *", uk: "Email *" },
    "contact.form.subject": { en: "Subject *", uk: "Тема *" },
    "contact.form.message": { en: "Message *", uk: "Повідомлення *" },
    "contact.form.placeholder.name": {
        en: "Your name",
        uk: "Ваше імʼя",
    },
    "contact.form.placeholder.email": {
        en: "your.email@example.com",
        uk: "your.email@example.com",
    },
    "contact.form.placeholder.subject": {
        en: "What's this about?",
        uk: "Про що це?",
    },
    "contact.form.placeholder.message": {
        en: "Tell me about your project or just say hello!",
        uk: "Розкажіть про свій проєкт або просто привітайтесь!",
    },
    "contact.form.sending": { en: "Sending...", uk: "Надсилаю..." },
    "contact.form.send": { en: "Send Message", uk: "Надіслати повідомлення" },
    "contact.form.sent.title": {
        en: "Message Sent!",
        uk: "Повідомлення надіслано!",
    },
    "contact.form.sent.text": {
        en: "Thanks for reaching out! I'll get back to you soon.",
        uk: "Дякую за повідомлення! Я відповім найближчим часом.",
    },
    "contact.form.sent.again": {
        en: "Send Another Message",
        uk: "Надіслати ще одне повідомлення",
    },

    // Footer
    "footer.quickLinks": { en: "Quick Links", uk: "Швидкі посилання" },
    "footer.status": { en: "Status", uk: "Статус" },
    "footer.status.available": {
        en: "Available for work",
        uk: "Вільний для співпраці",
    },
    "footer.status.response": {
        en: "Response time: 24hrs",
        uk: "Час відповіді: 24 години",
    },
    "footer.status.location": {
        en: "Location: Digital Realm",
        uk: "Локація: Digital Realm",
    },
    "footer.brand.text": {
        en: "Frontend Developer passionate about creating amazing digital experiences. Always learning, always building, always improving.",
        uk: "Frontend‑розробник, який обожнює створювати сильні цифрові досвіди. Завжди вчуся, будую та вдосконалюю те, що роблю.",
    },
    "footer.terminal.command": {
        en: '$ echo "Thanks for visiting my portfolio!"',
        uk: '$ echo "Дякую, що завітали до мого портфоліо!"',
    },
    "footer.terminal.text": {
        en: "Thanks for visiting my portfolio!",
        uk: "Дякую, що завітали до мого портфоліо!",
    },
    "footer.copyright": {
        en: "© {year} Frontend Developer. Built with React, TypeScript & Tailwind CSS.",
        uk: "© {year} Frontend Developer. Створено на React, TypeScript та Tailwind CSS.",
    },

    // Not Found
    "404.title": { en: "404", uk: "404" },
    "404.subtitle": {
        en: "Oops! Page not found",
        uk: "Ой! Сторінку не знайдено",
    },
    "404.back": {
        en: "Return to Home",
        uk: "Повернутися на головну",
    },
};

type I18nContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Language>("en");

    const t = (key: string) => {
        const entry = translations[key];
        if (!entry) return key;
        return entry[lang] ?? entry.en;
    };

    return (
        <I18nContext.Provider value={ { lang, setLang, t } }>
            { children }
        </I18nContext.Provider>
    );
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider");
    }
    return ctx;
};


