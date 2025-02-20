import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  RegisterAddress: undefined;
};

// Define a type for the navigation prop in each screen
export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
