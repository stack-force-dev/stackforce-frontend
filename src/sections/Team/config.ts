import alexey from "@root/assets/images/team/alexey.png";
import mihail from "@root/assets/images/team/mihail.png";
import sahib from "@root/assets/images/team/sahib.png";
import sergey from "@root/assets/images/team/sergey.png";
import timur from "@root/assets/images/team/timur.png";
import { Member } from "@root/interfaces/team";

const config: Array<Member> = [
  {
    name: "Тимур",
    code: "timur",
    post: "Full-stack разработчик",
    image: timur,
    skills: ["Опыт 5+ лет", "Микросервисы", "DevOps", "NodeJS", "TypeScript", "React", "MySQL"],
  },
  {
    name: "Михаил",
    code: "mihail",
    post: "Аналитик, UX/UI дизайнер",
    image: mihail,
    skills: ["Опыт 5+ лет", "Более 30 проектов", "Figma", "UX-аудит", "Продуктовый подход", "CJM/UJM"],
  },
  {
    name: "Алексей",
    code: "alexey",
    post: "Back-end разработчик",
    image: alexey,
    skills: ["Архитектор отказоустойчивых систем", "Python", "FastAPI", "Django"],
  },
  {
    name: "Сергей",
    code: "sergey",
    post: "Front-end разработчик",
    image: sergey,
    skills: ["Опыт 4+ лет", "React", "Redux", "TypeScript", "Нагруженные проекты"],
  },
  {
    name: "Сахиб",
    code: "sahib",
    post: "Front-end разработчик",
    image: sahib,
    skills: ["HTML/CSS", "JavaScript", "React", "RestAPI", "Адаптивная верстка"],
  },
];

export default config;
