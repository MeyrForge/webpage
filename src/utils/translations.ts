export const translations = {
  es: {
    // Navigation
    about: 'Sobre nosotros',
    portfolio: 'Portfolio',
    contact: 'Contacto',
    
    // Hero section
    heroSubtitle: 'SOMOS',
    heroTitle: 'MEYR FORGE',
    heroDescription: 'Transformamos ideas en aplicaciones móviles innovadoras. Cada proyecto es una oportunidad para aplicar lo que hemos aprendido en la vida y seguir creciendo como desarrolladores. Creamos soluciones útiles que conectan con las personas y mejoran su día a día.',
    techStackTitle: 'Tecnologías que manejamos',
    
    // Technologies
    techDependencyInjection: 'Inyección de dependencias (Dagger Hilt)',
    techOnDeviceDb: 'Base de datos en dispositivo (Room)',
    techApiConsumption: 'Consumo de API REST (Retrofit2)',
    techImageHandling: 'Manejo de imágenes (Coil)',
    
    // About section
    aboutTitle: 'Sobre nosotros',
    aboutText1: '💻 Somos dos devs mobile que salimos de la UNLaM con el título en mano y muchas ganas de codear el mundo.',
    aboutText2: '🚀 Amamos la tecnología, los dados de 20 caras y todo lo que tenga olor a innovación.',
    aboutText3: '👾 Cuando no estamos trabajando en IT, nos juntamos a crear proyectos propios que nos diviertan y que, de paso, hagan la vida un poco más fácil.',
    aboutText4: '✨ Este portafolio es nuestro laboratorio de ideas, donde mezclamos código, creatividad y café hasta sacar cosas que nos enorgullecen.',
    
    // Projects section
    projectsTitle: 'Nuestros Proyectos',
    project1Description: 'Tu medicación, siempre a tiempo.',
    project2Description: 'Monitorea, comprende, avanza.',
    project3Description: 'Porque hasta el DM necesita su inventario.',
    
    // Contact section
    contactTitle: '¡Contáctanos!',
    contactDescription: 'Somos desarrolladores móviles con sólidos conocimientos técnicos y ganas de seguir creciendo. Si tu empresa busca talentos comprometidos que aporten frescura y entusiasmo a sus proyectos, nos encantaría formar parte de tu equipo y contribuir con nuestras habilidades.',
    
    // Footer
    footerRights: 'Todos los derechos reservados.'
  },
  en: {
    // Navigation
    about: 'About us',
    portfolio: 'Portfolio', 
    contact: 'Contact',
    
    // Hero section
    heroSubtitle: 'WE ARE',
    heroTitle: 'MEYR FORGE',
    heroDescription: 'We transform ideas into innovative mobile applications. Each project is an opportunity to apply what we have learned in life and continue growing as developers. We create useful solutions that connect with people and improve their daily lives.',
    techStackTitle: 'Technologies we work with',

    // Technologies
    techDependencyInjection: 'Dependency Injection (Dagger Hilt)',
    techOnDeviceDb: 'On-device Database (Room)',
    techApiConsumption: 'REST API Consumption (Retrofit2)',
    techImageHandling: 'Image Handling (Coil)',
    
    // About section
    aboutTitle: 'About us',
    aboutText1: '💻 We are two mobile devs who graduated from UNLaM with our degree in hand and lots of enthusiasm to code the world.',
    aboutText2: '🚀 We love technology, 20-sided dice and everything that smells like innovation.',
    aboutText3: '👾 When we\'re not working in IT, we get together to create our own projects that entertain us and, by the way, make life a little easier.',
    aboutText4: '✨ This portfolio is our ideas laboratory, where we mix code, creativity and coffee until we create things that make us proud.',
    
    // Projects section
    projectsTitle: 'Our Projects',
    project1Description: 'Your medication, always on time.',
    project2Description: 'Track, comprehend, progress.',
    project3Description: 'Because even the DM needs their inventory.',
    
    // Contact section
    contactTitle: 'Contact us!',
    contactDescription: 'We are mobile developers with solid technical knowledge and eagerness to keep growing. If your company is looking for committed talents who bring freshness and enthusiasm to their projects, we would love to be part of your team and contribute with our skills.',
    
    // Footer
    footerRights: 'All rights reserved.'
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;