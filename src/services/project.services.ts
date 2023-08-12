import format from "pg-format";
import {
  Project,
  ProjectCreate,
  ProjectResult,
  ProjectUpdate,
} from "../interfaces";
import { client } from "../database";

const createProject = async (payload: ProjectCreate): Promise<Project> => {
  const queryFormat: string = format(
    'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: ProjectResult = await client.query(queryFormat);
  return queryResult.rows[0];
};

const retrieveProject = async (projectId: string): Promise<Project> => {
  const query: string = `
    SELECT
        "p"."id" AS "projectId",
        "p"."name" AS "projectName",
        "p"."description" AS "projectDescription",
        "p"."repository" AS  "projectRepository",
        "p"."startDate" AS "projectStartDate",
        "p"."endDate" AS "projectEndDate",
        "d"."name" AS "projectDeveloperName"
    FROM "developers" AS "d"
    RIGHT JOIN "projects" AS "p"
	    ON "p"."developerId" = "d"."id"
    WHERE "p"."id" = $1;
    `;

  const queryResult: ProjectResult = await client.query(query, [projectId]);
  return queryResult.rows[0];
};

/*
FROM "developers" AS "d"
RIGHT JOIN "projects" AS "p"
	ON "p"."developerId" = "d"."id"
WHERE "p"."id" = $1;

FROM "projects" AS "p"
LEFT JOIN "developers" AS "d"
    ON "d"."id" = "p"."developerId"
WHERE "p"."id" = $1
*/

const partialUpdateProject = async (
  payload: ProjectUpdate,
  projectId: string
): Promise<Project> => {
  const queryFormat: string = format(
    'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: ProjectResult = await client.query(queryFormat, [
    projectId,
  ]);

  return queryResult.rows[0];
};

export default { createProject, retrieveProject, partialUpdateProject };
