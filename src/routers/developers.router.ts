import { Router } from "express";
import { developerController, developerInfoController } from "../controllers";
import {
  developerIdExists,
  developerInfoExists,
  developerInfoValidOS,
  uniqueEmail,
} from "../middlewares";

const developerRouter: Router = Router();

developerRouter.post("", uniqueEmail, developerController.createDeveloper);

developerRouter.use("/:id", developerIdExists);

developerRouter.get("/:id", developerController.retrieveDeveloper);
developerRouter.patch(
  "/:id",
  uniqueEmail,
  developerController.partialUpdateDeveloper
);
developerRouter.delete("/:id", developerController.destroyDeveloper);
developerRouter.post(
  "/:id/infos",
  developerInfoExists,
  developerInfoValidOS,
  developerInfoController.createDeveloperInfo
);

export default developerRouter;
