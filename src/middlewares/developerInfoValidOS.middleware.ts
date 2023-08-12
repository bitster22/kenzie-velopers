import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const developerInfoValidOS = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { preferredOS } = req.body;

  if (
    preferredOS == "Windows" ||
    preferredOS == "Linux" ||
    preferredOS == "MacOS"
  ) {
    return next();
  } else {
    throw new AppError("Invalid OS option.", 400);
  }
};
