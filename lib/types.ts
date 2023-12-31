import { links } from "./data";

export type SectionName = typeof links[number]["name"];

export interface SkillsData {
  [key: string]: string[];
}