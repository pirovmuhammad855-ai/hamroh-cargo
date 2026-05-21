import {
  BadgeCheck,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Building2,
  FileText,
  Globe2,
  Image,
  LockKeyhole,
  MessageCircle,
  PackageCheck,
  Palette,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  Warehouse
} from "lucide-react";
import type { CardItem, FaqItem, Metric, Review, ServiceItem, Warehouse as WarehouseType } from "@/types/content";
import type { Locale } from "@/lib/navigation";

export const contacts = {
  instagram: "https://instagram.com/hamroh.cargo",
  telegram: "https://t.me/Hamrohassistant",
  whatsapp: "https://wa.me/992501222235",
  email: "hamrohcargo@gmail.com",
  phones: ["+992906431010", "+992930777756"],
  domain: "hamrohcargo.tj"
};

export const iconMap = [Plane, Truck, Building2, MessageCircle, BriefcaseBusiness, ShieldCheck, Bot, PackageCheck];

type SiteContent = {
  footerDescription: string;
  platform: string;
  contact: string;
  hero: {
    navCta: string;
    eyebrow: string;
    title: string;
    alt: string;
    trust: string;
    text: string;
    whatsapp: string;
    calculate: string;
    operator: string;
    route: string;
    chips: string[];
    workflow: string;
  };
  metrics: Metric[];
  why: { eyebrow: string; title: string; text: string; items: CardItem[] };
  process: { eyebrow: string; title: string; text: string; steps: string[] };
  services: { eyebrow: string; title: string; text: string; items: ServiceItem[] };
  mobile: { eyebrow: string; title: string; text: string; cta: string; features: string[]; status: string; route: string };
  warehouses: { eyebrow: string; title: string; text: string; copy: string; qr: string; items: WarehouseType[] };
  reviewsFaq: { reviewsEyebrow: string; reviewsTitle: string; reviewsText: string; faqEyebrow: string; faqTitle: string; faqText: string; reviews: Review[]; faqs: FaqItem[] };
  blog: { eyebrow: string; title: string; ctaTitle: string; ctaText: string; telegram: string; whatsapp: string; viewAll: string; posts: Array<{ title: string; category: string; date: string }> };
  admin: { eyebrow: string; title: string; text: string; modules: Array<{ title: string; description: string; icon: typeof Palette }> };
  standardCardText: string;
  standardButtons: { operator: string; telegram: string };
  pages: Record<string, { eyebrow: string; title: string; text: string; items: string[] }>;
  contactPage: { eyebrow: string; title: string; text: string; whatsapp: string; telegram: string; phone: string; email: string; map: string };
  tracking: { eyebrow: string; title: string; text: string; placeholder: string; search: string; empty: string; result: string };
};

