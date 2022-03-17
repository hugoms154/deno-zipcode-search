import { RequestMakerImpl } from "../request-maker/request-maker.http.ts";
import { ViaCepHttpImpl } from "./via-cep.http.ts";
import { Environment } from "../../config/env.ts";
export function ViaCepMaker() {
  return new ViaCepHttpImpl(
    new RequestMakerImpl(Deno.env.get(Environment.APPLICATION_API) ?? ""),
  );
}
