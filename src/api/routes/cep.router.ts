import { ViaCepMaker } from "../../http/via-cep/via-cep.maker.ts";
import { oak } from "../../deps.ts";

enum CepEndpoints {
  GET_CEP = "/cep/:cep",
}

const cepRouter = new oak.Router();

cepRouter
  .get(CepEndpoints.GET_CEP, async ({ params: { cep }, ...ctx }) => {
    const viaCepHttp = ViaCepMaker();
    return ctx.response.body = await viaCepHttp.getCep(cep);
  });

export { cepRouter };