export const content: Record<Locale, SiteContent> = {
  tj: {
    footerDescription: "Логистикаи касбӣ, кӯмак дар харид аз Чин, идоракунии анбор ва дастгирии бор барои Тоҷикистон.",
    platform: "Платформа",
    contact: "Тамос",
    hero: {
      navCta: "Тамос бо оператор",
      eyebrow: "Платформаи логистикии Чин - Тоҷикистон",
      title: "Интиқоли зуд аз Чин",
      alt: "Бори боэътимод байни Чин ва Тоҷикистон",
      trust: "Шарики боэътимоди шумо дар логистикаи Чин",
      text: "Хизматрасонии касбии cargo ва ёрии харид аз маркетплейсҳои Чин барои мизоҷони Тоҷикистон.",
      whatsapp: "WhatsApp",
      calculate: "Ҳисоби интиқол",
      operator: "Тамос бо оператор",
      route: "Масири зинда",
      chips: ["Бори бехатар", "Расонидани саривақтӣ", "Пайгирии интеллектуалӣ"],
      workflow: "Қабули анбор, бастабандӣ, гумрук ва расонидани ниҳоӣ дар як раванд."
    },
    metrics: [
      { label: "Соли таҷриба", value: 8, suffix: "+" },
      { label: "Борҳои фаъол", value: 1240, suffix: "+" },
      { label: "Анбор дар Чин", value: 3 },
      { label: "Мизоҷони хизматшуда", value: 18000, suffix: "+" },
      { label: "Интиқоли муваффақ", value: 52000, suffix: "+" }
    ],
    why: {
      eyebrow: "Чаро Hamroh",
      title: "Логистикаи премиум бо дастгирии инсонӣ ва технология",
      text: "Таҷрибаи равшан барои оилаҳо, соҳибкорон ва ширкатҳое, ки аз Чин харид мекунанд.",
      items: [
        { title: "Интиқоли зуд", description: "Масирҳои ҳавоӣ ва автомобилӣ бо навсозиҳои равшани оператор." },
        { title: "Хизматрасонии боэътимод", description: "Раванди ҳуҷҷатшуда, дастаи таҷрибадор ва муоширати шаффоф." },
        { title: "Анборҳои Чин", description: "Шабакаи анборҳо дар Пекин, Гуанчжоу ва Иву." },
        { title: "Дастгирии касбӣ", description: "Telegram, WhatsApp, телефон ва оператори зинда барои ҳар мизоҷ." },
        { title: "Кӯмак дар маркетплейсҳо", description: "Taobao, Pinduoduo, муошират бо таъминкунанда, баргардонидан ва тарҷума." },
        { title: "Бори муҳофизатшуда", description: "Бастабандии эҳтиёткорона, қоидаҳои cargo, санҷиши хатар ва суғуртаи ихтиёрӣ." },
        { title: "Суғуртаи бор", description: "Муҳофизати иловагӣ барои молҳои нозук, гарон ё тиҷоратӣ." },
        { title: "AI Ёрдамчӣ", description: "Hamroh Assistant ба мизоҷон фармоиш ва марҳилаҳои борро мефаҳмонад." }
      ]
    },
    process: {
      eyebrow: "Раванди интиқол",
      title: "Аз фармоиши маҳсулот то расонидани ниҳоӣ",
      text: "Мизоҷ ҳар марҳиларо мебинад, оператор равандро назорат мекунад ва бор шаффоф мемонад.",
      steps: ["Фармоиши маҳсулот", "Анбори Чин", "Бастабандӣ", "Интиқол", "Гумрук", "Омад ба Тоҷикистон", "Расонидан"]
    },
    services: {
      eyebrow: "Хизматҳо",
      title: "Хизматҳои cargo барои тиҷорати Чин - Тоҷикистон",
      text: "Модулҳои равшан бо дастгирии оператор ва идоракунии оянда аз admin panel.",
      items: [
        { title: "Air Cargo", tag: "Зуд", description: "Масири зуд барои посилкаҳои таъҷилӣ, электроника, намунаҳо ва борҳои сабук." },
        { title: "Auto Cargo", tag: "Иқтисодӣ", description: "Интиқоли устувор барои борҳои ҳаҷмдор, молҳои тиҷоратӣ ва борҳои ҷамъшуда." },
        { title: "Суғуртаи бор", tag: "Муҳофизат", description: "Имкони муҳофизат барои маҳсулоти нозук, гарон ва арзишманд." },
        { title: "Кӯмак дар маркетплейс", tag: "Харид", description: "Taobao, Pinduoduo, муошират бо фурӯшанда, тарҷума ва баргардонидан." },
        { title: "Хизматҳои анбор", tag: "Анбор", description: "Қабул, ҷудокунӣ, бастабандӣ, ҷамъкунӣ ва адресҳои QR дар Чин." },
        { title: "Пайгирии бор", tag: "Tracking", description: "Қайдҳои оператор, марҳилаҳои бор, огоҳиномаҳо ва таърихи статус." }
      ]
    },
    mobile: {
      eyebrow: "Мобилӣ / Барнома",
      title: "Hamroh Assistant ҳамеша дар дасти шумо.",
      text: "Қабати мобилии оянда барои линкҳои маҳсулот, адресҳои анбор, пайгирии бор, чат бо оператор ва кӯмак дар харид.",
      cta: "Кушодани Hamroh Assistant",
      features: ["Қабули QR дар анбор", "Марҳилаҳои бор", "Огоҳии оператор", "Пайваст ба WhatsApp"],
      status: "Пайгирӣ омода",
      route: "Анбори Гуанчжоу → Душанбе"
    },
    warehouses: {
      eyebrow: "Анборҳои Чин",
      title: "Шабакаи анборҳо барои қабул ва ҷамъкунии зуд",
      text: "Маълумоти анборро нусха кунед, ба фурӯшанда фиристед ва бо операторон ҳамоҳанг кунед.",
      copy: "Нусха",
      qr: "QR код",
      items: [
        { city: "Пекин", address: "Анбори Hamroh Cargo дар Пекин, Чин", manager: "Дастаи шимоли Чин", hours: "09:00-20:00" },
        { city: "Гуанчжоу", address: "Анбори Hamroh Cargo дар Гуанчжоу, Чин", manager: "Дастаи ҷануби Чин", hours: "09:00-21:00" },
        { city: "Иву", address: "Анбори Hamroh Cargo дар Иву, Чин", manager: "Дастаи wholesale", hours: "09:00-20:00" }
      ]
    },
    reviewsFaq: {
      reviewsEyebrow: "Эътимоди мизоҷон",
      reviewsTitle: "Шарҳҳои мушаххас ва боэътимод",
      reviewsText: "Каналҳо, скриншотҳо, видео ва ҳикояҳои тасдиқшудаи оператор.",
      faqEyebrow: "Саволҳо",
      faqTitle: "Ҷавобҳои равшан пеш аз тамос",
      faqText: "Вақти интиқол, андоз, маҳсулоти манъшуда, молҳои нозук ва дастури маркетплейс.",
      reviews: [
        { name: "Фаридун", city: "Душанбе", channel: "Telegram", text: "Оператор тамоми равандро фаҳмонд, фармоиши Taobao бехатар омад ва нарх равшан буд." },
        { name: "Мадина", city: "Хуҷанд", channel: "Instagram", text: "Дар WhatsApp зуд ҷавоб доданд, бастабандӣ хуб буд ва дар марҳилаи анбор нофаҳмӣ нашуд." },
        { name: "Азиз", city: "Бохтар", channel: "Видео шарҳ", text: "Ман мол аз таъминкунанда фармоиш додам. Hamroh дар муошират ва пайгирӣ кӯмак кард." }
      ],
      faqs: [
        { question: "Интиқол чанд вақт мегирад?", answer: "Вақт аз масир, навъи маҳсулот, гумрук ва мавсим вобаста аст. Оператор пешакӣ муҳлатро мефаҳмонад." },
        { question: "Кадом маҳсулот манъ аст?", answer: "Молҳои хатарнок, баъзе батареяҳо, моеъҳо, силоҳ, ҳуҷҷатҳои қалбакӣ ва молҳои манъшуда қабул намешаванд." },
        { question: "Андози гумрук дохил мешавад?", answer: "Андоз аз навъи маҳсулот, арзиш ва қоидаҳои ҷорӣ вобаста аст. Даста маълумоти дуруст омода мекунад." },
        { question: "Моли нозук фиристода мешавад?", answer: "Бале, бо бастабандии иловагӣ ва тасдиқи хатар. Барои молҳои гарон суғурта тавсия мешавад." },
        { question: "Бо баргардонидан кӯмак мекунед?", answer: "Hamroh Assistant метавонад бо фурӯшанда муошират кунад ва дархости refund омода намояд." },
        { question: "Аз Taobao ё Pinduoduo чӣ тавр фармоиш диҳам?", answer: "Линки маҳсулотро ба оператор ё assistant фиристед. Мо маҳсулот, адреси анбор ва қадамҳоро месанҷем." }
      ]
    },
    blog: {
      eyebrow: "Блог / Хабарҳо",
      title: "Дастурҳо ва навсозиҳои логистика",
      ctaTitle: "Имрӯз интиқоли худро бо оператор оғоз кунед.",
      ctaText: "Линки маҳсулот, саволи анбор ё tracking-ро фиристед. Мо cargo, харид ва дастгириро якҷо мекунем.",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      viewAll: "Ҳамааш",
      posts: [
        { title: "Чӣ тавр аз Чин бехатар харид кунем", category: "Дастур", date: "Май 2026" },
        { title: "Air cargo ё auto cargo: кадомаш мувофиқ аст", category: "Логистика", date: "Май 2026" },
        { title: "Hamroh Assistant барои харид аз Чин", category: "Маҳсулот", date: "Апрел 2026" }
      ]
    },
    admin: {
      eyebrow: "Super Admin",
      title: "Маркази идоракунии контент, бор, SEO ва амалиёт",
      text: "Даста метавонад платформаро бе тағйири код идора кунад.",
      modules: []
    },
    standardCardText: "Ин модул аз платформаи Hamroh Cargo ва маркази идоракунии super admin идора мешавад.",
    standardButtons: { operator: "Тамос бо оператор", telegram: "Telegram" },
    pages: {
      about: { eyebrow: "Ширкат", title: "Ширкати cargo барои эътимод ва суръат", text: "Hamroh Cargo харид аз Чин, анбор, интиқол ва дастгириро барои Тоҷикистон мепайвандад.", items: ["Операторони таҷрибадор", "Анборҳои Чин", "Муоширати премиум", "Равандҳои шаффоф", "Кӯмак дар маркетплейс", "Экоcистемаи рушдёбанда"] },
      assistant: { eyebrow: "AI Ёрдамчӣ", title: "Hamroh Assistant барои харид аз Чин", text: "Ёрдамчии оянда барои линкҳои маҳсулот, тарҷума, refund, tracking ва пайваст ба оператор.", items: ["Таҳлили линк", "Дастури маркетплейс", "Тарҷумаи паём", "Кӯмак дар refund", "Фаҳмонидани tracking", "Пайваст ба оператор"] },
      terms: { eyebrow: "Шартҳо", title: "Шартҳо ва қоидаҳо", text: "Қоидаҳои бор, масъулияти мизоҷ, маҳсулоти манъшуда, гумрук ва маҳдудиятҳои хизмат.", items: ["Қабули бор", "Фармоишҳо", "Андози гумрук", "Моли нозук", "Кӯмаки refund", "Раванди даъво"] },
      privacy: { eyebrow: "Махфият", title: "Сиёсати махфият", text: "Маълумоти мизоҷ, бор, тамос, медиа ва амалиёти оператор бояд бехатар нигоҳ дошта шавад.", items: ["Ҷамъоварии маълумот", "Сабтҳои бор", "Медиа", "Ҳуқуқи корбар", "Амният", "Муҳлати нигоҳдорӣ"] },
      careers: { eyebrow: "Кор", title: "Ба дастаи Hamroh Cargo ҳамроҳ шавед", text: "Бо мо насли нави логистика, support, анбор ва marketplace services созед.", items: ["Операторон", "Координаторони анбор", "Менеджерони support", "Мутахассисони контент", "Backend engineers", "Менеджерони ҳамкорӣ"] },
      partnership: { eyebrow: "Ҳамкорӣ", title: "Бо Hamroh Cargo ҳамкорӣ кунед", text: "Барои таъминкунандагон, бизнесҳо, шарикони контент ва ширкатҳое, ки логистикаи боэътимоди Чин мехоҳанд.", items: ["Шабакаи таъминкунанда", "Дастаҳои commerce", "Warehouse API", "Affiliate partners", "Cargo corporate", "Барномаҳои омӯзишӣ"] }
    },
    contactPage: { eyebrow: "Тамос", title: "Бо Hamroh Cargo суҳбат кунед", text: "Линки маҳсулот, саволи бор, дархости анбор ё пешниҳоди ҳамкориро фиристед.", whatsapp: "WhatsApp", telegram: "Telegram", phone: "Телефон", email: "Email", map: "Харита" },
    tracking: { eyebrow: "Пайгирии бор", title: "Статуси cargo-ро бинед", text: "Рақами tracking-и Hamroh-ро ворид кунед ва марҳилаҳо, қайдҳо ва статусро бинед.", placeholder: "HC-2026-00124", search: "Ҷустуҷӯ", empty: "UI барои пайвастшавӣ ба shipment API омода аст.", result: "Demo: бор дар анбори Чин қабул шуд, бастабандӣ дар интизор аст." }
  },
  ru: {} as SiteContent,
  en: {} as SiteContent,
  zh: {} as SiteContent
};

