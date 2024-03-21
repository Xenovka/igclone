import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>wendyyyanto</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>anjayreact</Text> and{' '}
          <Text style={styles.bold}>96 others</Text>
        </Text>

        {/* Caption */}
        <Text style={styles.text}>
          <Text style={styles.bold}>wendyyyanto</Text> Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Vitae deleniti aut cum minima
          ipsam, officiis quaerat beatae maiores incidunt libero. Sint placeat,
          repudiandae ad quos impedit sit nemo magni pariatur!
        </Text>

        {/* Comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>wendyyyanto</Text> Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Text>
          <AntDesign name="hearto" style={styles.icon} color={colors.black} />
        </View>

        {/* Posted date */}
        <Text>21 March, 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},

  image: {
    width: '100%',
    aspectRatio: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },

  threeDots: {
    marginLeft: 'auto',
  },

  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  icon: {
    marginHorizontal: 5,
  },

  footer: {
    padding: 10,
  },

  text: {
    color: colors.black,
    lineHeight: 18,
  },

  bold: {
    fontWeight: fonts.weight.bold,
  },

  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentText: {
    color: colors.black,
    lineHeight: 18,
    flex: 1,
  },
});

export default App;
