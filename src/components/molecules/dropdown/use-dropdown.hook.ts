import {Option} from '@models/common.model';
import {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, Keyboard} from 'react-native';
import {View} from 'react-native-reanimated/lib/typescript/Animated';

const TRIGGER_TO_DROPDOWN_GAP = 4;

export type UseDropdownParams = {
  onSelect: (option: Option) => void;
  selected?: Option;
  options: Option[];
};

export default function useDropdown({
  onSelect,
  selected,
  options,
}: UseDropdownParams) {
  // #region REFS
  const flatListRef = useRef<FlatList>(null);
  const triggerRef = useRef<View | null>(null);
  const rotation = useRef(new Animated.Value(0)).current;
  // #endregion

  // #region STATES
  const [dropdownTop, setDropdownTop] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  // #endregion

  // #region MODAL HANDLERS
  const handleOpenModal = () => {
    Keyboard.dismiss();

    if (!triggerRef.current) return;

    triggerRef.current.measureInWindow(
      (x: number, y: number, width: number, height: number) => {
        setDropdownTop(y + height + TRIGGER_TO_DROPDOWN_GAP);
        setModalVisible(true);
      },
    );

    // Wait for the modal to open, then scroll to the selected item
    setTimeout(() => {
      if (selected) {
        const index = options.findIndex(item => item.value === selected.value);
        if (index !== -1 && flatListRef.current) {
          flatListRef.current.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.3, // Center the item
          });
        }
      }
    }, 100); // Small delay to ensure modal is fully open
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleToggleModal = () => {
    if (modalVisible) {
      handleCloseModal();
    } else {
      handleOpenModal();
    }
  };
  // #endregion

  // #region HANDLE SELECT OPTION
  const handleSelect = (option: Option) => {
    onSelect(option);
    handleCloseModal();
  };
  // #endregion

  // #region ICON ANIMATION
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: modalVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [modalVisible, rotation]);
  // #endregion

  return {
    handleToggleModal,
    handleCloseModal,
    handleSelect,
    rotateInterpolate,
    dropdownTop,
    modalVisible,
    triggerRef,
    flatListRef,
  };
}
