import {
  siKotlin,
  siJetpackcompose,
  siJavascript,
  siTypescript,
  siRust,
  siAstro,
  siCplusplus,
  siNodedotjs,
  siGradle,
  siFastlane,
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
  languages: "Kotlin · Astro · Rust",
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
      { label: "Jetpack Compose", icon: siJetpackcompose },
      { label: "JavaScript", icon: siJavascript },
      { label: "TypeScript", icon: siTypescript },
      { label: "Astro", icon: siAstro },
      { label: "Rust", icon: siRust },
      { label: "C++", icon: siCplusplus },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Git", icon: siGit },
      { label: "Node.js", icon: siNodedotjs },
      { label: "Gradle", icon: siGradle },
      { label: "Fastlane", icon: siFastlane },
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
    name: "sniffsniff",
    url: "https://github.com/rynekryz/sniffsniff",
    description:
      "Network traffic monitor for Android. See what every app is doing, on your device only.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3 Expressive", "Android"],
  },
  {
    name: "exiless",
    url: "https://github.com/rynekryz/exiless",
    description:
      "Remove metadata from photos and videos, lossless and fully offline.",
    tags: ["Kotlin", "Jetpack Compose", "Android"],
  },
  {
    name: "melissm",
    url: "https://github.com/rynekryz/melissm",
    description:
      "A Material You expressive music streaming app. It plays music, literally. What else would it do.",
    tags: ["Astro", "Rust", "TypeScript", "GStreamer", "Linux"],
  },
  {
    name: "rynotes",
    url: "https://github.com/rynekryz/rynotes",
    description:
      "Secure, modern notes app for Android, built with Jetpack Compose and Material 3 Expressive.",
    tags: ["Kotlin", "Jetpack Compose", "Android"],
  },
  {
    name: "rynemaps",
    url: "https://github.com/rynekryz/rynemaps",
    description:
      "Open-source maps app for Android, powered by OpenStreetMap. No API keys. No accounts. No tracking.",
    tags: ["Kotlin", "MapLibre", "OpenStreetMap", "Android"],
  },
  {
    name: "portfolio",
    url: "https://github.com/rynekryz/portfolio",
    description: "My personal website.",
    tags: ["Astro", "TypeScript", "CSS"],
  },
  {
    name: "webgl-raytracing-test",
    url: "https://github.com/rynekryz/webgl-raytracing-test",
    description: "Some GLSL stuff.",
    tags: ["JavaScript", "WebGL", "GLSL"],
  },
  {
    name: "dormguard",
    url: "https://github.com/rynekryz/dormguard",
    description:
      "Student dorm security device. This repo contains the Android app, paired with an ESP32 door monitor.",
    tags: ["Kotlin", "Material 3", "JavaScript", "ESP32", "Google Sheets"],
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
