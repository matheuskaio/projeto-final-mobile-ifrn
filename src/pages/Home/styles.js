import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    padding: 40,
    justifyContent: 'center',
  },

  banner: {
    width: '50%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: '',
    color: '#FFF',
    fontSize: 25,
    lineHeight: 30,
    marginTop: 40
  },
  titleBold: {
    fontFamily: ''
  },
  buttonsContainer:{
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button:{
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },
  buttonPrimary:{
    backgroundColor:'#9871f5'
  },
  buttonSecundary:{
    backgroundColor:'#04d361'
  },
  buttonText:{
    fontFamily: '',
    color: '#FFF',
    fontSize: 20
  },
  totalConnections:{
    fontFamily: '',
    color: '#FFF',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40
  }


})

export default styles
