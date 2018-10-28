import { Router } from "express";
import {
  setDataByKeyController,
  getDataByKeyController
} from "./../controllers";

const router: Router = Router();

router.post("/set-data", setDataByKeyController);
router.get("/get-data/:key", getDataByKeyController);

export const CacheRoutes: Router = router;
