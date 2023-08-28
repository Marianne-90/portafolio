import journalApp from "../img/proyects/journalApp.png";
import gifApp from "../img/proyects/giftApp.jpg";
import strudelHome from "../img/proyects/strudelHome.jpg";
import strudelAdmin from "../img/proyects/strudelAdmin.jpg";
import pythonFinal from "../img/proyects/pythonFinal.jpg";
import hooksApp from "../img/proyects/hooksApp.jpg";
import crudPhp from "../img/proyects/crudphp.jpg";
import pokegame from "../img/proyects/pokegame.jpg";
import ninjaGame from "../img/proyects/ninjaGame.jpg";
import solaz from "../img/proyects/solaz.jpg";

export const dataEs = {
  language:"esp",
  home: {
    name: "Marianne Garrido Minutti",
    description:
      "Soy una profesional proactiva y entusiasta con una pasión por la innovación y el trabajo en equipo. Me desenvuelvo bien en grandes desafíos y tengo una habilidad demostrada para resolver problemas de manera creativa y eficiente.",
  },
  education: {
    educationList: [
      "Licenciatura en Comunicación, Ibero Puebla (2015-2020). Promedio de 9.3.",
      "Cursos relevantes: Marketing Digital, Comercio Electrónico, Desarrollo Web, entre otros",
    ],
    certifications: [
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
      {
        title: "UDEMY",
        subtitle: "React-Redux JS",
        description:
          "Curso completado sobre React-Redux JS, dominando conceptos fundamentales, gestión de estado con Redux y construcción de aplicaciones web escalables. Competente en las UI dinámicas de React, enrutamiento y diseño de almacén de Redux, acciones y reductores. Habilidades en lógica de aplicaciones complejas, operaciones asíncronas y optimización de rendimiento.",
      },
    ],
    lenguaje: ["INGLÉS 95% TOEFL 595", "ESPAÑOL 100% NATIVO"],
  },

  skillsData: [
    {
      name: "Habilidades Específicas de Desarrollo",
      skills: [
        "Programación Orientada a Objetos (OOP) - Clases y objetos para crear código modular y mantenible.",
        "JSON (JavaScript Object Notation) - Capacidad para manejar y manipular datos en formato JSON, comúnmente utilizado para el intercambio de datos entre aplicaciones.",
        "Gestión de Bases de Datos - Familiaridad con el manejo de bases de datos, realizando operaciones CRUD.",
        "Manipulación de API - Competencia en trabajar con APIs para interactuar con servicios externos y obtener datos.",
        "APIs REST - Capacidad para diseñar e implementar APIs RESTful.",
        "Tecnologías Front-End - Proficiencia en HTML, CSS y JavaScript (Vanilla, React.js), lo que permite la creación de interfaces de usuario e interacciones.",
        "Desarrollo Back-End - Conocimiento de lenguajes de programación del lado del servidor (PHP, Python).",
        "FileZilla - Competencia en el uso de FileZilla para transferencia y gestión de archivos.",
        "Control de Versiones - Experiencia en el uso de sistemas de control de versiones como Git para gestionar cambios de código de manera colaborativa.",
        "Diseño Responsivo - Conocimiento en el diseño de sitios web y aplicaciones que se adaptan a diferentes tamaños de pantalla y dispositivos.",
        "Prácticas Básicas de Seguridad - Conciencia de las vulnerabilidades de seguridad comunes y la implementación de medidas básicas de seguridad.",
      ],
    },

    {
      name: "Habilidades Técnicas",
      skills: [
        "Plataformas de Comercio Electrónico",
        "SEO y DA",
        "Desarrollador Web JR (JS, React, Next, PHP, Python, Mysql, sql, Html, CSS)",
        "Suite de Adobe (Avanzado)",
        "Google Ads",
        "Redes Sociales (Avanzado)",
      ],
    },
    {
      name: "Habilidades Interpersonales",
      skills: [
        "Adaptabilidad",
        "Colaboración y Trabajo en Equipo",
        "Habilidades de Comunicación",
        "Resolución de Problemas",
        "Gestión del Tiempo y Organización",
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
        description: "Una aplicación PHP simple que utiliza clases y enrutamiento.",
        url: "https://github.com/Marianne-90/api-usando-clases-y-enrutamiento",
    },
],
jobs: [
    {
        year: "2021-2023",
        company: "Representaciones Albis",
        charge: "E-COMMERCE",
        description: [
            "Implementé y gestioné estrategias de ventas para múltiples mercados en línea, incluyendo Amazon, Mercado Libre, Privalia, ClaroShop, Wal-Mart, Elektra y Vivia.",
            "Realicé análisis del rendimiento de ventas y tendencias del mercado para optimizar las fichas de productos y aumentar las ventas.",
            "Registré nuevos productos en los mercados y mantuve las fichas de productos existentes.",
            "Gestioné cuentas de clientes, incluyendo facturación y servicio al cliente.",
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
    phone: "+522211576525",
    mail: "marianne.garridom@gmail.com",
    portafolio: "https://portafolio.strudelrestaurante.com/",
    role: "Full Stack Jr",
    linkedIn: {
      name: "Marianne Garrido",
      src: "https://www.linkedin.com/in/marianne-garrido-a83a6a19b/",
    },
  },
};
