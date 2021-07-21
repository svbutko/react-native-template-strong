declare module "react-native-config" {
  export enum AppEnvironment {
    development = "development",
    test = "test",
    staging = "staging",
    production = "production",
  }

  interface EnvironmentVariables {
    API_URL: string;
    ENVIRONMENT: AppEnvironment;
  }

  export const Config: EnvironmentVariables;

  // eslint-disable-next-line import/no-default-export
  export default Config;
}
