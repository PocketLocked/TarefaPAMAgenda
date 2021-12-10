import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

import Constants from 'expo-constants';

const CreateContact = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={28} color="#535353" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Novo Contato</Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#333333"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
          />
        </View>

        <RectButton
              style={styles.button}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>
                Cadastrar
              </Text>
            </RectButton>
      </View>
    </View>
  );
};

export default CreateContact;

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
    marginLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#AC2687'
  },

  form: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputContainer: {
    width: '100%',
    marginTop: 20,
  },

  label: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#a8a8a8',
    marginBottom: 4,
  },

  input: {
    backgroundColor: '#f3f3f3',
    padding: 16,
    borderRadius: 8,
    marginBottom: 4,

    fontSize: 18,
    fontStyle: 'normal',
    color: '#4d4d4d',

    borderWidth: 1,
    borderColor: '#d1d1d1'
  },

  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#AC2687',
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
  },

  buttonText: {
    fontSize: 18,
    fontStyle: 'normal',
    color: '#d9d9d9',
  }
});
