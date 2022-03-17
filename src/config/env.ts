import { dotEnv, path } from "../deps.ts";

export const Environment = {
  APPLICATION_API: "application_api",
};

export function configEnv() {
  console.log("Configuring environment variables...");
  const envFilePath = path.resolve(Deno.cwd(), ".env");
  console.log(`Loading environment variables from ${envFilePath}`);
  dotEnv.config({ path: envFilePath, export: true });
  console.log("Environment variables configured.");
}
