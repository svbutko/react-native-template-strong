export {BaseConfigurableModule} from "./BaseConfigurableModule";
export {BaseLoggingModule} from "./BaseLoggingModule";

import {IBaseLoggingModuleConfiguration} from "./BaseLoggingModule";
import {IBaseConfiguration} from "./BaseConfigurableModule";

export type BaseLoggingModuleConfiguration = IBaseLoggingModuleConfiguration;
export interface IModuleReduxConfiguration<T> {statePath?: (state: any) => T}
export type BaseConfiguration = IBaseConfiguration;
