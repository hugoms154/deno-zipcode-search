import { oak } from "../deps.ts";
import { applicationRouter } from "./routes/router.ts";
export async function startServer() {
  const app = new oak.Application();

  app.use(applicationRouter.routes());

  console.log("Server started on port http://localhost:4000");
  await app.listen({ port: 4000 });
}
