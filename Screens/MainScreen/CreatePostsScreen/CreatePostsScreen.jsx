import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import { useState } from 'react';

const CreatePostsScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const handlePost = () => {
    navigation.navigate('Posts');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.postPhoto}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/no-image-group.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.uselessText}>Load photo</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          name='title'
          value={title}
          textAlign='left'
          placeholder='Title'
          placeholderTextColor='#BDBDBD'
          onChangeText={(value) => setTitle(value)}
          // onFocus={() => setIsShowKeyboard(true)}
        />

        <View style={styles.location}>
          {/* <Image
            style={styles.imageStyle}
            source={require('../../../assets/images/map-pin.png')}
          /> */}
          <TextInput
            style={styles.input}
            name='location'
            value={location}
            textAlign='left'
            placeholder='Location'
            inlineImageLeft='map-pin'
            placeholderTextColor='#BDBDBD'
            onChangeText={(value) => setLocation(value)}
            // onFocus={() => setIsShowKeyboard(true)}
          />
        </View>

        <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
          <Text style={styles.btnText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.trashWrapper}>
        <TouchableOpacity style={styles.deleteBtn}>
          <Image source={require('../../../assets/images/trash-2.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 34,
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
    // alignItems: 'center',
  },

  postPhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },
  uselessText: {
    paddingTop: 8,
    paddingBottom: 32,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#bdbdbd',
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    marginBottom: 16,
  },

  // location: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },

  // imageStyle: {
  //   padding: 10,
  //   margin: 5,
  //   height: 25,
  //   width: 25,
  //   resizeMode: 'stretch',
  //   // alignItems: 'center',
  // },

  postBtn: {
    height: 50,
    marginTop: 16,
    backgroundColor: '#f6f6f6',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#bdbdbd',
  },
  trashWrapper: {
    marginTop: 'auto',

    alignItems: 'center',
  },
  deleteBtn: {
    height: 40,
    width: 70,
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreatePostsScreen;
