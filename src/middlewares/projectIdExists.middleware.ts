import { NextFunction, Request, Response } from "express";
import { ProjectResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const projectIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const query: ProjectResult = await client.query(
    'SELECT * FROM "projects" WHERE "id" = $1',
    [id]
  );

  if (!query.rowCount) {
    throw new AppError("Project not found.", 404);
  }

  return next();
};