content.ru = {
  footerDescription: "Профессиональная логистика, помощь с покупками из Китая, складские операции и поддержка cargo для Таджикистана.",
  platform: "Платформа",
  contact: "Контакты",
  hero: {
    navCta: "Связаться с оператором",
    eyebrow: "Логистическая платформа Китай - Таджикистан",
    title: "Быстрая доставка из Китая",
    alt: "Надежное cargo между Китаем и Таджикистаном",
    trust: "Ваш надежный партнер по логистике из Китая",
    text: "Профессиональный cargo сервис и помощь с китайскими маркетплейсами для клиентов в Таджикистане.",
    whatsapp: "WhatsApp",
    calculate: "Рассчитать доставку",
    operator: "Связаться с оператором",
    route: "Живой маршрут",
    chips: ["Безопасная отправка", "Доставка вовремя", "Умное отслеживание"],
    workflow: "Прием на складе, упаковка, таможня и финальная доставка в одном процессе."
  },
  metrics: [
    { label: "Лет опыта", value: 8, suffix: "+" },
    { label: "Активных отправок", value: 1240, suffix: "+" },
    { label: "Склада в Китае", value: 3 },
    { label: "Клиентов обслужено", value: 18000, suffix: "+" },
    { label: "Успешных доставок", value: 52000, suffix: "+" }
  ],
  why: {
    eyebrow: "Почему Hamroh",
    title: "Премиальная логистика с живой поддержкой и современными технологиями",
    text: "Понятный cargo опыт для семей, предпринимателей и компаний, которые покупают из Китая.",
    items: [
      { title: "Быстрая доставка", description: "Авиа и авто маршруты из Китая с понятными обновлениями от оператора." },
      { title: "Надежный сервис", description: "Документированный процесс, опытная команда и прозрачная коммуникация." },
      { title: "Склады в Китае", description: "Сеть складов в Пекине, Гуанчжоу и Иу." },
      { title: "Профессиональная поддержка", description: "Telegram, WhatsApp, телефон и живые операторы для каждого клиента." },
      { title: "Помощь с маркетплейсами", description: "Taobao, Pinduoduo, поставщики, возвраты и перевод." },
      { title: "Безопасный cargo", description: "Аккуратная упаковка, cargo правила, проверка рисков и опциональная страховка." },
      { title: "Страхование груза", description: "Дополнительная защита для хрупких, дорогих и коммерческих товаров." },
      { title: "AI Ассистент", description: "Hamroh Assistant объясняет заказы и этапы доставки." }
    ]
  },
  process: {
    eyebrow: "Процесс доставки",
    title: "Прозрачный маршрут от заказа товара до финальной выдачи",
    text: "Клиент понимает каждый этап, оператор контролирует процесс, а статус груза остается видимым.",
    steps: ["Заказ товара", "Склад в Китае", "Упаковка", "Отправка", "Таможня", "Прибытие в Таджикистан", "Доставка"]
  },
  services: {
    eyebrow: "Услуги",
    title: "Cargo сервисы для торговли Китай - Таджикистан",
    text: "Понятные сервисные модули с поддержкой оператора и управлением через admin panel.",
    items: [
      { title: "Air Cargo", tag: "Быстро", description: "Быстрый маршрут для срочных посылок, электроники, образцов и легких заказов." },
      { title: "Auto Cargo", tag: "Экономно", description: "Стабильная доставка для объемных грузов, бизнес-товаров и сборных отправок." },
      { title: "Страхование груза", tag: "Защита", description: "Защита для хрупких, дорогих и ценных товаров с маркетплейсов." },
      { title: "Помощь с маркетплейсами", tag: "Покупки", description: "Taobao, Pinduoduo, общение с продавцами, перевод и возвраты." },
      { title: "Складские услуги", tag: "Склад", description: "Прием, сортировка, проверка упаковки, консолидация и QR адреса в Китае." },
      { title: "Отслеживание доставки", tag: "Tracking", description: "Заметки оператора, этапы отправки, уведомления и история статусов." }
    ]
  },
  mobile: {
    eyebrow: "Мобильный сервис",
    title: "Hamroh Assistant всегда под рукой.",
    text: "Будущий мобильный слой для ссылок на товары, адресов склада, tracking, чата с оператором и помощи с покупками.",
    cta: "Открыть Hamroh Assistant",
    features: ["QR прием на складе", "Этапы отправки", "Уведомления оператора", "Переход в WhatsApp"],
    status: "Tracking готов",
    route: "Склад Гуанчжоу → Душанбе"
  },
  warehouses: {
    eyebrow: "Склады в Китае",
    title: "Складская сеть для быстрого приема и консолидации",
    text: "Скопируйте данные склада, отправьте продавцу и согласуйте детали с операторами Hamroh.",
    copy: "Копировать",
    qr: "QR код",
    items: [
      { city: "Пекин", address: "Склад Hamroh Cargo в Пекине, Китай", manager: "Команда северного Китая", hours: "09:00-20:00" },
      { city: "Гуанчжоу", address: "Склад Hamroh Cargo в Гуанчжоу, Китай", manager: "Команда южного Китая", hours: "09:00-21:00" },
      { city: "Иу", address: "Склад Hamroh Cargo в Иу, Китай", manager: "Wholesale команда", hours: "09:00-20:00" }
    ]
  },
  reviewsFaq: {
    reviewsEyebrow: "Доверие клиентов",
    reviewsTitle: "Конкретные и надежные отзывы",
    reviewsText: "Каналы, скриншоты, видео и истории, подтвержденные оператором.",
    faqEyebrow: "FAQ",
    faqTitle: "Понятные ответы до обращения в поддержку",
    faqText: "Сроки доставки, налоги, запрещенные товары, хрупкие товары и инструкции по маркетплейсам.",
    reviews: [
      { name: "Фаридун", city: "Душанбе", channel: "Telegram", text: "Оператор объяснил весь процесс, заказ с Taobao пришел безопасно, цена была понятной." },
      { name: "Мадина", city: "Худжанд", channel: "Instagram", text: "Быстро ответили в WhatsApp, упаковка хорошая, на этапе склада не было путаницы." },
      { name: "Азиз", city: "Бохтар", channel: "Видео отзыв", text: "Я заказал товар у поставщика. Hamroh помог с общением и отслеживанием." }
    ],
    faqs: [
      { question: "Сколько занимает доставка?", answer: "Срок зависит от маршрута, категории товара, таможни и сезона. Оператор заранее уточняет примерное время." },
      { question: "Какие товары запрещены?", answer: "Опасные грузы, некоторые батареи, жидкости, оружие, поддельные документы и запрещенные таможней товары не принимаются." },
      { question: "Таможенные налоги включены?", answer: "Налоги зависят от типа товара, стоимости и действующих правил. Команда помогает подготовить данные." },
      { question: "Можно отправлять хрупкие товары?", answer: "Да, с дополнительной упаковкой и подтверждением рисков. Для дорогих товаров рекомендуется страховка." },
      { question: "Помогаете с возвратом?", answer: "Hamroh Assistant помогает общаться с продавцом и готовить запрос на refund." },
      { question: "Как заказать с Taobao или Pinduoduo?", answer: "Отправьте ссылку оператору или assistant. Мы проверим товар, адрес склада и следующие шаги." }
    ]
  },
  blog: {
    eyebrow: "Блог / Новости",
    title: "Гайды и обновления логистики",
    ctaTitle: "Начните доставку из Китая с реальным оператором сегодня.",
    ctaText: "Отправьте ссылку товара, вопрос по складу или tracking. Мы соединяем cargo, помощь с покупками и обновления доставки.",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    viewAll: "Все",
    posts: [
      { title: "Как безопасно покупать из Китая", category: "Гайд", date: "Май 2026" },
      { title: "Air cargo или auto cargo: какой маршрут выбрать", category: "Логистика", date: "Май 2026" },
      { title: "Hamroh Assistant для китайских маркетплейсов", category: "Продукт", date: "Апрель 2026" }
    ]
  },
  admin: { eyebrow: "Super Admin", title: "Центр управления контентом, cargo, SEO и операциями", text: "Бизнес-команда может управлять платформой без изменения кода.", modules: [] },
  standardCardText: "Этот модуль управляется через платформу Hamroh Cargo и super admin control center.",
  standardButtons: { operator: "Связаться с оператором", telegram: "Telegram" },
  pages: {
    about: { eyebrow: "О компании", title: "Современная cargo компания, построенная на доверии", text: "Hamroh Cargo соединяет закупки из Китая, складские операции, доставку и поддержку клиентов в Таджикистане.", items: ["Опытные операторы", "Складская сеть в Китае", "Премиальная коммуникация", "Прозрачные процессы", "Поддержка маркетплейсов", "Масштабируемая экосистема"] },
    assistant: { eyebrow: "AI Ассистент", title: "Hamroh Assistant для покупок из Китая", text: "Ассистент для ссылок на товары, перевода, refund, tracking и передачи оператору.", items: ["Анализ ссылок", "Инструкции маркетплейсов", "Перевод сообщений", "Помощь с refund", "Объяснение tracking", "Передача оператору"] },
    terms: { eyebrow: "Условия", title: "Условия и правила", text: "Правила cargo, ответственность клиента, запрещенные товары, таможенные требования и ограничения сервиса.", items: ["Прием груза", "Заказы с маркетплейсов", "Таможенные платежи", "Хрупкие товары", "Поддержка refund", "Процесс претензий"] },
    privacy: { eyebrow: "Конфиденциальность", title: "Политика конфиденциальности", text: "Данные клиента, сведения о грузе, контакты, медиа и действия операторов защищены.", items: ["Сбор данных", "Записи отправок", "Медиа файлы", "Права пользователя", "Контроль безопасности", "Срок хранения"] },
    careers: { eyebrow: "Вакансии", title: "Присоединяйтесь к Hamroh Cargo", text: "Создавайте новое поколение логистики, поддержки, складских процессов и marketplace services.", items: ["Операторы", "Координаторы склада", "Менеджеры поддержки", "Контент специалисты", "Backend инженеры", "Менеджеры партнерств"] },
    partnership: { eyebrow: "Партнерство", title: "Станьте партнером Hamroh Cargo", text: "Для поставщиков, локального бизнеса, контент-партнеров и компаний, которым нужна надежная логистика из Китая.", items: ["Сеть поставщиков", "Commerce команды", "Warehouse API", "Affiliate партнеры", "Корпоративный cargo", "Обучающие программы"] }
  },
  contactPage: { eyebrow: "Контакты", title: "Свяжитесь с Hamroh Cargo", text: "Отправьте ссылку товара, вопрос по отправке, запрос по складу или предложение о партнерстве.", whatsapp: "WhatsApp", telegram: "Telegram", phone: "Телефон", email: "Email", map: "Карта" },
  tracking: { eyebrow: "Отслеживание груза", title: "Проверьте статус cargo", text: "Введите tracking номер Hamroh, чтобы увидеть прогресс, заметки оператора и текущий статус.", placeholder: "HC-2026-00124", search: "Найти", empty: "Интерфейс tracking готов к подключению shipment API.", result: "Demo: груз принят на складе в Китае, ожидает проверки упаковки." }
} as SiteContent;

