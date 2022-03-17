export interface ViaCepHttp {
  getCep(cep: string): Promise<any>;
}
