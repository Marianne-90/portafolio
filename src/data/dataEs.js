import journalApp from "../img/proyects/journalapp.png";
import gifApp from "../img/proyects/giftapp.jpg";
import strudelHome from "../img/proyects/strudelHome.jpg";
import strudelAdmin from "../img/proyects/strudelAdmin.jpg";
import pythonFinal from "../img/proyects/pythonFinal.jpg";
import hooksApp from "../img/proyects/hooksApp.jpg";
import crudPhp from "../img/proyects/crudphp.jpg";
import pokegame from "../img/proyects/pokegame.jpg";
import ninjaGame from "../img/proyects/ninjaGame.jpg";
import solaz from "../img/proyects/solaz.jpg";

export const dataEs = {
  language: "esp",
  home: {
    name: "Marianne Garrido Minutti",
    description:
      "Soy una profesional proactiva y entusiasta con una pasión por la innovación y el trabajo en equipo. Me desenvuelvo bien en grandes desafíos y tengo una habilidad demostrada para resolver problemas de manera creativa y eficiente.",
  },
  education: {
    educationList: [
      "Licenciatura en Comunicación, Ibero Puebla (2015-2020). Promedio de 9.3.",
      "LeanIX Certified Practitioner (toda la academia)",
      "Cursos relevantes: Marketing Digital, Comercio Electrónico, Desarrollo Web, entre otros",
    ],
    certifications: [
      {
        title: "SAP",
        subtitle: "Customer Engagement Skills - SAP Customer Success",
        description:
          "Desarrollar habilidades clave para optimizar la experiencia del cliente, aumentar la satisfacción y asegurar el éxito en la implementación de soluciones SAP",
      },
      {
        title: "VTEX",
        subtitle: "Programa ejecutivo avanzado en comercio electrónico",
        description:
          "Educación integral en comercio electrónico que abarca estrategia, gestión de tiendas en línea, marketing digital, experiencia de usuario, logística, análisis de datos y medición de rendimiento. Impartido a través de clases en línea, estudios de caso y discusiones en grupo. Equipado con experiencia en impulsar el éxito del comercio digital y el crecimiento empresarial.",
      },
      {
        title: "GOOGLE",
        subtitle: "Certificado Profesional en Análisis de Datos",
        description:
          "Conocimientos completos y habilidades prácticas en análisis, visualización e interpretación de datos. Competente en el uso de Google Analytics, Google Sheets y otras herramientas de análisis de datos para extraer ideas accionables, optimizar el rendimiento empresarial y tomar decisiones informadas.",
      },
    ],
    lenguaje: ["INGLÉS 95% TOEFL 595", "ESPAÑOL 100% NATIVO"],
  },

  skillsData: [
    {
      name: "Consultor | Éxito del Cliente",
      skills: [
        "Experiencia en la Plataforma LeanIX - Profundo conocimiento del Modelo de Datos, metamodelo e integraciones de LeanIX.",
        "Onboarding de Clientes - Competencia en desarrollar planes integrales de Jumpstart y Onboarding para la implementación de la plataforma.",
        "Asesoría Técnica - Proveer asesoría experta sobre el manejo de APIs, integraciones, visualizaciones y uso efectivo de la plataforma.",
        "Planificación para el Éxito - Colaboración con clientes para definir planes de éxito personalizados de 6-12 meses, centrados en la adopción y la generación de valor.",
        "Modelado de Arquitectura Empresarial - Habilidad para crear y refinar informes y diagramas que ofrezcan insights accionables sobre la arquitectura empresarial.",
        "Capacitación y Habilitación - Liderar sesiones de capacitación exhaustivas sobre la plataforma LeanIX, garantizando la competencia del cliente.",
        "Mapeo de Capacidades Empresariales - Experiencia en mapear procesos de negocio, aplicaciones y componentes tecnológicos.",
        "Gestión de Integraciones - Configuración de integraciones y Single Sign-On (SSO) para mejorar los flujos de trabajo y la seguridad.",
        "Planificación de Transformaciones - Asistir a los clientes en la planificación y mapeo de transformaciones estratégicas alineadas con sus objetivos.",
        "Implementación de Proyectos - Experiencia en la ejecución de proyectos utilizando diferentes metodologías como Agile, Scrum y Waterfall.",
        "Compromiso con el Cliente - Enfoque en empoderar a los clientes a través de soporte técnico, asegurando su éxito a largo plazo con la plataforma.",
      ],
    },
    {
      name: "Desarrollo Web",
      skills: [
        "Programación Orientada a Objetos (OOP) - Clases y objetos para crear código modular y mantenible.",
        "Gestión de Bases de Datos - Familiaridad con el manejo de bases de datos, realizando operaciones CRUD.",
        "Manipulación de API - Competencia en trabajar con APIs para interactuar con servicios externos y obtener datos.",
        "Tecnologías Front-End - Proficiencia en HTML, CSS y JavaScript (Vanilla, React.js), lo que permite la creación de interfaces de usuario e interacciones.",
        "Desarrollo Back-End - Conocimiento de lenguajes de programación del lado del servidor (PHP, Python).",
        "FileZilla - Competencia en el uso de FileZilla para transferencia y gestión de archivos.",
        "Control de Versiones - Experiencia en el uso de sistemas de control de versiones como Git para gestionar cambios de código de manera colaborativa.",
        "Diseño Responsivo - Conocimiento en el diseño de sitios web y aplicaciones que se adaptan a diferentes tamaños de pantalla y dispositivos.",
        "Prácticas Básicas de Seguridad - Conciencia de las vulnerabilidades de seguridad comunes y la implementación de medidas básicas de seguridad.",
      ],
    },
  ],

  proyects: [
    {
      title: "Panel de Administración de Blog",
      image: solaz,
      description:
        "Construido con React.js, este panel de administración bilingüe permite a los usuarios crear, manipular y organizar blogs en inglés y español. Conectado a una API CRUD en PHP y MySQL, también facilita la descarga de archivos .xlsx.",
      url: "https://github.com/Marianne-90/admin",
    },
    {
      title: "Juego de Ninjas",
      image: ninjaGame,
      description:
        "Este juego de lucha de JavaScript vanilla presenta a dos ninjas hábiles en un combate épico hasta que un vencedor decisivo emerge. El juego es un testimonio de mi destreza para manejar clases, funciones, constructores e herencia de clases.",
      url: "https://figth-game.netlify.app/",
    },
    {
      title: "Juego de Pokemon",
      image: pokegame,
      description:
        "Juego inspirado en Pokémon, creado con JavaScript vanilla, muestra una inmersión profunda en los principios de la programación orientada a objetos (OOP), jerarquías de clases, constructores y funciones. Aprovechando el poder del lienzo HTML.",
      url: "https://pokegamemarianne.netlify.app/",
    },
    {
      title: "Sitio Web Strudel",
      image: strudelHome,
      description:
        "Este sitio web de restaurante con React.js utiliza enrutadores, navegación y conexiones API con un backend en PHP. Muestra habilidades de desarrollo front-end como una implementación de HTML dinámica y descriptiva y una experiencia de navegación amigable.",
      url: "https://strudelrestaurante.com/",
    },
    {
      title: "Panel de Administración Strudel",
      image: strudelAdmin,
      description:
        "El panel de administración del restaurante Strudel, construido con React.js, permite actualizar, agregar, eliminar y reorganizar elementos en la base de datos MySQL a través de un backend en PHP. También proporciona capacidades de manipulación de imágenes y permite cargar archivos en formato .tsv.",
      url: "https://admin.strudelrestaurante.com/main",
    },
    {
      title: "Aplicación de Diario",
      image: journalApp,
      description:
        "Una completa aplicación de notas con React.js con integración de Firebase. Incluye autenticación, gestión de sesiones, rutas privadas y gestión de usuarios. Aprovecha la base de datos en tiempo real de Firebase para una increíble creación, edición y organización de notas.",
      url: "https://github.com/Marianne-90/JournalApp",
    },
    {
      title: "Aplicación de Regalos",
      image: gifApp,
      description:
        "Esta aplicación basada en React, integrada con Firebase, facilita la asignación aleatoria de un Amigo Invisible para intercambios de regalos navideños. Organiza sin esfuerzo la tradición navideña, garantizando emoción y anonimato.",
      url: "https://navidad.strudelrestaurante.com/",
    },
    {
      title: "Desafío Final de 100 Días de Python",
      image: pythonFinal,
      description:
        "El desafío final de 100 días de Python, esta aplicación realizará raspados en una página de despertador y, si hay precios más bajos, enviará un correo electrónico con la diferencia de precio, la URL del artículo y una imagen del despertador.",
      url: "https://replit.com/@MarianneGarrido/Day-100-100-Days-challenge?v=1",
    },
    {
      title: "Aplicación de Hooks",
      image: hooksApp,
      description:
        "Una compilación de los diferentes hooks ofrecidos por React.js y cómo funcionan con ejemplos y ejercicios.",
      url: "https://github.com/Marianne-90/Hooks-App",
    },
    {
      title: "CRUD usando Clases y Enrutamiento",
      image: crudPhp,
      description:
        "Una aplicación PHP simple que utiliza clases y enrutamiento.",
      url: "https://github.com/Marianne-90/api-usando-clases-y-enrutamiento",
    },
  ],
  jobs: [
    {
      year: "2023-hoy",
      company: "TEC360 CLOUD",
      charge: "Consultor y Customer Success",
      description: [
        "Especializándome como External Customer Success Manager en LeanIX, me enfoco en guiar a los clientes a través de la implementación exitosa y la optimización continua de nuestra plataforma. Estoy dedicado a desarrollar y ejecutar planes integrales de Jumpstart y Onboarding, asegurando que los clientes cuenten con el conocimiento y las herramientas para aprovechar al máximo el Modelo de Datos de LeanIX.",
        "Empoderando a los Clientes: Proporcionar orientación técnica para ayudar a los clientes a maximizar el valor de la plataforma LeanIX, profundizando en el modelo de datos, metamodelo y diversas integraciones, así como asesorar sobre el uso efectivo de APIs y visualizaciones.",
        "Planificación para el Éxito: Colaborar con los clientes para definir planes de éxito personalizados de 6 a 12 meses, centrándose en objetivos clave y hitos para asegurar el valor a largo plazo y la adopción de la plataforma.",
        "Modelado e Informes: Trabajar estrechamente con los clientes para modelar y refinar informes y diagramas, permitiendo obtener insights claros y accionables sobre su arquitectura empresarial.",
        "Capacitación Integral: Liderar sesiones de capacitación exhaustivas sobre informes, diagramas y el metamodelo en general, asegurando que los clientes tengan una comprensión completa de cómo utilizar la plataforma de manera efectiva.",
        "Descubrimiento y Mapeo Estratégico: Asistir en el descubrimiento, mapeo y racionalización de capacidades empresariales, procesos, aplicaciones y componentes tecnológicos, asegurando una visión holística de su arquitectura.",
        "Gestión de Integraciones: Supervisar la configuración de integraciones y Single Sign-On (SSO), optimizando los flujos de trabajo de los clientes y mejorando la seguridad.",
        "Apoyo a la Planificación de Transformaciones: Asistir a los clientes en la planificación y mapeo de iniciativas estratégicas y transformaciones, asegurando la alineación con sus objetivos empresariales y una ejecución eficiente.",
      ],
    },
    {
      year: "2021-2023",
      company: "Representaciones Albis",
      charge: "E-COMMERCE",
      description: [
        "Lideré la implementación y el crecimiento exitoso de las operaciones de comercio electrónico en varios marketplaces, incluidos Amazon, Mercado Libre, ClaroShop, Wal-Mart, Elektra, Vivia y otros.",
        "Gestioné más de 800 productos en 5 tiendas oficiales FBA y Fulfilled de Amazon, impulsando el aumento de ventas y la visibilidad de la marca.",
        "Desarrollé y ejecuté estrategias de ventas integrales adaptadas a cada marketplace, optimizando la lista de productos, precios y promociones para maximizar los ingresos.",
        "Aseguré un registro de productos y mantenimiento de cuentas sin problemas en todas las plataformas, cumpliendo con las estrictas directrices de los marketplaces y manteniendo altas calificaciones de vendedor.",
        "Manejé la facturación y el servicio al cliente con profesionalismo y eficiencia, resolviendo rápidamente las consultas de los clientes y manteniendo una reputación positiva de la marca.",
      ],
    },
    {
      year: "2020-2021",
      company: "Interceramic",
      charge: "E-COMMERCE Y MARKETING DIGITAL",
      description: [
        "Gestioné campañas de publicidad digital, incluyendo marketing en redes sociales, marketing por correo electrónico, campañas de SMS, Google Ads y YouTube Ads.",
        "Abrí exitosamente una tienda en línea en Mercado Libre con ventas diarias y una calificación perfecta en poco tiempo.",
        "Brindé servicio al cliente a quienes contactaron a la empresa a través de WhatsApp desde cualquiera de las 15 tiendas.",
        "Mantuve altas calificaciones en Google Maps al motivar constantemente a los agentes de las 15 tiendas.",
        "Realicé llamadas diarias a clientes al azar para evaluar la calidad del servicio proporcionado por las 15 tiendas.",
        "Gestioné y actualicé una base de datos de clientes con más de 20,000 registros.",
      ],
    },

    {
      year: "2017-2020",
      company: "FreeLancer",
      charge: "MARKETING Y PUBLICIDAD",
      description: [
        "Como freelancer, me especialicé en marketing y publicidad, con un enfoque en la planificación, diseño de contenido y creación de campañas publicitarias. Gestioné cuentas de redes sociales y diseñé imágenes empresariales, logotipos y publicidad impresa en formatos pequeños, medianos y grandes.",
        "Durante este tiempo, trabajé con más de 9 empresas, incluyendo Colegio Le Bret. En la escuela, no solo contribuí a su sitio web programando segmentos y modificando detalles como enlaces y contenido, sino que también desempeñé un papel clave en el exitoso lanzamiento de su campaña de inscripción. Gracias a nuestros esfuerzos, superamos la meta de inscripciones prevista en un impresionante 150%.",
      ],
    },
    {
      year: "2019-2020",
      company: "Faurecia Planta Premium",
      charge: "PASANTÍAS PROFESIONALES - COMUNICACIÓN DIGITAL",
      description: [
        "Actualicé el video animado de 20 minutos para nuevos empleados, estandaricé los formatos de bienvenida y cumpleaños, simplifiqué el proceso de difusión de cumpleaños, actualicé collages para recorridos y visitas, cubrí eventos, diseñé formatos de difusión impresos y digitales y formatos de reclutamiento.",
      ],
    },
  ],
  contact: {
    phone: "+38678667978",
    mail: "marianne.garridom@gmail.com",
    portafolio: "https://portafolio-marianne.netlify.app/",
    role: "Arquitectura Empresarial / Customer Success / LeanIX",
    linkedIn: {
      name: "Marianne Garrido",
      src: "https://www.linkedin.com/in/marianne-garrido-a83a6a19b/",
    },
  },
};
