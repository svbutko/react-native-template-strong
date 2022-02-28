import i18next from "i18next";
import {AbortHub} from "../common/helpers/abortHub";

export class BaseRequest {
  static handleError = async (error: Record<string, any>) => {
    // todo
  };

  static baseurl = "";

  static token = "";

  async fetch(url: string, config?: Record<string, any>): Promise<any> {
    let headers = {};

    if (config?.headers != undefined) {
      config?.headers.set("Accept-Language", i18next.language);
    } else {
      headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Accept-Language": i18next.language,
      };
    }

    const configExists = config != undefined;
    let abort: any;
    if (configExists) {
      abort = config.abort;
      delete config.abort;
    } else {
      abort = false;
    }

    const signal = AbortHub.instance.getSignal(url, abort);

    return fetch(BaseRequest.baseurl + url, Object.assign({headers, signal}, config))
      .then(response => {
        if (!response.status || response.status < 200 || response.status >= 300) {
          if (response.status == 401 && url !== "/api/Authentication/logout") {
            // eventRegister.emitEvent(EventNames.logout);
          }

          throw response;
        }

        return response;
      });
  }

  protected q(params: {[key: string]: string | number | boolean | Date}): string {
    const query = Object.keys(params)
      .filter(k => params[k] != null)
      .map(k => `${k}=${encodeURIComponent(params[k].toString())}`)
      .join("&");

    return query ? `?${query}` : "";
  }

  getObjectFlatter(): (node: Record<string, any>, parentName?: string) => string {
    const flatObject: Record<string, any> = {};

    return function objectToFlat(node: Record<string, any>, parentName = ""): string {
      Object.keys(node).forEach(key => {
        const newKey = parentName ? parentName + "." + key : key;
        if (node[key] instanceof Object) {
          objectToFlat(node[key], newKey);
        } else {
          flatObject[newKey] = node[key];
        }
      });

      return Object.keys(flatObject).reduce((q, key) => {
        return flatObject[key] ? `${q}${!!q ? "&" : "?"}${key}=${flatObject[key]}` : q;
      }, "");
    };
  }
}
