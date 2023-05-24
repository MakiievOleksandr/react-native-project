import { useState } from 'react';

import styles from './registration-screen-styles';

import {
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

const initialState = {
  login: '',
  email: '',
  password: '',
};

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const handleHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmitForm = () => {
    console.log(state);
    // navigation.navigate('Posts');
    // console.log(navigation);
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
            <View
              style={[
                styles.avatarPlace,
                {
                  transform: [{ translateX: -44 }],
                },
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.addAvatarBtn,
                  {
                    transform: [
                      {
                        translateX: -13,
                      },
                      {
                        translateY: -41,
                      },
                    ],
                  },
                ]}
              >
                <Image
                  style={styles.addAvatarBtnSymbol}
                  source={require('../../assets/images/Union.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Registration</Text>

            <TextInput
              style={styles.input}
              name='login'
              value={state.login}
              textAlign='left'
              placeholder='Login'
              placeholderTextColor='#BDBDBD'
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
              onFocus={() => setIsShowKeyboard(true)}
            />
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
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.loginText}>
                    Already have an account? Log in
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
