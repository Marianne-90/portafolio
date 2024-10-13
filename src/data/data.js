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

export const data = {
  language: "eng",
  home: {
    name: "Marianne Garrido Minutti",
    description:
      "I am a proactive and enthusiastic professional with a passion for innovation and teamwork. I thrive on big challenges and have a proven ability to solve problems in creative and efficient ways.",
  },
  education: {
    educationList: [
      "Bachelor's degree in Communication, Ibero Puebla (2015-2020). GPA of 9.3.",
      "LeanIX Certified Practitioner (all the academy)",
      "Relevant coursework: Digital Marketing, E-commerce, Web Development, among others",
    ],
    certifications: [
      {
        title: "SAP",
        subtitle: "Customer Engagement Skills - SAP Customer Success",
        description:
          "Develop key skills to optimize customer experience, increase satisfaction, and ensure success in implementing SAP solutions.",
      },
      {
        title: "VTEX",
        subtitle: "E-commerce advanced executive program",
        description:
          "Comprehensive e-commerce education covering strategy, online store management, digital marketing, UX, logistics, data analytics, and performance measurement. Delivered through online lectures, case studies, and group discussions. Equipped with expertise in driving digital commerce success and business growth.",
      },
      {
        title: "GOOGLE",
        subtitle: "Data Analysis Professional Certificate",
        description:
          "Comprehensive knowledge and practical skills in data analysis, visualization, and interpretation. Proficient in utilizing Google Analytics, Google Sheets, and other data analysis tools to extract actionable insights, optimize business performance, and drive informed decision-making.",
      },
    ],
    lenguaje: ["ENGLISH 95% TOFEL 595", "SPANISH 100% NATIVE"],
  },

  skillsData: [
    {
      name: "Customer Success Skills",
      skills: [
        "LeanIX Platform Expertise - Deep understanding of LeanIX Data Model, metamodel, and its various integrations.",
        "Customer Onboarding - Proficiency in developing comprehensive Jumpstart and Onboarding plans for platform implementation.",
        "Technical Guidance - Providing expert advice on API handling,integrations, visualizations, and effective platform usage.",
        "Success Planning - Collaborating with clients to create tailored 6-12 month success plans focused on adoption and value realization.",
        "Enterprise Architecture Modeling - Skilled in creating and refining reports and diagrams for actionable enterprise insights.",
        "Training & Enablement - Conducting in-depth training sessions on the LeanIX platform, ensuring client proficiency.",
        "Business Capability Mapping - Expertise in mapping business processes, applications, and technology components.",
        "Integration Management - Configuring integrations and Single Sign-On (SSO) for improved workflows and security.",
        "Transformation Planning - Assisting clients in strategizing and mapping out business transformations aligned with goals.",
        "Project Implementation - Experience in executing projects using different methodologies such as Agile, Scrum, and Waterfall.",
        "Customer Engagement - Focused on empowering clients through technical support, ensuring their long-term success with the platform.",
      ],
    },
    {
      name: "Specific Developer Skills",
      skills: [
        "Object-Oriented Programming (OOP) - Classes and objects to create modular and maintainable code.",
        "JSON (JavaScript Object Notation) - Able to handle and manipulate data in JSON format, commonly used for data interchange between applications.",
        "Database Management - Familiarity with handling databases, performing CRUD",
        "API Handling - Competent in working with APIs to interact with external services and retrieve data.",
        "Front-End Technologies - Proficiency in HTML, CSS, and JavaScript (Vanilla, React.js), enabling the creation of user interfaces and interactions.",
        "Back-End Development - Knowledge of server-side programming languages (PHP, Phyton)",
        "Version Control - Experience using version control systems like Git to manage code changes collaboratively",
        "Responsive Design - Knowledge of designing websites and applications that adapt to different screen sizes and devices.",
        "Basic Security Practices - Awareness of common security vulnerabilities and the implementation of basic security measures.",
      ],
    },
  ],

  proyects: [
    {
      title: "Blog Admin Panel",
      image: solaz,
      description:
        "Built with React.js, this bilingual admin panel empowers users to create, manipulate, and organize blogs in English and Spanish. Connected to a PHP and MySQL CRUD API, it also facilitates .xlsx file downloads.",
      url: "https://github.com/Marianne-90/admin",
    },
    {
      title: "Ninja Game",
      image: ninjaGame,
      description:
        "This JavaScript vanilla fighting game features two skillful ninjas engaged in epic combat until a decisive victor emerges. The game is a testament to my proficiency in managing classes, functions, constructors, and class inheritance",
      url: "https://figth-game.netlify.app/",
    },
    {
      title: "Poke Game",
      image: pokegame,
      description:
        "Pokemon-inspired game, crafted with vanilla JavaScript, showcases a deep dive into object-oriented programming (OOP) principles, class hierarchies, constructors, and functions. By leveraging the power of the HTML canvas",
      url: "https://pokegamemarianne.netlify.app/",
    },
    {
      title: "Strudel Web",
      image: strudelHome,
      description:
        "This React.js restaurant website utilizes router, navigation, and API connections with a PHP backend. It showcases front-end development skills like a dynamic and descriptive HTML implementation and friendly browsing experience.",
      url: "https://strudelrestaurante.com/",
    },
    {
      title: "Strudel Admin",
      image: strudelAdmin,
      description:
        "The Strudel restaurant's admin panel, built with React.js, enables updating, adding, deleting, and reordering elements in the MySQL database through a PHP backend. It also provides image manipulation capabilities and allows file uploads in .tsv format.",
      url: "https://admin.strudelrestaurante.com/main",
    },
    {
      title: "Journal App",
      image: journalApp,
      description:
        "A feature-rich React.js Notes app with Firebase integration. Includes authentication, session management, private routes, and user management. Leverages Firebase's real-time database for awesome note creation, editing, and organization.",
      url: "https://github.com/Marianne-90/JournalApp",
    },
    {
      title: "Gift App",
      image: gifApp,
      description:
        "This React-based application, integrated with Firebase, facilitates a random Secret Santa assignment for Christmas gift exchanges. Effortlessly organize the holiday tradition, ensuring excitement and anonymity.",
      url: "https://navidad.strudelrestaurante.com/",
    },

    {
      title: "100 days of Python final challenge",
      image: pythonFinal,
      description:
        "The final 100 day Python challenge, this application will scrape in to an alarm clock page and if there are lower prices will send an email with the price difference, url of the article and an image of the alarm clock",
      url: "https://replit.com/@MarianneGarrido/Day-100-100-Days-challenge?v=1",
    },
    {
      title: "Hooks App",
      image: hooksApp,
      description:
        "A compilation of the different hooks offered by React.js and how they work with examples and exercises",
      url: "https://github.com/Marianne-90/Hooks-App",
    },
    {
      title: "CRUD using classes and routing",
      image: crudPhp,
      description: "A simple PHP application using classes and routing",
      url: "https://github.com/Marianne-90/api-usando-clases-y-enrutamiento",
    },
  ],
  jobs: [
    {
      year: "2023-today",
      company: "TEC360 CLOUD",
      charge: "Consultant and Customer Success",
      description: [
        "**Specializing as** an External Customer Success Manager at LeanIX, I am focusing on guiding clients through the successful implementation and continuous optimization of our platform. I am dedicated to developing and executing comprehensive Jumpstart and Onboarding plans, ensuring clients are equipped with the knowledge and tools to fully leverage the LeanIX Data Model.",
        "Empowering Clients: Providing technical guidance to help clients maximize the value of the LeanIX platform, including diving deep into the data model, metamodel, and various integrations, as well as advising on the effective use of APIs and visualizations.",
        "Planning for Success: Collaborating with clients to define tailored 6-12 month success plans, focusing on key objectives and milestones to ensure long-term value and platform adoption.",
        "Modeling & Reporting: Working closely with clients to model and refine reports and diagrams, enabling clear and actionable insights into their enterprise architecture.",
        "Training Comprehensively: Leading in-depth training sessions on reports, diagrams, and the broader metamodel, ensuring clients have a thorough understanding of how to utilize the platform effectively.",
        "Discovering & Mapping Strategically: Assisting in the discovery, mapping, and rationalization of business capabilities, processes, applications, and technological components, ensuring a holistic view of their architecture.",
        "Managing Integrations: Overseeing the configuration of integrations and Single Sign-On (SSO), streamlining client workflows and enhancing security.",
        "Supporting Transformation Planning: Assisting clients in planning and mapping out strategic initiatives and transformations, ensuring alignment with their business goals and efficient execution.",
      ],
    },
    {
      year: "2021-2023",
      company: "Representaciones Albis",
      charge: "E-COMMERCE",
      description: [
        "Spearheaded the successful implementation and growth of e-commerce operations across multiple marketplaces, including Amazon, Mercado Libre, ClaroShop, Wal-Mart, Elektra, Vivia, and others.",
        "Managed over 800 products across 5 official FBA and Fulfilled Amazon stores, driving increased sales and brand visibility.",
        "Developed and executed comprehensive sales strategies tailored to each marketplace, optimizing product listings, pricing, and promotions to maximize revenue.",
        "Ensured seamless product registration and account maintenance across all platforms, adhering to strict marketplace guidelines and maintaining high seller ratings.",
        "Handled invoicing and customer service with professionalism and efficiency, resolving customer inquiries promptly and maintaining a positive brand reputation.",
      ],
    },

    {
      year: "2020-2021",
      company: "Interceramic",
      charge: "E-COMMERCE AND MARKETING DIGITAL",
      description: [
        "Managed digital advertising campaigns, including social media marketing, email marketing, SMS campaigns, Google Ads, and YouTube Ads.",
        "Successfully opened an online store on Mercado Libre with daily sales and a perfect rating in a short amount of time.",
        "Provided customer service to customers who contacted the company through WhatsApp from any of the 15 stores.",
        "Maintained high ratings on Google Maps by consistently motivating all 15 stores agents.",
        "Conducted daily calls to random customers to evaluate the quality of service provided by all 15 stores.",
        "Managed and updated a customer database with over 20,000 entries.",
      ],
    },

    {
      year: "2017-2020",
      company: "FreeLancer",
      charge: "MARKETING AND PUBLICITY",
      description: [
        "As a freelancer, I specialized in marketing and publicity, with a focus on planning, content design, and creation of advertising campaigns. I managed social media accounts and designed business images, logos, and print advertising in small, medium, and large formats.",
        "During this time, I worked with more than 9 companies, including Colegio Le Bret. At the school, I not only contributed to their website by programming segments and modifying details such as links and content, but also played a key role in the successful launch of their enrollment campaign. Thanks to our efforts, we exceeded the predicted enrollment target by an impressive 150%.",
      ],
    },
    {
      year: "2019-2020",
      company: "Faurecia Planta Premium",
      charge: "PROFESSIONAL INTERNSHIPS - DIGITAL COMMUNICATION",
      description: [
        "Updated the 20-minute animated video for new employees, standardized welcome and birthday formats, streamlined the process to publicize birthdays, updated collages for tours and visits, covered events, designed printed and digital dissemination and recruitment formats.",
      ],
    },
  ],
  contact: {
    phone: "+38678667978",
    mail: "marianne.garridom@gmail.com",
    portafolio: "https://portafolio-marianne.netlify.app/",
    role: "Enterprise Architect / Customer Success / LeanIX",
    linkedIn: {
      name: "Marianne Garrido",
      src: "https://www.linkedin.com/in/marianne-garrido-a83a6a19b/",
    },
  },
};
