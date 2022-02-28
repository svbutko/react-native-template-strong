export interface IBaseConfiguration {
}

function getNameFromContext(context: any): string {
  return context.name || context.constructor.name;
}

// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export abstract class BaseConfigurableModule<TConfig extends IBaseConfiguration> {
  private static configurationValues: Map<string, IBaseConfiguration> = new Map<string, IBaseConfiguration>();
  private static warnValues: Map<string, boolean> = new Map<string, boolean>();

  public static getConfiguration<TCon extends IBaseConfiguration>(): TCon | undefined {
    const config = BaseConfigurableModule.configurationValues.get(getNameFromContext(this));

    if (!config) {
      const wasWarned = BaseConfigurableModule.warnValues.get(getNameFromContext(this));
      if (!wasWarned) {
        console.error(`Module ${getNameFromContext(this)} not configured. Please call configure() method`);
        BaseConfigurableModule.warnValues.set(getNameFromContext(this), true);
      }

      return undefined;
    }

    return config as TCon;
  }

  public get configuration(): TConfig | undefined {
    return BaseConfigurableModule.getConfiguration.bind(this)();
  }

  protected configure(value: TConfig) {
    BaseConfigurableModule.configurationValues.set(getNameFromContext(this), value);
  }
}
