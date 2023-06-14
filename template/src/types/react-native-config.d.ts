import {AppEnvironment} from './index';

declare module 'react-native-config' {
  interface EnvironmentVariables {
    API_URL: string;
    ENVIRONMENT: AppEnvironment;
    IGNORE_NET_INFO: boolean;
    SIZE_MATTERS_BASE_WIDTH: number;
    SIZE_MATTERS_BASE_HEIGHT: number;
  }

  // @ts-ignore
  export const Config: EnvironmentVariables;

  // @ts-ignore
  // eslint-disable-next-line import/no-default-export
  export default Config;
}
