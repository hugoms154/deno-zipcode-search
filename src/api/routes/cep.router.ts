import { ViaCepMaker } from "../../http/via-cep/via-cep.maker.ts";
import { oak } from "../../deps.ts";

enum CepEndpoints {
  GET_CEP = "/cep/:cep",
}

const cepRouter = new oak.Router();

cepRouter
  .get(CepEndpoints.GET_CEP, async (ctx) => {
    const endpoint = ctx.params.cep;
    const cep = endpoint.split("/").reverse()[0];

    const viaCepHttp = ViaCepMaker();
    return ctx.response.body = await viaCepHttp.getCep(cep);
  });

export { cepRouter };
