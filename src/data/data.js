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
  language:"eng",
  home: {
    name: "Marianne Garrido Minutti",
    description:
      "I am a proactive and enthusiastic professional with a passion for innovation and teamwork. I thrive on big challenges and have a proven ability to solve problems in creative and efficient ways.",
  },
  education: {
    educationList: [
      "Bachelor's degree in Communication, Ibero Puebla (2015-2020). GPA of 9.3.",
      "Relevant coursework: Digital Marketing, E-commerce, Web Development, among others",
    ],
    certifications: [
      {
        title: "VTEX",
        subtitle: "E-commerce advanced executive program",
        description:
          " Comprehensive e-commerce education covering strategy, online store management, digital marketing, UX, logistics, data analytics, and performance measurement. Delivered through online lectures, case studies, and group discussions. Equipped with expertise in driving digital commerce success and business growth.",
      },
      {
        title: "GOOGLE",
        subtitle: "Data Analysis Professional Certificate",
        description:
          "Comprehensive knowledge and practical skills in data analysis, visualization, and interpretation. Proficient in utilizing Google Analytics, Google Sheets, and other data analysis tools to extract actionable insights, optimize business performance, and drive informed decision-making.",
      },
      {
        title: "UDEMY",
        subtitle: "React-Redux JS",
        description:
          "Completed course on React-Redux JS, mastering core concepts, state management with Redux, and building scalable web applications. Proficient in React's dynamic UIs, routing, and Redux's store design, actions, and reducers. Skilled in complex app logic, async operations, and performance optimization.",
      },
    ],
    lenguaje: ["ENGLISH 95% TOFEL 595", "SPANISH 100% NATIVE"],
  },

  skillsData: [
    {
      name: "Specific Developer Skills",
      skills: [
        "Object-Oriented Programming (OOP) - Classes and objects to create modular and maintainable code.",
        "JSON (JavaScript Object Notation) - Able to handle and manipulate data in JSON format, commonly used for data interchange between applications.",
        "Database Management - Familiarity with handling databases, performing CRUD",
        " API Handling - Competent in working with APIs to interact with external services and retrieve data.",
        "REST APIs - I'm able to design and implementate RESTful APIs",
        "Front-End Technologies - Proficiency in HTML, CSS, and JavaScript (Vanilla, React.js), enabling the creation of user interfaces and interactions.",
        "Back-End Development - Knowledge of server-side programming languages (PHP, Phyton)",
        "FileZilla - Proficient in using FileZilla for file transfer and management",
        "Version Control - Experience using version control systems like Git to manage code changes collaboratively",
        "Responsive Design - Knowledge of designing websites and applications that adapt to different screen sizes and devices.",
        "Basic Security Practices - Awareness of common security vulnerabilities and the implementation of basic security measures.",
      ],
    },
  
    {
      name: "Hard Skills",
      skills: [
        "Ecommerce Platforms",
        "SEO and DA",
        "Web Developer JR (JS, React, Next, PHP, Python, Mysql, sql, Html, CSS)",
        "Adobe Suite (Advanced)",
        "Google Ads",
        "Social Media (Advanced)",
      ],
    },
    {
      name: "SoftSkills",
      skills: [
        "Adaptability",
        "Collaboration and Teamwork",
        "Communication Skills",
        "Problem-Solving Skills",
        "Time Management and Organization",
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
      year: "2021-2023",
      company: "Representaciones Albis",
      charge: "E-COMMERCE",
      description: [
        "Implemented and managed sales strategies for multiple online marketplaces, including Amazon, Mercado Libre, Privalia, ClaroShop, Wal-Mart, Elektra, and Vivia.",
        "Conducted analysis of sales performance and marketplace trends to optimize product listings and increase sales.",
        "Registered new products on marketplaces and maintained existing product listings.",
        "Managed customer accounts, including invoicing and customer service.",
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
     "Updated the 20-minute animated video for new employees, standardized welcome and birthday formats, streamlined the process to publicize birthdays, updated collages for tours and visits, covered events, designed printed and digital dissemination and recruitment formats."
      ],
    },
  ],
  contact:{
    phone:"+522211576525",
    mail:"marianne.garridom@gmail.com",
    portafolio:"https://portafolio.strudelrestaurante.com/",
    role:"Full Stack Jr",
    linkedIn:{
        name:"Marianne Garrido",
        src:"https://www.linkedin.com/in/marianne-garrido-a83a6a19b/",
    }  
  }
};
