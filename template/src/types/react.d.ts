import {DependencyList} from "react";

declare module "react" {

  export function useCallback<T extends (...args: never[]) => unknown>(callback: T, deps: DependencyList): T;
}
