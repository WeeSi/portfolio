import type { Project, ProjectSection } from "../data/projects";
import { parseBodySections } from "./parseProjectSections";

const FEATURES_TITLE = /fonctionnalit/i;

export function resolveProjectSections(project: Project): ProjectSection[] {
  let sections: ProjectSection[];

  if (project.sections?.length) {
    sections = [...project.sections];
  } else if (project.body.trim()) {
    sections = parseBodySections(project.body);
  } else {
    sections = [];
  }

  const hasFeaturesSection = sections.some((s) => s.features?.length);
  if (project.features?.length && !hasFeaturesSection) {
    sections = sections.filter((s) => !FEATURES_TITLE.test(s.title));
    sections.push({
      id: "features",
      title: "Fonctionnalités clés",
      lede: project.featuresLede,
      features: project.features,
    });
  }

  return sections;
}
