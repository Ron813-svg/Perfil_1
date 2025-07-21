import { StyleSheet } from 'react-native';
//Estilos separados para el componente Card


export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 15,
  },
  textContainer: {
    flex: 1,
    paddingRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  age: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
