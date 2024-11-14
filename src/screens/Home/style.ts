import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20,
  },
  column: {
    width: '50%',
    marginBottom: 20,
  },
  topMenu:{
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 35,
    backgroundColor: '#fff',
  },
  menuItem: {
    fontSize: 16,
  },
  underlined: {
    borderBottomWidth: 3,
    borderBottomColor: '#333', 
  },
  pinContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,    
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 0,
  },  
  userInfo: {
    flexDirection: 'row', 
    alignItems: 'center',  
    marginTop: 0,
    marginBottom: 15,
  },  
  title: {
    marginRight: 8, 
  },
  username: {
    fontSize: 14,
    color: '#333',
    marginRight: 8, 
    marginLeft: 5, 
  },
  points: {
    fontSize: 24,
    marginLeft: 32,
    marginTop: 0,
    marginBottom: 30,
  },
  bottomMenu: {
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    backgroundColor: '#fff', 
    borderTopWidth: 1, 
    borderTopColor: '#ddd', 
    zIndex: 1,
  },
});