import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import { useState } from 'react';

const CommentsScreen = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

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
        <TextInput
          style={styles.input}
          name='location'
          value={location}
          textAlign='left'
          placeholder='Location'
          placeholderTextColor='#BDBDBD'
          onChangeText={(value) => setLocation(value)}
          // onFocus={() => setIsShowKeyboard(true)}
        />
        <TouchableOpacity style={styles.postBtn}>
          <Text style={styles.btnText}>Post</Text>
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
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
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
  },
});

export default CommentsScreen;
