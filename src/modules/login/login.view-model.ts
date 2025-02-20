import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '@typings/navigation.type';

export default function useLoginViewModel() {
  // #region NAVIGATION HOOK
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  // #endregion

  // #region NAVIGATION HANDLER
  const handleClickRegister = () => {
    navigation.navigate('Register');
  };
  // #endregion
  return {handleClickRegister};
}
