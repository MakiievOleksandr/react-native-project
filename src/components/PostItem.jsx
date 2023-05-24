import { TouchableOpacity, View, FlatList, Image, Text } from 'react-native';

const PostItem = ({ posts }) => {
  const { image } = posts;
  return image;
  //   return posts.map(({ image, title, comments, likes, location }) => {
  //     <View>
  //       <TouchableOpacity>
  //         <Image source={image} />
  //       </TouchableOpacity>
  //       <Text>{title}</Text>
  //       <View>
  //         <View>
  //           <TouchableOpacity>
  //             <Image />
  //             <Text>{comments}</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity>
  //             <Image />
  //             <Text>{likes}</Text>
  //           </TouchableOpacity>
  //         </View>
  //         <TouchableOpacity>
  //           <Image />
  //           <Text>{location}</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>;
  //   });
};

export default PostItem;
