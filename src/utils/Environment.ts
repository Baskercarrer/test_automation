import fs from 'fs/promises';

export interface UiConfig {
  baseUrl: string;
  timeout: number;
  browser?: string;
  headless?: boolean;
}

export interface ApiConfig {
  baseUrl: string;
  defaultHeaders: Record<string, string>;
}

interface EnvironmentDetails {
  uiConfig: UiConfig;
  apiConfig: ApiConfig;
}

class Environment {
  private dev: EnvironmentDetails = {
    uiConfig: {
      baseUrl: 'https://parabank.parasoft.com',
      timeout: 30000,
      browser: 'chrome',
      headless: false,
    },
    apiConfig: {
      baseUrl: 'http://parabank.parasoft.com/parabank/services/bank/',
      defaultHeaders: { Accept: 'application/json' },
    },
  };
  get getApiConfig(): ApiConfig {
    return this['dev'].apiConfig;
  }

  public getUiConfig(browser?: string, headless?: boolean): UiConfig {
    this['dev'].uiConfig.browser = browser;
    this['dev'].uiConfig.headless = headless;
    return this.dev.uiConfig;
  }

  async convertVideoToBase64(filePath: string) {
    return await fs.readFile(filePath, { encoding: 'base64' });
  }
}
export default new Environment();
