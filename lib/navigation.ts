export const locales = ["tj", "ru", "en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const routes = [
  { href: "", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/delivery-process", key: "process" },
  { href: "/warehouses", key: "warehouses" },
  { href: "/tracking", key: "tracking" },
  { href: "/ai-assistant", key: "assistant" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" }
] as const;

export const footerRoutes = [
  { href: "/faq", key: "faq" },
  { href: "/reviews", key: "reviews" },
  { href: "/careers", key: "careers" },
  { href: "/partnership", key: "partnership" },
  { href: "/terms", key: "terms" },
  { href: "/privacy", key: "privacy" }
] as const;

export const navLabels: Record<Locale, Record<string, string>> = {
  tj: {
    home: "Асосӣ",
    about: "Ширкат",
    services: "Хизматҳо",
    process: "Раванди интиқол",
    warehouses: "Анборҳо",
    tracking: "Пайгирӣ",
    assistant: "AI Ёрдамчӣ",
    blog: "Блог",
    contact: "Тамос",
    faq: "Саволҳо",
    reviews: "Шарҳҳо",
    careers: "Кор",
    partnership: "Ҳамкорӣ",
    terms: "Шартҳо",
    privacy: "Махфият",
    pricing: "Нархҳо",
    contacts: "Тамосҳо"
  },
  ru: {
    home: "Главная",
    about: "О компании",
    services: "Услуги",
    process: "Процесс",
    warehouses: "Склады",
    tracking: "Отследить",
    assistant: "AI Ассистент",
    blog: "Блог",
    contact: "Контакты",
    faq: "FAQ",
    reviews: "Отзывы",
    careers: "Вакансии",
    partnership: "Партнерство",
    terms: "Условия",
    privacy: "Конфиденциальность",
    pricing: "Цены",
    contacts: "Контакты"
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    process: "Process",
    warehouses: "Warehouses",
    tracking: "Tracking",
    assistant: "AI Assistant",
    blog: "Blog",
    contact: "Contact",
    faq: "FAQ",
    reviews: "Reviews",
    careers: "Careers",
    partnership: "Partnership",
    terms: "Terms",
    privacy: "Privacy",
    pricing: "Pricing",
    contacts: "Contacts"
  },
  zh: {
    home: "首页",
    about: "公司",
    services: "服务",
    process: "流程",
    warehouses: "仓库",
    tracking: "物流跟踪",
    assistant: "AI 助手",
    blog: "资讯",
    contact: "联系",
    faq: "常见问题",
    reviews: "客户评价",
    careers: "招聘",
    partnership: "合作",
    terms: "条款",
    privacy: "隐私",
    pricing: "价格",
    contacts: "联系方式"
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function toLocale(value: string): Locale {
  return isLocale(value) ? value : "tj";
}
