import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Header from '@components/molecules/header/header.molecule';
import FeaturedCarousel from '@components/organisms/featured-carousel.organism';
import Tab from '@components/molecules/tab/tab.molecule';

export default function HomeView() {
  const featured = [
    {
      id: '1',
      name: 'Cherry Healthy',
      rating: 4.5,
      image: require('../../../assets/cherry-healthy.png'),
    },
    {
      id: '2',
      name: 'Burger Tamago',
      rating: 4.7,
      image: require('../../../assets/burger.png'),
    },
    {
      id: '3',
      name: 'Karee Special',
      rating: 4.3,
      image: require('../../../assets/kari.png'),
    },
    {
      id: '4',
      name: 'Es Tongtong',
      rating: 4.9,
      image: require('../../../assets/es-tongtong.png'),
    },
  ];

  const tabs: string[] = ['New Taste', 'Popular', 'Recommended'];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <View style={styles.container}>
      <Header
        title="FoodMarket"
        subtitle="Let's get some food"
        profileImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <FeaturedCarousel
        data={featured}
        onClick={item => Alert.alert(`Selected ${item.name}`)}
      />
      <View style={styles.menuList}>
        <Tab items={tabs} selected={selectedTab} onSelect={setSelectedTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 24,
    backgroundColor: '#FAFAFC',
  },
  menuList: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: 'white',
  },
});
