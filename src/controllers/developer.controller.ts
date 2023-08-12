import { Request, Response } from "express";
import { Developer } from "../interfaces";
import { developerServices } from "../services";

const createDeveloper = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Developer = await developerServices.createDeveloper(
    req.body
  );
  return res.status(201).json(developer);
};

const retrieveDeveloper = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const developer: Developer = await developerServices.retrieveDeveloper(
    req.params.id
  );
  return res.status(200).json(developer);
};

const partialUpdateDeveloper = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const { id } = req.params;

  const developer: Developer = await developerServices.partialUpdateDeveloper(
    id,
    body
  );
  return res.status(200).json(developer);
};

const destroyDeveloper = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await developerServices.destroyDeveloper(req.params.id);
  return res.status(204).json();
};

export default {
  createDeveloper,
  retrieveDeveloper,
  partialUpdateDeveloper,
  destroyDeveloper,
};
