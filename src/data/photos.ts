export const DEFAULT_PHOTO_WIDTH = 320;

export type Photo = {
  num: string;
  title: string;
  loc: string;
  bg: string;
  emoji: string;
  accent: string;
  img: string;
  /** Card width in px — omit to use DEFAULT_PHOTO_WIDTH (320) */
  width?: number;
  type?: "video" | "image";
};

export const PHOTOS: Photo[] = [
  {
    num: "01",
    title: "Golden Hour",
    loc: "Paris, France",
    bg: "#2a1a08",
    emoji: "🌅",
    accent: "#c8965a",
    img: "NY2.jpg",
    width: 800,
  },
  {
    num: "05",
    title: "Nightscape",
    loc: "Tokyo, Japan",
    bg: "#08081a",
    emoji: "🌃",
    accent: "#9b5ac8",
    img: "Croatia.mp4",
    type: "video",
    width: 240,
  },
  {
    num: "05",
    title: "Nightscape",
    loc: "Tokyo, Japan",
    bg: "#08081a",
    emoji: "🌃",
    accent: "#9b5ac8",
    img: "Croatia2.mp4",
    type: "video",
    width: 240,
  },
  {
    num: "04",
    title: "Architecture",
    loc: "Barcelone",
    bg: "#0a1a0a",
    emoji: "🏛",
    accent: "#5a9e5a",
    img: "Felicita.jpg",
    width: 800,
  },
  {
    num: "02",
    title: "Street Life",
    loc: "New York, USA",
    bg: "#0a0a1a",
    emoji: "🌆",
    accent: "#5a7ac8",
    img: "TheWeekend.jpg",
    width: 600,
  },
  {
    num: "05",
    title: "Nightscape",
    loc: "Tokyo, Japan",
    bg: "#08081a",
    emoji: "🌃",
    accent: "#9b5ac8",
    img: "NY.mp4",
    type: "video",
    width: 800,
  },
  {
    num: "03",
    title: "Portrait",
    loc: "Studio Paris",
    bg: "#1a0a0a",
    emoji: "👤",
    accent: "#e05a2b",
    img: "Venise.jpg",
  },
  {
    num: "07",
    title: "Motion",
    loc: "Lagos, NG",
    bg: "#1a0808",
    emoji: "⚡",
    accent: "#e0a02b",
    img: "NY.jpg",
    width: 800,
  },
  {
    num: "08",
    title: "Abstract",
    loc: "Partout",
    bg: "#121212",
    emoji: "✦",
    accent: "#c8965a",
    img: "Disney.jpg",
    width: 900,
  },
];
