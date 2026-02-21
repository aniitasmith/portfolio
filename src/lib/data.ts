import type { Locale } from '@/i18n'

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  highlights: string[]
  link?: string
  github?: string
  featured: boolean
  imageSrc?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  year: string
}

export const education: Record<Locale, Education[]> = {
  en: [
    {
      degree: 'Bachelor of Chemical Engineering (B.Eng equivalent)',
      school: 'Universidad Nacional Experimental Francisco de Miranda',
      location: 'Venezuela',
      year: '2015',
    },
  ],
  es: [
    {
      degree: 'Ingeniería Química (equivalente a B.Eng)',
      school: 'Universidad Nacional Experimental Francisco de Miranda',
      location: 'Venezuela',
      year: '2015',
    },
  ],
}

export const experiences: Record<Locale, Experience[]> = {
  en: [
    {
      title: 'Software Developer',
      company: 'Moonvalley',
      location: 'Toronto, Canada',
      period: 'Jan 2024 - Jan 2026',
      description: [
        "Worked on Moonvalley's AI video platform (Next.js, TypeScript, Tailwind, Supabase, Python), shipping UI/UX improvements, wiring product flows to backend services, and supporting fast release cycles",
        'Led Moonvalley redesign into an interactive video editor, building complex editing interactions and reusable UI patterns',
        'Built Maker.ai (Vue + Fabric.js), developing an infinite-canvas editing experience, improving mobile usability, and migrating styling to Tailwind CSS',
        'Built and maintained APIs and integrations for product workflows using Python (FastAPI) and PostgreSQL (SQLAlchemy), supporting generation, data persistence, and feature delivery',
        'Improved bot command reliability in a Discord-first workflow using Python + Discord API and helped launch an initial mobile-friendly web experience with theming and UX updates in Vue.js + Stylus',
        'Mentored two engineers transitioning into frontend development, providing guidance on architecture and best practices to accelerate their ability to ship production-ready UI features'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Supabase',
        'Vue',
        'Fabric.js',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Docker'
      ]
    },
    {
      title: 'Web Developer',
      company: 'ITGlobers',
      location: 'Bogota, Colombia (Remote, Contract)',
      period: 'Jan 2023 - Dec 2023',
      description: [
        'Supported multiple VTEX client storefronts in parallel, handling day-to-day frontend delivery and production support across Home, PLP/PDP, cart, checkout, account, and landing pages using React (TypeScript/JavaScript)',
        'Shipped fixes and UI improvements across different themes and storefront setups, leaning on consistent patterns to keep changes easy to maintain',
        'Maintained core commerce integrations (catalog, login/auth, search, checkout) and debugged edge cases related to REST APIs, data loading, and state behavior',
        'Collaborated closely with product and design from Figma specs, providing delivery estimations, participating in code reviews, and performing hands-on QA while troubleshooting cross-browser, layout, and performance issues'
      ],
      technologies: ['React', 'TypeScript', 'JavaScript', 'REST APIs', 'VTEX', 'Figma']
    }
  ],
  es: [
    {
      title: 'Desarrolladora de Software',
      company: 'Moonvalley',
      location: 'Toronto, Canadá',
      period: 'Ene 2024 - Ene 2026',
      description: [
        'Trabajé en la plataforma de video con IA de Moonvalley (Next.js, TypeScript, Tailwind, Supabase, Python), entregando mejoras de UI/UX, conectando flujos de producto a servicios backend y soportando ciclos de release rápidos',
        'Lideré el rediseño de Moonvalley hacia un editor de video interactivo, construyendo interacciones complejas de edición y patrones de UI reutilizables',
        'Construí Maker.ai (Vue + Fabric.js), desarrollando una experiencia de edición en canvas infinito, mejorando la usabilidad móvil y migrando estilos a Tailwind CSS',
        'Construí y mantuve APIs e integraciones para flujos de producto usando Python (FastAPI) y PostgreSQL (SQLAlchemy), soportando generación, persistencia de datos y entrega de features',
        'Mejoré la confiabilidad de comandos en un flujo "Discord-first" usando Python + Discord API y ayudé a lanzar una experiencia web inicial mobile-friendly con theming y mejoras de UX en Vue.js + Stylus',
        'Mentoricé a dos ingenieros en transición hacia frontend, guiándolos en arquitectura y buenas prácticas para acelerar la entrega de UI en producción'
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Supabase',
        'Vue',
        'Fabric.js',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'Docker'
      ]
    },
    {
      title: 'Desarrolladora Web',
      company: 'ITGlobers',
      location: 'Bogotá, Colombia (Remoto, Contrato)',
      period: 'Ene 2023 - Dic 2023',
      description: [
        'Soporté múltiples storefronts de clientes VTEX en paralelo, manejando entrega frontend del día a día y soporte en producción en Home, PLP/PDP, carrito, checkout, cuenta y landing pages usando React (TypeScript/JavaScript)',
        'Entregué fixes y mejoras de UI a través de distintos themes y configuraciones, apoyándome en patrones consistentes para mantener cambios fáciles de mantener',
        'Mantuve integraciones core de e-commerce (catálogo, login/auth, búsqueda, checkout) y depuré edge cases relacionados a APIs REST, carga de datos y estado',
        'Colaboré con producto y diseño desde Figma, estimando entregas, participando en code reviews y haciendo QA hands-on mientras resolvía issues cross-browser, layout y performance'
      ],
      technologies: ['React', 'TypeScript', 'JavaScript', 'REST APIs', 'VTEX', 'Figma']
    }
  ]
}

