// data/projects.ts

interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  techstack: string[];
  imageSrc: string;
  link: string;
  categories?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Custom Shopify Store",
    description: "Shopify Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/js.svg",
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/ts.svg",
      "/techstack/shopify.svg",
    ],
    imageSrc: "/proj/projectOne.webp",
    link: "https://by39tk-uv.myshopify.com/",
    categories: ["eCommerce"],
  },
  {
    id: 2,
    number: "02",
    title: "GDSC PLM Website",
    description: "Web Developer",
    techstack: [
      "/techstack/nextjs.svg",
      "/techstack/tailwind.svg",
      "/techstack/shadcn.svg",
    ],
    imageSrc: "/proj/projectTwo.webp",
    link: "https://www.gdsc-plm.org/",
    categories: ["Portfolio & Community"],
  },
  {
    id: 3,
    number: "03",
    title: "GrievDesk",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/css.svg",
      "/techstack/springboot.svg",
    ],
    imageSrc: "/proj/projectThree.webp",
    link: "https://plmce-grievdesk.web.app/",
    categories: ["Web Apps"],
  },
  {
    id: 4,
    number: "04",
    title: "Conso Programming Language and Compiler",
    description: "Full Stack Developer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/css.svg",
      "/techstack/python.svg",
      "/techstack/fastapi.svg",
      "/techstack/websockets.svg",
    ],
    imageSrc: "/proj/projectFour.webp",
    link: "https://conso-frontend-v2.onrender.com/",
    categories: ["Web Apps"],
  },
  {
    id: 5,
    number: "05",
    title: "AceFrame",
    description: "Web Developer",
    techstack: ["/techstack/nextjs.svg", "/techstack/tailwind.svg"],
    imageSrc: "/proj/projectFive.webp",
    link: "https://aceframe.web.app/",
    categories: ["Web Apps"],
  },
  {
    id: 6,
    number: "06",
    title: "KhanJee – Authentic Pakistani Cuisine & Catering in Montreal",
    description: "WordPress Developer",
    techstack: [
      "/techstack/js.svg",
      "/techstack/php.svg",
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/wordpress.svg",
    ],
    imageSrc: "/proj/projectSix.webp",
    link: "https://khanjeecanada.com/",
    categories: ["eCommerce", "WordPress"],
  },
];
