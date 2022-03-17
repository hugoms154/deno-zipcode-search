import { ViaCepHttp } from "./via-cep.model.ts";
import { RequestMaker } from "../request-maker/request-maker.model.ts";
import { Environment } from "../../config/env.ts";

export class ViaCepHttpImpl implements ViaCepHttp {
  constructor(private readonly requestMaker: RequestMaker) {
    this.requestMaker.api(Deno.env.get(Environment.APPLICATION_API) ?? "");
  }

  async getCep(cep: string) {
    return await this.requestMaker.get(`/ws/${cep}/json`);
  }
}
