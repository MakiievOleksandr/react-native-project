import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Font from 'expo-font';

const initialState = {
  email: '',
  password: '',
};

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const handleHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmitForm = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/hero-bg.jpg')}
          style={styles.img}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 0 : 80,
            }}
          >
            <Text style={styles.text}>Log in</Text>

            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
              <TextInput
                style={styles.input}
                textAlign='left'
                name='email'
                value={state.email}
                placeholder='Email'
                placeholderTextColor='#BDBDBD'
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={() => setIsShowKeyboard(true)}
              />
            </KeyboardAvoidingView>

            <View>
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: isShowKeyboard ? 32 : 43,
                }}
                textAlign='left'
                placeholder='Password'
                name='password'
                value={state.password}
                placeholderTextColor='#BDBDBD'
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity style={styles.showBtn}>
                <Text style={styles.showBtnText}>Show</Text>
              </TouchableOpacity>
            </View>
            {!isShowKeyboard && (
              <>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmitForm}
                  activeOpacity={0.7}
                >
                  <Text style={styles.btnTxt}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.loginText}>
                    Don't have an account? Registration
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

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
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#1B4371',
    textAlign: 'center',
  },
});
