import { useState } from 'react';

import PostItem from '../../../src/components/PostItem';

import posts from '../../../src/services/posts';

import styles from './profile-screen.styles';

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
  FlatList,
  SafeAreaView,
} from 'react-native';

const initialState = {
  login: 'Natali Romanenko',
  email: '',
  password: '',
};

const ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const handleHideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  // const handleSubmitForm = () => {
  //   console.log(state);
  //   // navigation.navigate('Posts');
  //   // console.log(navigation);
  //   setState(initialState);
  // };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/images/hero-bg.jpg')}
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
                  source={require('../../../assets/images/Union.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>{initialState.login}</Text>

            <View>
              <Text>Hello</Text>

              <SafeAreaView>
                <FlatList
                  data={posts}
                  renderItem={({ item }) => (
                    <PostItem posts={posts} title={item.title} />
                  )}
                />
              </SafeAreaView>
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            ></KeyboardAvoidingView>

            {!isShowKeyboard && <></>}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
