import React from "react";
import {Constructor, FlatList, FlatListProps} from "react-native";
import {IWrapperProps, Wrapper} from "./Wrapper";

export function FlatListWrapper<T>({loadState, tryAgain, error, ...props}: IWrapperProps & FlatListProps<T>) {
  const Component: Constructor<React.Component<FlatListProps<T>>> = FlatList;

  return (
    <Wrapper
      loadState={loadState}
      tryAgain={tryAgain}
      error={error}
      Component={Component}
      props={props}
    />
  );
}
