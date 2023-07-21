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
  // eslint-disable-next-line import/no-unused-modules
  export const Config: EnvironmentVariables;

  // @ts-ignore
  // eslint-disable-next-line import/no-default-export,import/no-unused-modules
  export default Config;
}
