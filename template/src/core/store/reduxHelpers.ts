import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState} from './rootReducer';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();
