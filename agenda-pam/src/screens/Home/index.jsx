import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Constants from 'expo-constants';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contatos</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('CreateContact')}>
          <Icon name="plus" size={28} color="#f6f6f6" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.card}
          onPress={() => navigation.navigate('Details')}
        >
          <View style={styles.infosGroup}>
            <Text style={styles.name}>Ana Clara</Text>

            <View style={styles.dot} />

            <Text style={styles.number}>(13) 997847381</Text>
          </View>

          <Text style={styles.email}>ana@email.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.card}
          onPress={() => navigation.navigate('Details')}
        >
          <View style={styles.infosGroup}>
            <Text style={styles.name}>Japa lindão</Text>

            <View style={styles.dot} />

            <Text style={styles.number}>(13) 997847381</Text>
          </View>

          <Text style={styles.email}>japa@email.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.card}
          onPress={() => navigation.navigate('Details')}
        >
          <View style={styles.infosGroup}>
            <Text style={styles.name}>João Vitor</Text>

            <View style={styles.dot} />

            <Text style={styles.number}>(13) 997847381</Text>
          </View>

          <Text style={styles.email}>jao@email.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.card}
          onPress={() => navigation.navigate('Details')}
        >
          <View style={styles.infosGroup}>
            <Text style={styles.name}>Duarte</Text>

            <View style={styles.dot} />

            <Text style={styles.number}>(13) 997847381</Text>
          </View>

          <Text style={styles.email}>duarte@email.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.card}
          onPress={() => navigation.navigate('Details')}
        >
          <View style={styles.infosGroup}>
            <Text style={styles.name}>Gaby</Text>

            <View style={styles.dot} />

            <Text style={styles.number}>(13) 997847381</Text>
          </View>

          <Text style={styles.email}>gaby@email.com</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },

  header: {
    width: '100%',
    height: 64,
    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#f6f6f6',

    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AC2687'
  },

  button: {
    width: 48,
    height: 48,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#AC2687',
    borderRadius: 8
  },

  content: {
    paddingHorizontal: 20
  },

  card: {
    width: '100%',
    marginVertical: 8,
    padding: 16,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#f6f6f6'
  },

  infosGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  dot: {
    width: 4,
    height: 4,
    marginHorizontal: 8,
    borderRadius: 1000,
    backgroundColor: '#525252',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3f3f3f'
  },

  number: {
    fontSize: 18,
    color: '#3f3f3f'
  },

  email: {
    marginTop: 4,
    fontSize: 16,
    color: '#7e7e7e'
  }
});
