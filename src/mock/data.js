/* jshint esversion: 9 */

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Omer Qureshi', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'A little about me', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omer',
  subtitle: "A Fresh Texas Tech Computer Science Graduate looking for remote work.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I graduated in December from Texas Tech University with a 3.88 GPA. During my time in at university I participated in TTNRO, did Mechanical Engineering Research on solar energy, Computer Science research on Machine Learning Topics, and even gave the graduation speech for the online ceremony for the entire engineering college.",
  paragraphTwo: "I started out as a Mechanical Engineering Major at Texas Tech University but after taking my first programming course I fell in love with it, despite how much I sucked at it at the time.",
  paragraphThree: "Eventually I made the decision to switch majors and have never looked back. I worked hard to catch up in classes, took programming courses outside of the classroom, and started working on projects. ",
  resume: 'https://resume.io/r/z4O7fwPYZ', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'whos-walking-the-dog.png',
    title: 'who-is-walking-the-dog',
    info: 'A project with the ability to allow family members to schedule themselves to walk the dog. It is meant so that my dog is not forgotten about and is exercised and taken out.',
    info2: 'A comprehensive and challenging full stack mobile app built with Expo, React-Native, Typescript and Firestore.',
    url: '',
    repo: 'https://github.com/Omer571/who-is-walking-the-dog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NotifyUs.png',
    title: 'NotifyUs',
    info: 'A web application meant to give family-owned companies a way to send out notifications to clients via text or email.',
    info2: 'This project is a full stack web app built using the MERN stack (MongoDB/Mongoose, Express, React, Node)',
    url: '',
    repo: 'https://github.com/Omer571/NotifyUS-2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'review_validator.png',
    title: 'Review-Validator',
    info: 'A machine learning classification model which predicts reviews as real or fake.',
    info2: 'This project was done under the supervision of a PHD Professor who specializes in Software Engineering research. My results scored higher than any results from any other undergraduate he had mentored and was used to propell graduate level research.',
    url: '',
    repo: 'https://github.com/Omer571/Review-Validator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'TextMail.jpg',
    title: 'TextMail',
    info: 'A system to notify you via text of important emails.',
    info2: 'Made with the Python, Twilio API, imaplib library and email library, this project allows users to specify emails of high importance and receive immediate texts upon receiving said emails.',
    url: '',
    repo: 'https://github.com/vijayantajain/TexMail/tree/somebranchname',
  },
];

// TECHNOLOGIES
export const technologyData = [
  "Express/Node.js",
  "Firebase/FireStore",
  "Mongoose/MongoDB",
  "React",
  "React-Native",
  "React-Native-Paper",
  "Material-UI",
  "Bootstrap",
  "Machine Learning/Data Processing Libraries such as Pandas, Scikit-learn, Numpy, etc.",
  "Expo (a framework and a platform for universal React/React Native applications)",
];

// LANGUAGES
export const languageData = [
  "Javascript",
  "Typescript",
  "Python",
  "Java",
  "Swift",
  "C++",
  "C",
  "HTML",
  "CSS",
  "SQL",
];


// PERSONAL DATA
export const personalData = {
    img: 'training.jpg',
    hobbies: [
      {
        name: "Martial Arts",
        description: "Through late highschool and college I had another goal aside from getting my education. I wanted to be strong. In a 5-year period I trained in Chinese Kickboxing, Boxing, MMA and BJJ. The discipline, patience, and humbleness I learned from these sports have heavily influenced me as a person and have crossed over into all aspects of my life.",
      },
      {
        name: "Lifting",
        description: "As I was always the skinny guy, the idea of picking up heavy weights has always been something that was cool to me. Even while doing 16-Hour kickboxing training weeks, I always managed to get some time in to hit some weights. Now having finished college, I have set aside weekly time for strength training and I have never felt physically better. Working out is my coffee to start off a productive day.",
      },
      {
        name: "Reading",
        description: '"Once you learn to read, you will forever be free." - Fredrick Douglass.\nReading is the things that makes us grow as humans. Often we exercise our bodies but forget to exercise our minds. For me the combination of the two is the key to confidence in everything I do. Some recent reads of mine are: The Lessons Of History, The Simple Path to Wealth, Rich Dad Poor Dad and Cant Hurt Me'
      },
      {
        name: "Language Learning",
        description: "Coming from mixed heritage I have always had an appreciation for other cultures, and a language is the gateway to a culture. Coming into college I only spoke English. Coming out of college I had experience in Spanish (needed for research done in Colombia), Hindi/Urdu (language of my family), and Japanese (a language for fun)",
      },
    ]
  };

// CERTIFICATION DATA
export const certificationsData = [
  {
    name: "The Complete 2021 Web Development Bootcamp",
    description: "A full-stack web developer course with HTML, CSS, Javascript, Node, React, MongoDB and more!",
    institution: "This course is a taught by the lead instructor at the App Brewery, London's leading in-person programming bootcamp.",
    img: "certificateWeb.png",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    name: "MITx Introduction to Computer Science and Programming Using Python",
    description: "An online introductory course that teaches students the correct way to program and problem solve, taught by a top CS professor from MIT.",
    institution: "MITx is the massive open online course program at Massachusetts Institute of Technology",
    img: "certificatePython.png",
    url: "https://www.edx.org/course/introduction-to-computer-science-and-programming-7?index=product&queryID=900bf7c796cc9867a677c3ad138eee2a&position=1",
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in working with me? Awesome.',
  btn: "Let's Talk",
  email: 'oqureshi571@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omer-qureshi-781ab917b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Omer571?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
