import {createSlice} from "@reduxjs/toolkit";
import {SystemInitialState, SystemState} from "./systemState";
import {newState} from "../../../common/utils";
import {REHYDRATE} from "redux-persist/es/constants";
import {RehydrateAppAction} from "../../../types";

function rehydrate(state: SystemState, rehydrateParams: RehydrateAppAction) {
  return newState(rehydrateParams.payload?.system || state, {isOnboardingVisited: rehydrateParams.payload != null});
}

function onboardingHandler(state: SystemState) {
  return newState(state, {isOnboardingVisited: true});
}

export const {reducer: SystemReducer} = createSlice({
  name: "system",
  initialState: SystemInitialState,
  reducers: {
    setOnboarding: onboardingHandler,
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, rehydrate);
  },
});
