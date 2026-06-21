import type { ProjectSection } from "../data/projects";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function parseBodySections(body: string): ProjectSection[] {
  const parts = body.split(/<h3[^>]*>/i).filter(Boolean);
  if (parts.length === 0) {
    return [{ id: "contenu", title: "Contenu", html: body }];
  }

  return parts.map((part, i) => {
    const titleMatch = part.match(/^([^<]+)<\/h3>/i);
    const title = titleMatch ? titleMatch[1].trim() : `Section ${i + 1}`;
    const html = titleMatch ? part.slice(titleMatch[0].length).trim() : part.trim();
    const id = slugify(title) || `section-${i + 1}`;
    return { id, title, html };
  });
}
