import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/hero-bg.jpg')}
        style={styles.img}
      >
        <View style={styles.form}>
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
                source={require('../images/Union.png')}
              />
              {/* <Text style={styles.addAvatarBtnSymbol}>+</Text> */}
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Registration</Text>

          <TextInput
            style={styles.input}
            textAlign='left'
            placeholder='Login'
            placeholderTextColor='#BDBDBD'
          />
          <TextInput
            style={styles.input}
            textAlign='left'
            placeholder='Email'
            placeholderTextColor='#BDBDBD'
          />
          <TextInput
            style={styles.input}
            textAlign='left'
            placeholder='Password'
            placeholderTextColor='#BDBDBD'
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.btnTxt}>Sign in</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.loginText}>
              Already have an account? Log in
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  form: {
    flex: 0.67,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 60,
    paddingHorizontal: 16,
    // alignItems: 'center',
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
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
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
    marginTop: 16,
    textAlign: 'center',
  },
});