content.en = {
  footerDescription: "Professional logistics, China marketplace assistance, warehouse operations, and shipment support for Tajikistan.",
  platform: "Platform",
  contact: "Contact",
  hero: {
    navCta: "Contact operator",
    eyebrow: "China to Tajikistan logistics platform",
    title: "Fast Delivery From China",
    alt: "Reliable Cargo Between China & Tajikistan",
    trust: "Your Trusted China Logistics Partner",
    text: "Professional cargo and China marketplace assistant service between China and Tajikistan.",
    whatsapp: "WhatsApp",
    calculate: "Calculate Delivery",
    operator: "Contact Operator",
    route: "Live route",
    chips: ["Secure shipping", "On-time delivery", "Smart tracking"],
    workflow: "Warehouse intake, packaging, customs coordination, and final delivery in one premium workflow."
  },
  metrics: [
    { label: "Years of experience", value: 8, suffix: "+" },
    { label: "Active shipments", value: 1240, suffix: "+" },
    { label: "Warehouses in China", value: 3 },
    { label: "Customers served", value: 18000, suffix: "+" },
    { label: "Successful deliveries", value: 52000, suffix: "+" }
  ],
  why: {
    eyebrow: "Why Hamroh",
    title: "Premium logistics service with human support and modern technology",
    text: "A clear cargo experience for families, entrepreneurs, and businesses buying from China.",
    items: [
      { title: "Fast Delivery", description: "Air and auto routes from China with clear operator updates." },
      { title: "Reliable Service", description: "Documented process, experienced team, and transparent communication." },
      { title: "China Warehouses", description: "Warehouse network in Beijing, Guangzhou, and Yiwu." },
      { title: "Professional Support", description: "Telegram, WhatsApp, phone, and live operators for every customer." },
      { title: "Marketplace Assistance", description: "Support for Taobao, Pinduoduo, suppliers, refunds, and translations." },
      { title: "Secure Cargo", description: "Careful packaging, cargo rules, risk checks, and optional insurance." },
      { title: "Cargo Insurance", description: "Extra protection for fragile, expensive, or commercial goods." },
      { title: "AI Assistance", description: "Hamroh Assistant explains orders and shipment stages." }
    ]
  },
  process: {
    eyebrow: "Delivery process",
    title: "A transparent route from product order to final delivery",
    text: "Customers understand every stage, operators control the workflow, and shipments stay visible.",
    steps: ["Product order", "China warehouse", "Packaging", "Shipment", "Customs", "Tajikistan arrival", "Delivery"]
  },
  services: {
    eyebrow: "Services",
    title: "Smart cargo services engineered for China to Tajikistan trade",
    text: "Clear service modules with operator support and future admin control.",
    items: [
      { title: "Air Cargo", tag: "Fast", description: "Fast route for urgent parcels, electronics, samples, and lightweight commercial orders." },
      { title: "Auto Cargo", tag: "Economy", description: "Stable ground delivery for volume cargo, business inventory, and consolidated shipments." },
      { title: "Cargo Insurance", tag: "Protection", description: "Protection options for fragile, expensive, and high-value marketplace products." },
      { title: "Marketplace Assistance", tag: "Buying", description: "Taobao, Pinduoduo, supplier communication, translation, and refund support." },
      { title: "Warehouse Services", tag: "Warehouse", description: "China intake, sorting, packaging checks, consolidation, and QR-ready addresses." },
      { title: "Delivery Tracking", tag: "Tracking", description: "Operator notes, shipment milestones, customer alerts, and transparent status history." }
    ]
  },
  mobile: {
    eyebrow: "Mobile / App",
    title: "Hamroh Assistant in your pocket.",
    text: "A future mobile layer for product links, warehouse addresses, delivery tracking, operator chat, and marketplace support.",
    cta: "Open Hamroh Assistant",
    features: ["QR warehouse intake", "Shipment milestones", "Operator notifications", "WhatsApp handoff"],
    status: "Tracking ready",
    route: "Guangzhou warehouse → Dushanbe"
  },
  warehouses: {
    eyebrow: "China warehouses",
    title: "Warehouse network for faster intake and consolidation",
    text: "Copy warehouse details, send them to sellers, and coordinate with Hamroh operators.",
    copy: "Copy",
    qr: "QR code",
    items: [
      { city: "Beijing", address: "Hamroh Cargo Beijing warehouse, China", manager: "North China team", hours: "09:00-20:00" },
      { city: "Guangzhou", address: "Hamroh Cargo Guangzhou warehouse, China", manager: "South China team", hours: "09:00-21:00" },
      { city: "Yiwu", address: "Hamroh Cargo Yiwu warehouse, China", manager: "Wholesale team", hours: "09:00-20:00" }
    ]
  },
  reviewsFaq: {
    reviewsEyebrow: "Customer trust",
    reviewsTitle: "Specific, useful, and trustworthy reviews",
    reviewsText: "Channels, screenshots, videos, and operator-verified stories.",
    faqEyebrow: "FAQ",
    faqTitle: "Clear answers before customers contact support",
    faqText: "Delivery time, taxes, prohibited products, fragile goods, and marketplace instructions.",
    reviews: [
      { name: "Faridun", city: "Dushanbe", channel: "Telegram", text: "The operator explained the full process, my Taobao order arrived safely, and the price was clear." },
      { name: "Madina", city: "Khujand", channel: "Instagram", text: "Fast answer in WhatsApp, professional packaging, and no confusion at the warehouse stage." },
      { name: "Aziz", city: "Bokhtar", channel: "Video review", text: "I ordered supplier goods from China. Hamroh helped with communication and delivery tracking." }
    ],
    faqs: [
      { question: "How long does delivery take?", answer: "Delivery time depends on route, product category, customs, and seasonal load. Operators confirm timing before shipping." },
      { question: "Which products are prohibited?", answer: "Dangerous goods, some batteries, liquids, weapons, counterfeit documents, and customs-prohibited items are not accepted." },
      { question: "Are customs taxes included?", answer: "Taxes depend on product type, declared value, and current customs rules. The team helps prepare the right information." },
      { question: "Can fragile products be shipped?", answer: "Yes, with additional packaging and risk confirmation. Insurance is recommended for expensive goods." },
      { question: "Can you help with refunds?", answer: "Hamroh Assistant can help communicate with sellers and prepare refund requests." },
      { question: "How do I order from Taobao or Pinduoduo?", answer: "Send the product link to the operator or assistant. We verify details, warehouse address, and next steps." }
    ]
  },
  blog: {
    eyebrow: "Blog / News",
    title: "Guides and logistics updates",
    ctaTitle: "Start your China delivery with a real operator today.",
    ctaText: "Send your product link, warehouse question, or tracking request. We connect cargo operations, buying support, and shipment updates.",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    viewAll: "View all",
    posts: [
      { title: "How to buy from China safely", category: "Guide", date: "May 2026" },
      { title: "Air cargo or auto cargo: which route is right", category: "Logistics", date: "May 2026" },
      { title: "Hamroh Assistant for China marketplace support", category: "Product", date: "April 2026" }
    ]
  },
  admin: { eyebrow: "Super Admin", title: "Control center for content, cargo, SEO, and operations", text: "The business team can manage the platform without code changes.", modules: [] },
  standardCardText: "This module is managed through the Hamroh Cargo platform and super admin control center.",
  standardButtons: { operator: "Contact operator", telegram: "Telegram" },
  pages: {
    about: { eyebrow: "About", title: "A modern cargo company built for trust", text: "Hamroh Cargo connects China sourcing, warehouse operations, cargo delivery, and customer support for Tajikistan.", items: ["Experienced operators", "China warehouse network", "Premium communication", "Transparent workflows", "Marketplace support", "Scalable ecosystem"] },
    assistant: { eyebrow: "AI Assistant", title: "Hamroh Assistant for China marketplace support", text: "A future-ready assistant for product links, translation, refunds, tracking, and operator handoff.", items: ["Product link analysis", "Marketplace instructions", "Message translation", "Refund guidance", "Tracking explanation", "Operator escalation"] },
    terms: { eyebrow: "Terms", title: "Terms & Conditions", text: "Cargo rules, customer responsibilities, prohibited products, customs requirements, and service limitations.", items: ["Cargo acceptance", "Marketplace orders", "Customs duties", "Fragile products", "Refund support", "Claims process"] },
    privacy: { eyebrow: "Privacy", title: "Privacy Policy", text: "Customer data, shipment details, contact information, uploaded media, and operator activity are handled securely.", items: ["Data collection", "Shipment records", "Media uploads", "User rights", "Security controls", "Retention policy"] },
    careers: { eyebrow: "Careers", title: "Join the Hamroh Cargo team", text: "Build the next generation of logistics, support, warehouse workflows, and marketplace services.", items: ["Operators", "Warehouse coordinators", "Support managers", "Content specialists", "Backend engineers", "Partnership managers"] },
    partnership: { eyebrow: "Partnership", title: "Partner with Hamroh Cargo", text: "For suppliers, local businesses, content partners, and companies that need reliable China logistics.", items: ["Supplier network", "Commerce teams", "Warehouse APIs", "Affiliate partners", "Corporate cargo", "Training programs"] }
  },
  contactPage: { eyebrow: "Contact", title: "Talk to Hamroh Cargo", text: "Send product links, shipment questions, warehouse requests, or partnership proposals.", whatsapp: "WhatsApp", telegram: "Telegram", phone: "Phone", email: "Email", map: "Map" },
  tracking: { eyebrow: "Shipment tracking", title: "Track your cargo status", text: "Enter your Hamroh tracking number to view shipment progress, operator notes, and latest status.", placeholder: "HC-2026-00124", search: "Search", empty: "Tracking UI is ready for the FastAPI shipment endpoint.", result: "Demo status: received in China warehouse, packaging review pending." }
} as SiteContent;

