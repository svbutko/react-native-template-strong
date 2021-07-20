import {useCallback} from "react";
import {useAppDispatch} from "../../core/store/store";
import {LoadState} from "../../types";
import {AsyncThunk} from "@reduxjs/toolkit";

interface IResultActions {
  loadMore: () => void;
  tryAgain: () => void;
  pullToRefresh: () => void;
}

export function useFlatListActions(request: AsyncThunk<any, any, any>, loadState: LoadState): IResultActions {
  const dispatch = useAppDispatch();

  const loadMore = useCallback(() => {
    loadState == LoadState.idle && dispatch(request(LoadState.loadingMore));
  }, [dispatch, request, loadState]);

  const tryAgain = useCallback(() => {
    dispatch(request(LoadState.firstLoad));
  }, [dispatch, request]);

  const pullToRefresh = useCallback(() => {
    dispatch(request(LoadState.pullToRefresh));
  }, [dispatch, request]);

  return {loadMore, tryAgain, pullToRefresh};
}
