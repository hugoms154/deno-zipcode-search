import { oak } from "../../deps.ts";

import { cepRouter } from "./cep.router.ts";

export const applicationRouter = new oak.Router();

applicationRouter.get("/", (context) => context.response.body = "Hello World!");
applicationRouter.use("/api", cepRouter.routes());
