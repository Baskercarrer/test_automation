import { APIRequestContext, request } from 'playwright';
import { APIResponse } from '@playwright/test';
import { ApiConfig } from '@utils/Environment';

export default class RestClient {
  private apiContext: APIRequestContext;
  private _lastResponse: APIResponse;

  get lastResponse() {
    return this._lastResponse;
  }

  async init(config: ApiConfig) {
    this.apiContext = await request.newContext({
      ignoreHTTPSErrors: true,
      baseURL: config.baseUrl,
    });
  }

  async get(endPoint: string, queryParams?: Record<string, string | number | boolean>) {
    this._lastResponse = await this.apiContext.get(`.${endPoint}`, {
      params: queryParams,
    });
    console.log(await this._lastResponse.json());
  }

  async post(endPoint: string, data: unknown, queryParams?: Record<string, string | number | boolean>) {
    this._lastResponse = await this.apiContext.post(`.${endPoint}`, {
      data: data,
      params: queryParams,
    });
  }
}
