import { ibs, instagram, youtube} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "IBS",
    icon: ibs,
    iconBg: "#accbe1",
    date: "January 2023 - November 2023",
    points: [
      "Learning Html, Css, JavaScript and React using variouse methods",
      "Improving problem-solving skills and find a proper solution to a bug or problem.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Creating and developing projects that is helpfull for others to use.",
    ],
  },
  {
    title: "Video Editor",
    company_name: "Instagram",
    icon: instagram,
    iconBg: "#fbc3bc",
    date: "July 2023 - November 2022",
    points: [
      "Learning some editing skills to build an instagram page",
      "Following trends or creating new trends to get more followers and likes",
      "Collaborating with others and helping them to grow their pages.",
      "Making great content and maintaining the quality and interest in the reels.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Kamoliddin526",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kamoliddin-kuliyev-bb451a274/",
  },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Amazing Portfolio",
    description:
      "I have created an amazing portfolio, make sure to check it out!",
    link: "https://my-amazing-portfolio.vercel.app/",
  },
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "Youtube Clone",
    description: "The clone of youtube which you can watch videos and enjoy.",
    link: "https://youtube-clone-psycho56.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Medical Site",
    description:
      "You can buy medical treatments immediately and make your healthy using this site.",
    link: "https://relaxan-tilda.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Food Site",
    description:
      "You can buy and delivery the foods you want and it is going to be delivered wherever you want.",
    link: "https://functionalportfolio2.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Customizable 3d Site",
    description:
      "In this site, you can customize a T-shirt in whatever style you want.",
    link: "https://project-with-threejs.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Wildberries Site",
    description:
      "In this site, you can buy whatever you want and deliver wherever you want.",
    link: "https://frontend-wildberries.vercel.app/",
  },
];
