import { twowaits } from "../assets/images";
import {
    css,
    contact,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    redux,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full stack development Scholar Intern",
        company_name: "Twowaits Technology Private Limited",
        icon: twowaits,
        iconBg: "#accbe1",
        date: "January 2022 - Feb 2022",
        points: [
            "Dedicated 120 hours of learning based on full-stack web development (HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, and MongoDB) and other frontend technologies.",
            "Implemented the skills on a project while collaborating in a team of 5 members.",
        ],
    }
];
export const education = [
    {
        title: "Bachelor Of Technology",
        Institute_name: "Jaypee Institute Of Information Technology",
        icon: twowaits,
        iconBg: "#accbe1",
        date: "July 2020 - Present"
    },
    {
        title: "Senior Secondary School",
        Institute_name: "Brij Bhushsan Lal Public School",
        icon: twowaits,
        iconBg: "#aef359",
        date: "June 2018 - June 2020",
    },
    {
        title: "High School",
        Institute_name: "Brij Bhushsan Lal Public School",
        icon: twowaits,
        iconBg: "#e3242B",
        date: "April 2006 - May 2018",
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shadowmonarch712',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        theme: 'btn-back-red',
        name: 'KHOJ',
        description: 'Enables users to search/filter team members based on skills, requirements for hackathons and establish communication between the teams.',
        link: 'https://github.com/shadowmonarch712/Khoj',
    },
    {
        theme: 'btn-back-green',
        name: 'Clotes',
        description: 'Creates and assigns tasks inside notes with due dates, flags, and reminders so that nothing falls through the cracks ensuring 100 percent completion.',
        link: 'https://github.com/shadowmonarch712/Clotes',
    },
    {
        theme: 'btn-back-blue',
        name: 'News Heaven',
        description: 'Designed and developed a web application, NewsHeaven, that provides users with live-breaking news and headlines from reputable global news sources. It collects data from third-party APIs and presents it to the user in a user-friendly format.',
        link: 'https://github.com/shadowmonarch712/NewsHeaven',
    },
];