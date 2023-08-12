import { Request, Response } from "express";
import { DeveloperInfosCreate, DeveloperInfos } from "../interfaces";
import { developerInfoServices } from "../services";

const createDeveloperInfo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: DeveloperInfosCreate = {
    ...req.body,
    developerId: req.params.id,
  };
  const developerInfos: DeveloperInfos =
    await developerInfoServices.createDeveloperInfo(payload);

  return res.status(201).json(developerInfos);
};

export default { createDeveloperInfo };
