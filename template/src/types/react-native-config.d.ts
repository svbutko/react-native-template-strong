declare module "react-native-config" {
  interface EnvironmentVariables {
    API_URL: string;
  }

  export const Config: EnvironmentVariables;

  // eslint-disable-next-line import/no-default-export
  export default Config;
}
