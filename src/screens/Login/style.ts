import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: '100%',
    height: height * 0.25,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  logo: {
    position: 'absolute',
    top: height * 0.25 - 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 60,
  },
  forms: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  termsContainer: {
    width: '90%',
    marginTop: 30,
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  termsLink: {
    color: '#1877F2',
    textDecorationLine: 'underline',
  },
});
