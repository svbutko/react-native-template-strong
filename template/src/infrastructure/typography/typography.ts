import {BaseLoggingModule} from "../modules";
import {ITypographyModuleConfiguration} from "./types/ITypographyModuleConfiguration";

// noinspection JSUnusedGlobalSymbols
export class Typography extends BaseLoggingModule {
  constructor() {
    super();
  }

  public static get configuration(): ITypographyModuleConfiguration | undefined {
    return super.getConfiguration<ITypographyModuleConfiguration>();
  }

  configure(params: ITypographyModuleConfiguration) {
    super.configure(params);
  };
}

