import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  styleButton: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    marginVertical: 10,
    paddingLeft: 25,
    justifyContent: 'center',
  },
  iconButtonContent: {
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
    justifyContent: 'center',
  },
  buttonOne: {
    width: '100%',
    height: 55,
    borderRadius: 30,
    marginVertical: 10,
    paddingLeft: 110,
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: '#E60023', 
  },
  iconFacebook: {
    marginRight: 30,
    justifyContent: 'flex-start',
  },
  iconGoogle: {
    marginRight: 30,
    justifyContent: 'flex-start',
  },
});
