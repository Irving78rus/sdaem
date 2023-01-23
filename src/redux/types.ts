export interface stateModel {
  baseFlat: initialStateModel;
  userSetting: initialStateUserSettingModel;
}

export interface initialStateUserSettingModel {
  isAuth: boolean;
  user: any;
}

export interface flatModel {
  city: string;
  cost: number;
  rooms: number;
  metro: string;
  district: string;
  sleepingPlaces: number;
  GasStove: boolean;
  Oven: boolean;
  CoffeeMaker: boolean;
  MicrowaveOven: boolean;
  Dishes: boolean;
  Dishwasher: boolean;
  upPrice?: number|string;
  toPrice?: number|string;
}

export interface topNavigationFormSearchModel {
  title: string;
  id: number;
  active: boolean;
}

export interface paramsModel {
  city?: string;
  cost?: number;
  upPrice?: number|string;
  toPrice?: number|string;
  rooms?: number;
  metro?: string;
  district?: string;
  sleepingPlaces?: number;
  GasStove?: boolean;
  Oven?: boolean;
  CoffeeMaker?: boolean;
  MicrowaveOven?: boolean;
  Dishes?: boolean;
  Dishwasher?: boolean;
}

export interface payloadModel {
  payload: paramsModel;
  type: string;
}

export interface initialStateModel {
  flat: flatModel[];
  params: paramsModel;
  res: flatModel[];
  topNavigationFormSearch: topNavigationFormSearchModel[];
  pending: boolean;
}
