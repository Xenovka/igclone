import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useState} from 'react';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn(newComment);

    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        placeholder="Add a comment..."
        onChangeText={setNewComment}
        style={styles.input}
        multiline
      />
      <Text style={styles.button} onPress={onPost}>
        Post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },

  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },

  input: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    flex: 1,
    marginLeft: 5,
  },

  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});

export default Input;
