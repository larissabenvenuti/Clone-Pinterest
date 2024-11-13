import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  banner: {
    width: '100%',
    height: height * 0.25,
    overflow: 'hidden',
    objectFit: 'cover',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    textAlign: 'center',
    marginTop: height * 0.25 - 45,
    marginBottom: Platform.OS === 'android' ? 20 : 50,
  },
  title: {
    marginTop: height * 0.1,
    fontSize: 38,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  forms: {
    width: '85%',
    alignItems: 'center',
    marginTop: 20,
  },
  termsContainer: {
    width: '85%',
    marginTop: 20,
  },
  termsText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  termsLink: {
    color: '#1877F2',
    textDecorationLine: 'underline',
  },
  containerGlobal: {
    width: '100%',
  },
  
  bannerResponsive: {
    width: '100%',
    height: width > 400 ? height * 0.25 : height * 0.15,
  },
});