export const projects: Record<Locale, Project[]> = {
  en: [
    {
      id: 'premiere-extension',
      title: 'Moonvalley Adobe Premiere Pro Extension',
      description: 'Public Adobe Premiere Pro extension (React, Vite, Adobe APIs) that lets creators generate and insert AI videos inside Premiere Pro',
      longDescription: 'A publicly shipped Adobe Premiere Pro extension enabling creators to generate and insert AI videos directly inside Premiere Pro. I designed desktop-friendly auth + media sync workflows under extension constraints, built a reusable UI architecture, and integrated backend APIs for upload, job status, and delivery.',
      technologies: ['React', 'Vite', 'TypeScript', 'CEP', 'Adobe APIs'],
      highlights: [
        'Shipped a public extension enabling creators to generate and insert AI videos inside Premiere Pro',
        'Designed auth and media sync workflows under desktop extension constraints; built reusable UI architecture',
        'Integrated backend APIs for asset upload, job status, and delivery'
      ],
      link: 'https://exchange.adobe.com/apps/cc/203754',
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
    },
    {
      id: 'ai-canvas',
      title: 'Emoji Canvas Generator',
      description: 'Generate cute emoji-style images with AI (FLUX) and compose them on an interactive canvas with shapes, drawing, and text.',
      longDescription: 'A creative web app that generates emoji-style images from text using Hugging Face FLUX.1-schnell, then lets you arrange them on an infinite canvas with Fabric.js: pan/zoom, shapes, freehand drawing, text, layer controls, undo/redo, and export as PNG.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Fabric.js', 'Hugging Face API'],
      highlights: [
        'AI emoji-style image generation with FLUX and prompt enhancement',
        'Interactive canvas: pan, zoom, shapes, drawing, text, layer management',
        'Undo/redo and export composition as PNG'
      ],
      link: 'https://ai-canvas-seven.vercel.app',
      featured: true,
      imageSrc: '/emoji-canvas.png'
    },
    {
      id: 'fluxcambio',
      title: 'FluxCambio',
      description: 'USDT and REF converter for Venezuela with BCV and Binance P2P rates, arbitrage comparator, and CAD conversion.',
      longDescription: 'A conversion calculator (REF, VES, CAD) with real-time BCV and Binance P2P rates. Includes arbitrage comparison (USD vs Bs), conversion history, historical rate charts, CSV export, and glassmorphism UI. Built as a PWA with Next.js, Recharts, and Framer Motion.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'SWR'],
      highlights: [
        'Real-time BCV and Binance P2P rates; REF, VES, and CAD conversion modes',
        'Arbitrage comparator to choose between paying in USD or bolívars',
        'Conversion history, 7/30/90-day rate charts, and PWA support'
      ],
      link: 'https://fluxcambio.vercel.app',
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'
    },
    {
      id: 'color-palette',
      title: 'Color Palette Generator',
      description: 'Generate beautiful color palettes instantly. Lock colors you like and regenerate the rest.',
      longDescription: 'A color palette generator with the ability to lock individual colors, copy hex/rgb values, and export as CSS variables. Press space to generate new palettes quickly.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Generate random palettes with spacebar shortcut',
        'Lock individual colors while regenerating others',
        'Export palette as CSS variables'
      ],
      link: 'https://color-palette-seven-lemon.vercel.app',
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&q=80'
    }
  ],
  es: [
    {
      id: 'premiere-extension',
      title: 'Extensión de Moonvalley para Adobe Premiere Pro',
      description: 'Extensión pública para Premiere Pro (React, Vite, Adobe APIs) que permite generar e insertar videos con IA dentro de Premiere Pro',
      longDescription: 'Extensión pública para Adobe Premiere Pro que permite generar e insertar videos con IA directamente dentro de Premiere. Diseñé flujos de auth y sincronización de media bajo restricciones de extensiones de escritorio, construí una arquitectura de UI reutilizable e integré APIs backend para upload, estado de jobs y entrega.',
      technologies: ['React', 'Vite', 'TypeScript', 'CEP', 'APIs de Adobe'],
      highlights: [
        'Entregué una extensión pública para generar e insertar videos con IA dentro de Premiere Pro',
        'Diseñé flujos de auth y sincronización de media bajo restricciones de extensión; arquitectura de UI reutilizable',
        'Integré APIs backend para upload de assets, estado de jobs y delivery'
      ],
      link: 'https://exchange.adobe.com/apps/cc/203754',
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
    },
    {
      id: 'ai-canvas',
      title: 'Emoji Canvas Generator',
      description: 'Genera imágenes estilo emoji con IA (FLUX) y compónlas en un canvas interactivo con formas, dibujo y texto.',
      longDescription: 'App web creativa que genera imágenes estilo emoji desde texto con Hugging Face FLUX.1-schnell, y te permite organizarlas en un canvas infinito con Fabric.js: pan/zoom, formas, dibujo libre, texto, capas, deshacer/rehacer y exportar como PNG.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Fabric.js', 'Hugging Face API'],
      highlights: [
        'Generación de imágenes estilo emoji con FLUX y mejora de prompts',
        'Canvas interactivo: pan, zoom, formas, dibujo, texto, capas',
        'Deshacer/rehacer y exportar la composición como PNG'
      ],
      link: 'https://ai-canvas-seven.vercel.app',
      featured: true,
      imageSrc: '/emoji-canvas.png'
    },
    {
      id: 'fluxcambio',
      title: 'FluxCambio',
      description: 'Conversor de USDT y REF para Venezuela con tasas BCV y Binance P2P, comparador de arbitraje y conversión CAD.',
      longDescription: 'Calculadora de conversión (REF, VES, CAD) con tasas BCV y Binance P2P en tiempo real. Incluye comparador de arbitraje (USD vs Bs), historial de conversiones, gráficos históricos de tasas, exportación CSV e interfaz glassmorphism. PWA con Next.js, Recharts y Framer Motion.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'SWR'],
      highlights: [
        'Tasas BCV y Binance P2P en tiempo real; modos REF, VES y CAD',
        'Comparador de arbitraje para elegir entre pagar en USD o bolívares',
        'Historial de conversiones, gráficos 7/30/90 días y soporte PWA'
      ],
      link: 'https://fluxcambio.vercel.app',
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'
    },
    {
      id: 'color-palette',
      title: 'Generador de Paletas de Color',
      description: 'Genera paletas de colores hermosas al instante. Bloquea los colores que te gusten y regenera el resto.',
      longDescription: 'Un generador de paletas de colores con la capacidad de bloquear colores individuales, copiar valores hex/rgb y exportar como variables CSS. Presiona espacio para generar nuevas paletas rápidamente.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Genera paletas aleatorias con el atajo de espacio',
        'Bloquea colores individuales mientras regeneras otros',
        'Exporta la paleta como variables CSS'
      ],
      link: 'https://color-palette-seven-lemon.vercel.app',
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&q=80'
    }
  ]
}

export const skills: Record<Locale, Skill[]> = {
  en: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL']
    },
    {
      category: 'Frontend',
      items: ['React', 'Vue', 'Next.js', 'Tailwind CSS', 'Sass/SCSS', 'Vite']
    },
    {
      category: 'Backend/DevOps',
      items: ['FastAPI', 'Node.js', 'Express', 'Docker', 'GitHub Actions', 'Vercel', 'Supabase']
    },
    {
      category: 'Testing/Tools',
      items: ['Playwright', 'Pytest', 'Git/GitHub', 'Figma', 'Postman']
    }
  ],
  es: [
    {
      category: 'Lenguajes',
      items: ['TypeScript', 'JavaScript', 'Python', 'SQL']
    },
    {
      category: 'Frontend',
      items: ['React', 'Vue', 'Next.js', 'Tailwind CSS', 'Sass/SCSS', 'Vite']
    },
    {
      category: 'Backend/DevOps',
      items: ['FastAPI', 'Node.js', 'Express', 'Docker', 'GitHub Actions', 'Vercel', 'Supabase']
    },
    {
      category: 'Testing/Herramientas',
      items: ['Playwright', 'Pytest', 'Git/GitHub', 'Figma', 'Postman']
    }
  ]
}
