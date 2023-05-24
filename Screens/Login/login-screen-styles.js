import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  form: {
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  text: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 32,
  },

  input: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    height: 50,
    borderRadius: 8,
    color: '#212121',
    padding: 16,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 16,
  },
  inputLastChild: {
    marginBottom: 0,
  },

  showBtn: {
    position: 'absolute',
    right: 0,
    top: 10,
    backgroundColor: 'transparent',
    minWidth: 80,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
  },
  showBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#1B4371',
  },
  button: {
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    marginBottom: 16,
  },
  btnTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
  },
  loginText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#1B4371',
    textAlign: 'center',
  },
});

export default styles;
