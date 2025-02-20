import ChevronDown from '@components/atoms/icons/chevron-down.icon';
import Typography from '@components/atoms/typography/typography.atom';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
} from 'react-native';
import useDropdown, {UseDropdownParams} from './use-dropdown.hook';

const OPTIONS_MAX_HEIGHT = 250;

type Props = UseDropdownParams & {
  label?: string;
  placeholder: string;
};

export default function Dropdown({
  label,
  placeholder,
  onSelect,
  options,
  selected,
}: Props) {
  const {
    handleToggleModal,
    handleCloseModal,
    rotateInterpolate,
    dropdownTop,
    modalVisible,
    triggerRef,
    handleSelect,
    flatListRef,
  } = useDropdown({onSelect, selected, options});

  return (
    <View style={styles.container}>
      {label && <Typography.Body16>{label}</Typography.Body16>}
      <TouchableOpacity
        ref={triggerRef}
        activeOpacity={0.7}
        style={[styles.trigger, modalVisible && styles.focused]}
        onPress={handleToggleModal}>
        <Typography.Body14 variant={selected ? 'primary' : 'secondary'}>
          {selected ? selected.label : placeholder}
        </Typography.Body14>
        <Animated.View style={{transform: [{rotate: rotateInterpolate}]}}>
          <ChevronDown />
        </Animated.View>
      </TouchableOpacity>

      {modalVisible && (
        <Modal
          transparent
          visible
          animationType="fade"
          onRequestClose={handleCloseModal}>
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View
            style={[
              styles.modalContainer,
              {top: dropdownTop, maxHeight: OPTIONS_MAX_HEIGHT},
            ]}>
            <FlatList
              ref={flatListRef}
              data={options}
              keyExtractor={(item, index) =>
                `${item.value.toString()}-${index}`
              }
              renderItem={({item}) => (
                <Pressable
                  onPress={() => handleSelect(item)}
                  style={styles.option}>
                  {selected && selected.value === item.value && (
                    <Typography>✔️</Typography>
                  )}
                  <Typography.Body14
                    bold={selected && selected.value === item.value}>
                    {item.label}
                  </Typography.Body14>
                </Pressable>
              )}
              style={{maxHeight: OPTIONS_MAX_HEIGHT}}
              nestedScrollEnabled
              getItemLayout={(data, index) => ({
                // Approximate height of each item
                length: 40,
                offset: 40 * index,
                index,
              })}
            />
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  trigger: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalContainer: {
    position: 'absolute',
    left: 25,
    right: 25,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderRadius: 8,
    elevation: 2,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    gap: 8,
  },
  selectedOptionText: {
    color: '#FFECB3',
  },
  focused: {
    borderColor: '#FFA000',
  },
});
