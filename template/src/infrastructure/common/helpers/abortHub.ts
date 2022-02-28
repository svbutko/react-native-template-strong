export class AbortHub {
  private abortControllers: Map<string, AbortController> = new Map();

  static instance: AbortHub;

  getSignal(url: string, abort: boolean): AbortSignal | undefined {
    if (abort) {
      const urlKey = AbortHub.getUrlKey(url);
      let controller = this.abortControllers.get(urlKey);

      if (controller != null) {
        controller.abort();
        const nextController = new AbortController();
        this.abortControllers.set(urlKey, nextController);

        return nextController.signal;
      } else {
        controller = new AbortController();
        this.abortControllers.set(urlKey, controller);

        return controller.signal;
      }
    } else {
      return undefined;
    }
  }

  private static getUrlKey(url: string): string {
    return url.split("?")[0];
  }
}

AbortHub.instance = new AbortHub();
