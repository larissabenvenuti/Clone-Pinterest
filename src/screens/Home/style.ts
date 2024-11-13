import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 40,
    
  },
  column: {
    width: '48%',
    marginBottom: 20,
  },
  topMenu:{
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
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
    padding: 10,
  },
  image: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 10,
  },  
  userInfo: {
    flexDirection: 'row', 
    alignItems: 'center',  
    marginTop: 0,
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
    marginLeft: 25,
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
