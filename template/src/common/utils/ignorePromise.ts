export function ignorePromise<T>(promise: Promise<T>, description?: string): void {
    promise.catch(reason => console.warn("IgnorePromise", description, reason));
}
