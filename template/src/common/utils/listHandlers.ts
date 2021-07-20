import {LoadState} from "../../types";
import {DEFAULT_PAGE_SIZE} from "../helpers/calculatePage";

export function commonListFulfilledHandler<T>(loadState: LoadState, payloadList: T[], storedList: T[]) {
  const newLoadState = payloadList.length >= DEFAULT_PAGE_SIZE ? LoadState.idle : LoadState.allIsLoaded;

  let newData: T[] = [];

  switch (loadState) {
    case LoadState.firstLoad:
    case LoadState.pullToRefresh:
    case LoadState.refreshing:
      newData = [...payloadList];
      break;
    case LoadState.loadingMore:
      newData = [...storedList].concat(payloadList);
      break;
    default:
      throw new Error(`LoadState ${loadState} is not valid in this context.`);
  }

  return {data: newData, error: null, loadState: newLoadState};
}
