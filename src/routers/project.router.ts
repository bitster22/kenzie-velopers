import { Router } from "express";
import { projectController } from "../controllers";
import { developerIdBodyExists, projectIdExists } from "../middlewares";

const projectRouter: Router = Router();

projectRouter.post("", developerIdBodyExists, projectController.createProject);

projectRouter.use("/:id", projectIdExists);

projectRouter.get("/:id", projectController.retrieveProject);
projectRouter.patch(
  "/:id",
  developerIdBodyExists,
  projectController.partialUpdateDeveloper
);

export default projectRouter;
