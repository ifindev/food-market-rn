import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Typography from '@components/atoms/typography/typography.atom';

type Props = {
  items: string[];
  selected: string;
  onSelect: (option: string) => void;
};

export default function Tab({items, selected, onSelect}: Props) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onSelect(item)} style={styles.tabItem}>
          <Typography.Body16
            variant={item === selected ? 'primary' : 'secondary'}>
            {item}
          </Typography.Body16>
          {selected === item && <View style={styles.indicator} />}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    gap: 24,
    height: 34,
  },
  tabItem: {
    flexDirection: 'column',
    gap: 12,
  },
  indicator: {
    width: '80%',
    marginHorizontal: 'auto',
    height: 3,
    backgroundColor: '#020202',
    borderRadius: 4,
  },
});
