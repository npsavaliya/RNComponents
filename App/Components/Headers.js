import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Header } from 'react-native-elements';

export function HeaderCenterIcon(props) {
  return (
    <Header
      leftComponent={{ icon: 'menu', style: {color: '#fff'}, onPress: () => Alert.alert('', 'Hello World!') }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}

export function HeaderCenterText(props) {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff', style: {color: '#fff'}, onPress: props?.leftPress }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}

// const headerCenterStyles = StyleSheet.create({

// });
