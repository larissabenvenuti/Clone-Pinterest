import { StyleSheet, Dimensions } from 'react-native';

// Obtendo a largura e altura da tela
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  banner: {
    width: '100%',
    height: height * 0.35,
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
    marginTop: height * 0.35 - 45,
    marginBottom: 50,
  },
  title: {
    marginTop: 80,
    fontSize: 38,
    color: '#fff',
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
    color: '#B3B3B3',
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
    height: width > 500 ? height * 0.35 : height * 0.3, // Ajusta o tamanho do banner em telas maiores e menores
  },
});
