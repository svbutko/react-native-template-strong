const abortControllers: Map<string, AbortController> = new Map();

export function getAbortSignal(url: string, abort: boolean): AbortSignal | undefined {
    if (abort) {
        const urlKey = url.split("?")[0];
        let controller = abortControllers.get(urlKey);

        if (controller != null) {
            controller.abort();
            const nextController = new AbortController();
            abortControllers.set(urlKey, nextController);

            return nextController.signal;
        } else {
            controller = new AbortController();
            abortControllers.set(urlKey, controller);

            return controller.signal;
        }
    } else {
        return undefined;
    }
}
