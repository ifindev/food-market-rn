import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Option} from '@typings/common.type';
import {AuthStackParamList} from '@typings/navigation.type';
import {useState} from 'react';
import {Alert} from 'react-native';

// TODO: GET THIS FROM API LATER
const cities: Option[] = [
  {label: 'New York', value: 'ny'},
  {label: 'Los Angeles', value: 'la'},
  {label: 'Chicago', value: 'chi'},
  {label: 'Houston', value: 'hou'},
  {label: 'Phoenix', value: 'phx'},
  {label: 'Philadelphia', value: 'phi'},
  {label: 'San Antonio', value: 'sa'},
  {label: 'San Diego', value: 'sd'},
  {label: 'Dallas', value: 'dal'},
  {label: 'San Jose', value: 'sj'},
  {label: 'Austin', value: 'aus'},
  {label: 'Jacksonville', value: 'jax'},
  {label: 'Fort Worth', value: 'fw'},
  {label: 'Columbus', value: 'col'},
  {label: 'San Francisco', value: 'sf'},
  {label: 'Charlotte', value: 'cha'},
  {label: 'Indianapolis', value: 'ind'},
  {label: 'Seattle', value: 'sea'},
  {label: 'Denver', value: 'den'},
  {label: 'Washington', value: 'dc'},
  {label: 'Boston', value: 'bos'},
  {label: 'El Paso', value: 'ep'},
  {label: 'Nashville', value: 'nash'},
  {label: 'Detroit', value: 'det'},
  {label: 'Oklahoma City', value: 'okc'},
  {label: 'Portland', value: 'por'},
  {label: 'Las Vegas', value: 'lv'},
  {label: 'Memphis', value: 'mem'},
  {label: 'Louisville', value: 'lou'},
  {label: 'Baltimore', value: 'bal'},
  {label: 'Milwaukee', value: 'mil'},
  {label: 'Albuquerque', value: 'abq'},
  {label: 'Tucson', value: 'tuc'},
  {label: 'Fresno', value: 'fre'},
  {label: 'Mesa', value: 'mes'},
  {label: 'Sacramento', value: 'sac'},
  {label: 'Atlanta', value: 'atl'},
  {label: 'Kansas City', value: 'kc'},
  {label: 'Colorado Springs', value: 'cos'},
  {label: 'Miami', value: 'mia'},
  {label: 'Raleigh', value: 'ral'},
  {label: 'Omaha', value: 'oma'},
  {label: 'Long Beach', value: 'lb'},
  {label: 'Virginia Beach', value: 'vb'},
  {label: 'Oakland', value: 'oak'},
  {label: 'Minneapolis', value: 'min'},
  {label: 'Tulsa', value: 'tul'},
  {label: 'Tampa', value: 'tam'},
  {label: 'Arlington', value: 'arl'},
  {label: 'New Orleans', value: 'no'},
  {label: 'Wichita', value: 'wic'},
  {label: 'Cleveland', value: 'cle'},
  {label: 'Bakersfield', value: 'bak'},
  {label: 'Aurora', value: 'aur'},
  {label: 'Anaheim', value: 'ana'},
  {label: 'Honolulu', value: 'hon'},
  {label: 'Santa Ana', value: 'sa'},
  {label: 'Riverside', value: 'riv'},
  {label: 'Corpus Christi', value: 'cc'},
  {label: 'Lexington', value: 'lex'},
  {label: 'Stockton', value: 'sto'},
  {label: 'Henderson', value: 'hen'},
  {label: 'Saint Paul', value: 'sp'},
  {label: 'St. Louis', value: 'stl'},
  {label: 'Cincinnati', value: 'cin'},
  {label: 'Pittsburgh', value: 'pit'},
  {label: 'Greensboro', value: 'grn'},
  {label: 'Anchorage', value: 'anc'},
  {label: 'Plano', value: 'pla'},
  {label: 'Lincoln', value: 'lin'},
  {label: 'Orlando', value: 'orl'},
  {label: 'Irvine', value: 'irv'},
  {label: 'Toledo', value: 'tol'},
  {label: 'Jersey City', value: 'jc'},
  {label: 'Chula Vista', value: 'cv'},
  {label: 'Durham', value: 'dur'},
  {label: 'Fort Wayne', value: 'fw'},
  {label: 'St. Petersburg', value: 'spb'},
];

export default function useRegisterAddressViewModel() {
  // #region NAVIGATION HOOK
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  // #endregion

  // #region CITY SELECTION
  const [selectedCity, setSelectedCity] = useState<Option | undefined>(
    undefined,
  );
  // #endregion

  // #region NAVIGATION HANDLER
  const handlePressBack = () => {
    navigation.goBack();
  };

  const handlePressSignUp = () => {
    Alert.alert('Siging you up...');
  };
  // #endregion
  return {
    handlePressBack,
    handlePressSignUp,
    cities,
    selectedCity,
    setSelectedCity,
  };
}
