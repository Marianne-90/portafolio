import { WorkMap } from "./WorkMap";


const Jobs = [
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
   " Updated the 20-minute animated video for new employees, standardized welcome and birthday formats, streamlined the process to publicize birthdays, updated collages for tours and visits, covered events, designed printed and digital dissemination and recruitment formats."
    ],
  },
];

export const Work = () => {
  return (
    <section id="work">
      <div className="grand-title">
        <h4 data-ix="slowfade-scroll-bigs">WORK EXPERIENCE!</h4>
      </div>
      <div className="josbContainer">
        <div className="box"></div>
        {Jobs.map((job) => (
          <WorkMap {...job} key={job.company}/>
        ))}
      </div>
    </section>
  );
};
