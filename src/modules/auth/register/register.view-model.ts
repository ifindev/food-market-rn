import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '@typings/navigation.type';
import {useState} from 'react';

export default function useRegisterViewModel() {
  // #region NAVIGATION HOOK
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  // #endregion

  // #region FAKE ERROR => TODO: Change with real implementation later
  const [error, setError] = useState('');
  // #endregion

  // #region NAVIGATION HANDLER
  const handlePressBack = () => {
    navigation.goBack();
  };

  const handlePressContinue = () => {
    navigation.navigate('RegisterAddress');
  };
  // #endregion
  return {handlePressBack, handlePressContinue, error, setError};
}
