import {FunctionComponent} from 'react';
import {
  NativeStackScreenProps,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

// #region AUTH ROUTES STACK TYPES
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  RegisterAddress: undefined;
};

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
// #endregion

// #region PROTECTED ROUTES
export type ProtectedStackParamList = {
  Home: undefined;
  FoodDetail: {id: string};
  Orders: undefined;
};
// #endregion

// #region GENERIC APPROUTE TYPE
export type AppRoute<T = {}, StackParamList = {}> = {
  name: keyof StackParamList;
  component: FunctionComponent<T>;
  options?: NativeStackNavigationOptions;
};

export type AppAuthRoute = AppRoute<{}, AuthStackParamList>;

export type AppProtectedRoute = AppRoute<{}, ProtectedStackParamList>;
// #endregion
