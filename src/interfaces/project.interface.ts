import { QueryResult } from "pg";

type Project = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate: Date;
  developerId: number;
};

type ProjectResult = QueryResult<Project>;
type ProjectCreate = Omit<Project, "id">;
type ProjectUpdate = Partial<ProjectCreate>;

export { Project, ProjectResult, ProjectCreate, ProjectUpdate };
