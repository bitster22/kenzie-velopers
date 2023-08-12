import { Request, Response } from "express";
import { Project } from "../interfaces";
import { projectServices } from "../services";

const createProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: Project = await projectServices.createProject(req.body);
  return res.status(201).json(project);
};

const retrieveProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: Project = await projectServices.retrieveProject(req.params.id);
  return res.status(200).json(project);
};

const partialUpdateDeveloper = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: Project = await projectServices.partialUpdateProject(
    req.body,
    req.params.id
  );
  return res.status(200).json(project);
};

export default { createProject, retrieveProject, partialUpdateDeveloper };
