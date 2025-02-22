import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import authStore from '@stores/auth.store';
import {AuthStackParamList} from '@typings/navigation.type';
import {useState} from 'react';

export default function useLoginViewModel() {
  // #region NAVIGATION HOOK
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  // #endregion

  // #region STATES
  const [isLoading, setIsLoading] = useState(false);
  // #endregion

  // #region NAVIGATION HANDLER
  const handleClickRegister = () => {
    navigation.navigate('Register');
  };

  const handleClickLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      authStore.actions.login();
    }, 3000);
  };
  // #endregion
  return {handleClickRegister, handleClickLogin, isLoading};
}
