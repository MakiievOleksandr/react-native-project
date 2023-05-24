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
    paddingTop: 60,
    paddingHorizontal: 16,
    // backgroundColor: 'red',
  },
  avatarPlace: {
    position: 'absolute',
    left: '50%',
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  addAvatarBtn: {
    bottom: '-100%',
    right: '-100%',
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAvatarBtnSymbol: {
    width: 13,
    height: 13,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    color: '#212121',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 32,
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
