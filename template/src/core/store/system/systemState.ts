export interface SystemState {
  isOnboardingVisited: boolean;
  isNotificationsEnabled: boolean;
  lastVisitDate: number;
}

export const SystemInitialState: SystemState = {
  isOnboardingVisited: false,
  isNotificationsEnabled: true,
  lastVisitDate: new Date(1971, 1, 1).getTime(),
};
