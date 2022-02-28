import {LoadState} from "~/types";


export interface IResponseWrapper<T> {
  loadState: LoadState;
  data: T;
  error?: never | null;
}

