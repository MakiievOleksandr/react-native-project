import { useState } from 'react';

import styles from './login-screen-styles';

import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const initialState = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const handleHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmitForm = () => {
    navigation.navigate('Posts');
    // console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/hero-bg.jpg')}
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('Registration')}
                >
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

export default LoginScreen;
