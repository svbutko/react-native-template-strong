import {AppEnvironment} from "./index";

declare module "react-native-config" {
  interface EnvironmentVariables {
    API_URL: string;
    ENVIRONMENT: AppEnvironment;
    IGNORE_NET_INFO: boolean;
  }

  // @ts-ignore
  export const Config: EnvironmentVariables;

  // @ts-ignore
  // eslint-disable-next-line import/no-default-export
  export default Config;
}
