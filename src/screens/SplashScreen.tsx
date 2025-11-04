import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Main');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/LangPal_Logo.png')}
        style={styles.logo}
      />
      <Text variant="headlineLarge" style={styles.title}>
        LangPal
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    gap: 16,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  title: {
    color: '#1E1E1E',
    letterSpacing: 1,
  },
});
