import { RequestMaker } from "./request-maker.model.ts";

export class RequestMakerImpl implements RequestMaker {
  constructor(private url: string) {}

  api(url: string): RequestMaker {
    this.url = url;
    return this;
  }

  async post(endpoint: string, body?: any): Promise<any> {
    const fullPathUrl = this.url + endpoint;

    return fetch(fullPathUrl, {
      method: "POST",
      body: JSON.stringify(body ?? {}),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  async get(endpoint: string): Promise<any> {
    const fullPathUrl = this.url + endpoint;

    return fetch(fullPathUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
}
