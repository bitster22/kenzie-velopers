import { QueryResult } from "pg";

type DeveloperInfos = {
  id: number;
  developerSince: Date;
  preferredOS: string;
  developerId: number;
};

type DeveloperInfosResult = QueryResult<DeveloperInfos>;
type DeveloperInfosCreate = Omit<DeveloperInfos, "id">;

export { DeveloperInfos, DeveloperInfosCreate, DeveloperInfosResult };
