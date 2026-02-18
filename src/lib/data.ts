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
      description: 'Public Adobe Premiere Pro extension (React, Vite, CEP/UXP) that lets creators generate and insert AI videos inside Premiere Pro',
      longDescription: 'A publicly shipped Adobe Premiere Pro extension enabling creators to generate and insert AI videos directly inside Premiere Pro. I designed desktop-friendly auth + media sync workflows under extension constraints, built a reusable UI architecture, and integrated backend APIs for upload, job status, and delivery.',
      technologies: ['React', 'Vite', 'TypeScript', 'CEP/UXP', 'Adobe APIs'],
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
      id: 'infinite-canvas',
      title: 'Maker.ai Infinite Canvas Editor',
      description: 'Infinite-canvas editing experience built with Vue + Fabric.js, with mobile usability improvements and Tailwind migration',
      longDescription: 'Built an infinite-canvas editor using Vue.js and Fabric.js, focusing on editing interactions, panning/zooming behavior, and mobile usability. Migrated styling to Tailwind CSS to improve consistency and velocity.',
      technologies: ['Vue', 'Fabric.js', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Infinite-canvas editing experience with complex interactions',
        'Mobile usability improvements and responsive behavior',
        'Styling migration to Tailwind CSS for consistency'
      ],
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
      id: 'product-workflows',
      title: 'Interactive Video Editor (Redesign)',
      description: 'Redesigned product UI into an interactive video editor with reusable UI patterns and complex editing interactions',
      longDescription: 'Led a redesign that turned the product into an interactive video editor. Focused on building editing interactions, reusable component patterns, and wiring UI flows to backend services while supporting fast release cycles.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      highlights: [
        'Complex editing interactions and reusable UI patterns',
        'UI/UX improvements tied to backend service flows',
        'Supported fast release cycles with reliable delivery'
      ],
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
    },
    {
      id: 'product-apis',
      title: 'Product APIs & Integrations',
      description: 'Backend APIs and integrations for video generation, data persistence, and product workflows using Python and PostgreSQL',
      longDescription: 'Built and maintained APIs and integrations for product workflows using Python (FastAPI) and PostgreSQL (SQLAlchemy). Supported generation pipelines, data persistence, and feature delivery across the platform.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
      highlights: [
        'APIs for generation, upload, and job status used by frontend and extensions',
        'Data persistence and feature delivery across product workflows',
        'Integration with internal services and third-party APIs'
      ],
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
    }
  ],
  es: [
    {
      id: 'premiere-extension',
      title: 'Extensión de Moonvalley para Adobe Premiere Pro',
      description: 'Extensión pública para Premiere Pro (React, Vite, CEP/UXP) que permite generar e insertar videos con IA dentro de Premiere Pro',
      longDescription: 'Extensión pública para Adobe Premiere Pro que permite generar e insertar videos con IA directamente dentro de Premiere. Diseñé flujos de auth y sincronización de media bajo restricciones de extensiones de escritorio, construí una arquitectura de UI reutilizable e integré APIs backend para upload, estado de jobs y entrega.',
      technologies: ['React', 'Vite', 'TypeScript', 'CEP/UXP', 'APIs de Adobe'],
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
      id: 'infinite-canvas',
      title: 'Maker.ai — Editor de Canvas Infinito',
      description: 'Experiencia de edición en canvas infinito con Vue + Fabric.js, mejoras mobile y migración a Tailwind',
      longDescription: 'Construí un editor de canvas infinito usando Vue.js y Fabric.js, enfocándome en interacciones de edición, pan/zoom y usabilidad móvil. Migré estilos a Tailwind CSS para consistencia y velocidad.',
      technologies: ['Vue', 'Fabric.js', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Experiencia de edición en canvas infinito con interacciones complejas',
        'Mejoras de usabilidad móvil y comportamiento responsivo',
        'Migración de estilos a Tailwind CSS para consistencia'
      ],
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
      id: 'product-workflows',
      title: 'Editor de Video Interactivo (Rediseño)',
      description: 'Rediseño del producto hacia un editor de video interactivo con patrones de UI reutilizables e interacciones de edición',
      longDescription: 'Lideré un rediseño que convirtió el producto en un editor de video interactivo. Enfoque en interacciones de edición, patrones de componentes reutilizables y conexión de flujos de UI con servicios backend, soportando ciclos de release rápidos.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      highlights: [
        'Interacciones de edición complejas y patrones de UI reutilizables',
        'Mejoras de UI/UX conectadas a flujos con servicios backend',
        'Soporte de ciclos de release rápidos con entrega confiable'
      ],
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
    },
    {
      id: 'product-apis',
      title: 'APIs e integraciones de producto',
      description: 'APIs backend e integraciones para generación de video, persistencia de datos y flujos de producto con Python y PostgreSQL',
      longDescription: 'Construí y mantuve APIs e integraciones para flujos de producto con Python (FastAPI) y PostgreSQL (SQLAlchemy). Soporté pipelines de generación, persistencia de datos y entrega de features en la plataforma.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
      highlights: [
        'APIs de generación, upload y estado de jobs usadas por frontend y extensiones',
        'Persistencia de datos y entrega de features en flujos de producto',
        'Integración con servicios internos y APIs de terceros'
      ],
      featured: true,
      imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
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
