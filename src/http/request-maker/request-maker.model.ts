export interface RequestMaker {
  api(url: string): RequestMaker;
  post(endpoint: string, body?: any): Promise<any>;
  get(endpoint: string): Promise<any>;
}
