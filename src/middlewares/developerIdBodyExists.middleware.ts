import { NextFunction, Request, Response } from "express";
import { ProjectResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const developerIdBodyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { developerId } = req.body;

  const query: ProjectResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1;',
    [developerId]
  );

  if (!query.rowCount) {
    throw new AppError("Developer not found.", 404);
  }

  return next();
};
