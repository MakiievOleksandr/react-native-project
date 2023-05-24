import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import styles from '../Login/login-screen-styles';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require('../../assets/images/user-avatar.jpg')} />
        <View style={styles.infoWrap}>
          <Text style={styles.name}>Natali Romanenko</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
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
    borderTopWidth: 1,
    borderTopColor: '#bdbdbd',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoWrap: {
    paddingLeft: 8,
  },

  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: '#212121',
  },
  email: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.8)',
  },
});

export default PostsScreen;
