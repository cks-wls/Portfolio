import type { stateType } from '@/type/stateType';
export interface ProjectsType {
  description: string;
  title: string;
  period: string;
  members: number;
  techStack: string[];
  githubUrl: string;
  figmaUrl: string;
  videoUrl: string;
  state: stateType;
  stateText: string;
}
