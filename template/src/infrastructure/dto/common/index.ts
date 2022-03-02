import {IPageFilter} from "./IPageFilter";
import {IIdName} from "./IIdName";
import {IResponseWrapper} from "./IResponseWrapper";
import {IListControls} from "./IListControls";
import {IDataControl} from "./IDataControl";
import {IReduxParams} from "./IReduxParams";

export type IdName = IIdName;
export type PageFilter = IPageFilter;
export type ResponseData<T> = IResponseWrapper<T>;
export type ResponseWrapper<T> = IResponseWrapper<T> & IDataControl;
export type ListControls = IListControls & IDataControl;
export type DataControls = IDataControl;
export type ReduxParams<TRes, TParams = any> = IReduxParams<TRes, TParams>;
export type ReduxResponseParams<TRes, TParams = any> = IReduxParams<IResponseWrapper<TRes>, TParams>;
export type ActionPayload<TRes, TParams = any> = {} & {payload: ReduxParams<TRes, TParams>};
export type ActionResponsePayload<TRes, TParams = any> = {} & {payload: ReduxResponseParams<TRes, TParams>};
