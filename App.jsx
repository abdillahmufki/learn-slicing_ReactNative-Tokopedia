/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Card = props => {
  return (
    <View style={styles.cardContainer}>
      <Text>{props.children}</Text>
    </View>
  );
};

const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search:', searchText);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.searchBarContainer}>
            <IonIcon
              name="search-outline"
              size={24}
              color="#888"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Cari di Tokopedia"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
            />
          </View>
          <View style={styles.iconContainer}>
            <IonIcon name="menu-outline" solid size={25} color="#fff" />
            <IonIcon name="cart-outline" solid size={25} color="#fff" />
            <IonIcon
              name="notifications-outline"
              solid
              size={25}
              color="#fff"
            />
            <IonIcon name="mail-outline" solid size={25} color="#fff" />
          </View>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            <IonIcon name="location-outline" solid size={20} color="#fff" />{' '}
            Dikirim ke Kp. Biru rt. 003 Rw. 004 no.98 dekat
          </Text>
        </View>
        <View style={styles.cardWrapper}>
          <Card>
            <View style={styles.cardContent}>
              <View style={styles.cardItem}>
                <Text>
                  <IonIcon
                    name="cash-outline"
                    solid
                    size={14}
                    color="#2E8A99"
                  />{' '}
                  Gopay
                </Text>
                <Text style={styles.boldText}>Rp. 100.000</Text>
                <Text style={styles.boldText}>100.000 Coins</Text>
              </View>
              <View style={styles.cardItem}>
                <Text>
                  <IonIcon
                    name="trophy-outline"
                    solid
                    size={14}
                    color="#F2BE22"
                  />{' '}
                  Rewards
                </Text>
                <Text style={styles.boldText}>Silver</Text>
                <Text style={styles.boldText}>5 Kupon Baru</Text>
              </View>
              <View style={styles.cardItem}>
                <Text>
                  <IonIcon name="add-outline" solid size={14} color="#000" />{' '}
                  PLUS
                </Text>
                <Text style={styles.boldText}>Coba 1 Bulan</Text>
                <Text style={[styles.boldText, styles.greenText]}>
                  Langganan, Yuk!
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08A24D',
    paddingVertical: 10,
  },
  topContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    width: '63%',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  iconContainer: {
    flexDirection: 'row-reverse',
    gap: 10,
    justifyContent: 'flex-end',
  },
  locationContainer: {
    marginLeft: 20,
  },
  locationText: {
    color: '#fff',
    fontSize: 16,
  },
  cardWrapper: {
    padding: 15,
  },
  cardContainer: {
    borderRadius: 8,
    padding: 15,
    marginVertical: 12,
    backgroundColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10,
  },
  cardItem: {
    padding: 10,
    gap: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  greenText: {
    color: '#08A24D',
  },
});

export default App;