content.zh = {
  footerDescription: "为塔吉克斯坦客户提供中国采购协助、仓库操作、国际货运与全流程支持。",
  platform: "平台",
  contact: "联系",
  hero: {
    navCta: "联系运营专员",
    eyebrow: "中国 - 塔吉克斯坦物流平台",
    title: "中国快速发货",
    alt: "中国与塔吉克斯坦之间的可靠货运",
    trust: "您值得信赖的中国物流伙伴",
    text: "为塔吉克斯坦客户提供专业货运服务和中国电商平台采购协助。",
    whatsapp: "WhatsApp",
    calculate: "计算运费",
    operator: "联系运营专员",
    route: "实时路线",
    chips: ["安全运输", "准时交付", "智能跟踪"],
    workflow: "仓库入库、包装、清关和最终派送整合在一个高端流程中。"
  },
  metrics: [
    { label: "年经验", value: 8, suffix: "+" },
    { label: "进行中货件", value: 1240, suffix: "+" },
    { label: "中国仓库", value: 3 },
    { label: "服务客户", value: 18000, suffix: "+" },
    { label: "成功交付", value: 52000, suffix: "+" }
  ],
  why: {
    eyebrow: "为什么选择Hamroh",
    title: "优质物流服务，人工支持和现代技术",
    text: "为从中国购买商品的家庭、创业者和企业提供清晰的货运体验。",
    items: [
      { title: "快速交付", description: "来自中国的航空和陆路路线，并提供清晰的运营专员更新。" },
      { title: "可靠服务", description: "文件齐全，经验丰富的团队和透明的沟通。" },
      { title: "中国仓库", description: "北京、广州和义乌的仓库网络。" },
      { title: "专业支持", description: "Telegram、WhatsApp、电话和实时运营专员为每位客户服务。" },
      { title: "电商平台协助", description: "支持淘宝、拼多多、供应商沟通、翻译和退款。" },
      { title: "安全货运", description: "细心的包装、货运规则、风险检查和可选保险。" },
      { title: "货运保险", description: "为易碎品、昂贵或商业商品提供额外保护。" },
      { title: "AI助手", description: "Hamroh助手解释订单和发货阶段。" }
    ]
  },
  process: {
    eyebrow: "交付流程",
    title: "从产品订单到最终交付的透明路线",
    text: "客户了解每一步，运营专员控制工作流程，货件始终可见。",
    steps: ["产品订单", "中国仓库", "包装", "发货", "清关", "到达塔吉克斯坦", "最终交付"]
  },
  services: {
    eyebrow: "服务",
    title: "为中塔贸易优化的智能货运服务",
    text: "清晰的服务模块，配有运营专员支持和未来的管理员控制。",
    items: [
      { title: "航空货运", tag: "快速", description: "用于紧急包裹、电子产品、样品和轻型商业订单的快速路线。" },
      { title: "汽车货运", tag: "经济", description: "用于大宗货物、商业库存和合并货件的稳定陆路交付。" },
      { title: "货运保险", tag: "保护", description: "为易碎、昂贵和高价值电商产品提供保护选项。" },
      { title: "电商平台协助", tag: "购买", description: "淘宝、拼多多、供应商沟通、翻译和退款支持。" },
      { title: "仓库服务", tag: "仓库", description: "中国入库、分类、包装检查、合并和二维码就绪地址。" },
      { title: "交付跟踪", tag: "跟踪", description: "运营专员备注、发货里程碑、客户提醒和透明的状态历史。" }
    ]
  },
  mobile: {
    eyebrow: "移动应用",
    title: "Hamroh助手随时随地为您服务。",
    text: "提供商品链接、仓库地址、交付跟踪、运营专员聊天和电商平台支持的未来移动层。",
    cta: "打开Hamroh助手",
    features: ["二维码仓库入库", "发货里程碑", "运营专员通知", "WhatsApp切换"],
    status: "跟踪准备就绪",
    route: "广州仓库 → 杜尚别"
  },
  warehouses: {
    eyebrow: "中国仓库",
    title: "仓库网络，实现更快的入库和合并",
    text: "复制仓库详情，发送给卖家，并与Hamroh运营专员协调。",
    copy: "复制",
    qr: "二维码",
    items: [
      { city: "北京", address: "Hamroh Cargo北京仓库，中国", manager: "华北团队", hours: "09:00-20:00" },
      { city: "广州", address: "Hamroh Cargo广州仓库，中国", manager: "华南团队", hours: "09:00-21:00" },
      { city: "义乌", address: "Hamroh Cargo义乌仓库，中国", manager: "批发团队", hours: "09:00-20:00" }
    ]
  },
  reviewsFaq: {
    reviewsEyebrow: "客户信任",
    reviewsTitle: "具体、有用和可信赖的评论",
    reviewsText: "频道、截图、视频和运营专员验证的故事。",
    faqEyebrow: "常见问题",
    faqTitle: "客户联系支持前的清晰答案",
    faqText: "交付时间、税费、禁止产品、易碎商品和电商平台说明。",
    reviews: [
      { name: "法里顿", city: "杜尚别", channel: "Telegram", text: "运营专员解释了整个流程，我的淘宝订单安全到达，价格清晰。" },
      { name: "玛迪娜", city: "胡占德", channel: "Instagram", text: "WhatsApp上反应迅速，专业包装，仓库阶段没有混淆。" },
      { name: "阿齐兹", city: "博赫塔尔", channel: "视频评论", text: "我从供应商那里订购了商品。Hamroh帮助了沟通和交付跟踪。" }
    ],
    faqs: [
      { question: "交付需要多长时间？", answer: "交付时间取决于路线、产品类别、清关和季节负荷。运营专员在发货前确认时间。" },
      { question: "哪些产品被禁止？", answer: "危险品、某些电池、液体、武器、假冒文件和海关禁止的物品不被接受。" },
      { question: "关税包括在内吗？", answer: "税费取决于产品类型、申报价值和现行关税规则。团队帮助准备正确信息。" },
      { question: "可以运送易碎产品吗？", answer: "可以，需要额外包装和风险确认。建议为昂贵商品购买保险。" },
      { question: "你们可以帮助退款吗？", answer: "Hamroh助手可以帮助与卖家沟通和准备退款请求。" },
      { question: "我如何从淘宝或拼多多下单？", answer: "将商品链接发送给运营专员或助手。我们验证详情、仓库地址和后续步骤。" }
    ]
  },
  blog: {
    eyebrow: "博客/新闻",
    title: "指南和物流更新",
    ctaTitle: "立即与真实运营专员开始您的中国交付。",
    ctaText: "发送您的商品链接、仓库问题或跟踪请求。我们连接货运操作、购买支持和发货更新。",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    viewAll: "查看全部",
    posts: [
      { title: "如何安全地从中国购买", category: "指南", date: "2026年5月" },
      { title: "航空货运或汽车货运：选择哪个路线", category: "物流", date: "2026年5月" },
      { title: "Hamroh助手用于中国电商平台支持", category: "产品", date: "2026年4月" }
    ]
  },
  admin: { eyebrow: "超级管理员", title: "内容、货运、SEO和运营控制中心", text: "业务团队可以管理平台，无需代码更改。", modules: [] },
  standardCardText: "此模块通过Hamroh Cargo平台和超级管理员控制中心进行管理。",
  standardButtons: { operator: "联系运营专员", telegram: "Telegram" },
  pages: {
    about: { eyebrow: "关于", title: "为信任而建立的现代货运公司", text: "Hamroh Cargo连接中国采购、仓库运营、货运交付和塔吉克斯坦的客户支持。", items: ["经验丰富的运营专员", "中国仓库网络", "优质沟通", "透明工作流程", "电商平台支持", "可扩展生态系统"] },
    assistant: { eyebrow: "AI助手", title: "Hamroh助手用于中国电商平台支持", text: "为商品链接、翻译、退款、跟踪和运营专员交接提供的未来就绪助手。", items: ["商品链接分析", "电商平台说明", "消息翻译", "退款指导", "跟踪解释", "运营专员升级"] },
    terms: { eyebrow: "条款", title: "条款和条件", text: "货运规则、客户责任、禁止产品、海关要求和服务限制。", items: ["货物接受", "电商订单", "关税", "易碎产品", "退款支持", "索赔流程"] },
    privacy: { eyebrow: "隐私", title: "隐私政策", text: "客户数据、发货详情、联系信息、上传媒体和运营专员活动都得到安全处理。", items: ["数据收集", "发货记录", "媒体上传", "用户权限", "安全控制", "保留政策"] },
    careers: { eyebrow: "招聘", title: "加入Hamroh Cargo团队", text: "构建下一代物流、支持、仓库工作流程和电商服务。", items: ["运营专员", "仓库协调员", "支持经理", "内容专家", "后端工程师", "合作伙伴经理"] },
    partnership: { eyebrow: "合作", title: "与Hamroh Cargo合作", text: "面向供应商、本地企业、内容合作伙伴和需要可靠中国物流的公司。", items: ["供应商网络", "商业团队", "仓库API", "联盟合作伙伴", "企业货运", "培训计划"] }
  },
  contactPage: { eyebrow: "联系", title: "联系 Hamroh Cargo", text: "发送商品链接、货运问题、仓库请求或合作方案。", whatsapp: "WhatsApp", telegram: "Telegram", phone: "电话", email: "邮箱", map: "地图" },
  tracking: { eyebrow: "物流跟踪", title: "查看您的货运状态", text: "输入Hamroh跟踪号码，查看发货进度、运营专员备注和最新状态。", placeholder: "HC-2026-00124", search: "搜索", empty: "跟踪用户界面已准备好连接FastAPI端点。", result: "演示状态：已在中国仓库收货，等待包装审核。" }
} as SiteContent;

const moduleIcons = [Palette, Sparkles, Image, Boxes, Warehouse, PackageCheck, UsersRound, BadgeCheck, FileText, Search, Globe2, LockKeyhole];
const moduleKeys = [
  "Brand system",
  "Homepage builder",
  "Media library",
  "Services",
  "Warehouses",
  "Shipments",
  "Operators",
  "Reviews",
  "FAQ & rules",
  "SEO center",
  "Translations",
  "Security"
];

export function getSiteContent(locale: Locale): SiteContent {
  const current = content[locale] ?? content.tj;
  current.admin.modules = moduleKeys.map((title, index) => ({
    title,
    description: current.standardCardText,
    icon: moduleIcons[index]
  }));
  return current;
}
