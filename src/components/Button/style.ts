import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  styleButton: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  iconButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonOne: {
    backgroundColor: '#E60023',
  },
  buttonSpacing:{
    marginBottom: 10,
  },
  iconFacebook: {
    marginRight: 10,
  },
  iconGoogle: {
    marginRight: 10,
  },
});
