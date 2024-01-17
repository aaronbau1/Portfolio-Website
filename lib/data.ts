import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import docBuddyImg from "@/public/docbuddy.jpg";
import carHubImg from "@/public/carhub.png";
import wordWhipImg from "@/public/wordwhip.png";
import promptopiaImg from "@/public/promptopia.png";
import { SkillsData } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mechanical Engineer",
    location: "Various Locations",
    description:
      "I worked as a Mechanical Engineer for 5 years across 3 internships and 1 job",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2021",
  },
  {
    title: "Completed full-stack web development bootcamp",
    location: "Remote",
    description:
      "Learned full-stack development (Ruby, SQL, JS, HTML, CSS) at Launch School for a year",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Williamston, MI",
    description:
      "I'm currently doing independent freelance as a full-stack developer. My core stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm looking for full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DocBuddy",
    description:
      "A SaaS platform where users can upload PDFs and ask questions to them using an AI chatbot.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", 'KindeAuth'],
    imageUrl: docBuddyImg,
    projectUrl: 'https://github.com/aaronbau1/DocBuddy',
    dataTest: 'project0',
  },
  {
    title: "WordWhip",
    description:
      "A two-player competitive word game. Try to create a 5 letter word while stopping your opponent from doing the same.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "PostgreSQL", "Clerk"],
    imageUrl: wordWhipImg,
    projectUrl: 'https://github.com/aaronbau1/WordWhip',
    dataTest: 'project1',
  },
  {
    title: "CarHub",
    description: 'A static homepage that allows users to search through a vehicle API database to learn information about specific cars.',
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: carHubImg,
    projectUrl: 'https://github.com/aaronbau1',
    dataTest: 'project2',
  },
  {
    title: "Promptopia",
    description:
      "A social web application used to create and share AI prompts.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Next-Auth"],
    imageUrl: promptopiaImg,
    projectUrl: 'https://github.com.aaronbau1',
    dataTest: 'project3',
  },
] as const;

export const skillsData:SkillsData = {
  langFrame: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Ruby",
    "Sinatra",

  ],
  tech: [
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Jira",
    "Cypress",
    
  ],
  concepts: [
    "Data Structures and Algorithms",
    "OOP",
    "E2E Testing",
    "Unit Testing",
    "REST APIs",
    "Frontend",
    "Backend",
    "Full Stack",
    "Agile"
  ]
} as const;
