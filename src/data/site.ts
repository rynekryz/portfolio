import {
  siKotlin,
  siJavascript,
  siTypescript,
  siPython,
  siAstro,
  siNodedotjs,
  siGit,
  siGithubactions,
  siAndroidstudio,
  siZedindustries,
  siCachyos,
  siHyprland,
  siDiscord,
  siTiktok,
  siGithub,
} from "simple-icons";

const login = "rynekryz";
const githubUrl = `https://github.com/${login}`;

export const profile = {
  name: "Ryne",
  login,
  title: "Ryne",
  description: "Developer and designer. Mostly frontend, into Material Design.",
  greeting: "Hi, I'm",
  subtitle: "I build",
  typing: ["interfaces", "Android apps", "websites", "small useful tools"],
  avatarUrl: `${githubUrl}.png`,
  location: "Earth",
  languages: "JavaScript · Kotlin",
  about: [
    "Developer and designer. Mostly frontend.",
    "Into Material Design and the details that make an interface feel right.",
    "Loves simplicity.",
    "Always building something small that solves a real annoyance.",
  ],
};

export const links = {
  github: githubUrl,
  repositories: `${githubUrl}?tab=repositories`,
};

export const stack = [
  {
    title: "Main",
    items: [
      { label: "Kotlin", icon: siKotlin },
      { label: "JavaScript", icon: siJavascript },
      { label: "TypeScript", icon: siTypescript },
      { label: "Python", icon: siPython },
      { label: "Astro", icon: siAstro },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Git", icon: siGit },
      { label: "Node.js", icon: siNodedotjs },
      { label: "GitHub Actions", icon: siGithubactions },
      { label: "Android Studio", icon: siAndroidstudio },
      { label: "Zed", icon: siZedindustries },
    ],
  },
  {
    title: "OS",
    items: [
      { label: "CachyOS", icon: siCachyos },
      { label: "Hyprland", icon: siHyprland },
    ],
  },
];

export const projects = [
  {
    name: "rynotes",
    url: "https://github.com/rynekryz/rynotes",
    description:
      "Secure, modern notes app for Android, built with Jetpack Compose and Material 3 Expressive.",
    tags: ["Kotlin", "Jetpack Compose", "Android"],
  },
  {
    name: "webgl-raytracing-test",
    url: "https://github.com/rynekryz/webgl-raytracing-test",
    description: "Some glsl stuff.",
    tags: ["JavaScript", "WebGL", "GLSL"],
  },
  {
    name: "dormguard",
    url: "https://github.com/rynekryz/dormguard",
    description:
      "Student dorm security device. This repo contains the Android app, paired with an ESP32 door monitor.",
    tags: ["Kotlin", "Material 3", "JavaScript", "ESP32", "Google Sheets"],
  },
  {
    name: "rynemaps",
    url: "https://github.com/rynekryz/rynemaps",
    description:
      "Open-source maps app for Android, powered by OpenStreetMap. No API keys. No accounts. No tracking.",
    tags: ["Kotlin", "OpenStreetMap", "Android"],
  },
];

export const widgets = {
  activity: {
    label: "GitHub activity",
    light:
      "https://raw.githubusercontent.com/rynekryz/rynekryz/main/assets/stats-light.svg",
    dark: "https://raw.githubusercontent.com/rynekryz/rynekryz/main/assets/stats-dark.svg",
  },
  streak: {
    label: "Streak",
    light:
      "https://raw.githubusercontent.com/rynekryz/rynekryz/main/assets/streak-light.svg",
    dark: "https://raw.githubusercontent.com/rynekryz/rynekryz/main/assets/streak-dark.svg",
  },
};

export const education = [
  {
    degree: "Diploma of Electronic Engineering (Computer)",
  },
];

export const socials = [
  { label: "GitHub", url: githubUrl, icon: siGithub },
  { label: "Discord", url: "https://discord.gg/YKhWXXhKmC", icon: siDiscord },
  { label: "TikTok", url: "https://tiktok.com/@rynekryz", icon: siTiktok },
];
