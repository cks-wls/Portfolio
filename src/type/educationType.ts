import type { stateType } from '@/type/stateType';
export interface EducationType {
  company: string;
  course: string;
  state: stateType;
  stateText: string;
  location: string;
  duration: string;
  description: string[];
  achievement: string[];
}
