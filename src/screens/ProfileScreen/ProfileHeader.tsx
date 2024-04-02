import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

import {ProfileNavigationProp} from '../../navigation/types';

import user from '../../assets/data/user.json';

import styles from './styles';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, followers, following */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>

      {/* Buttons */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => navigation.navigate('Edit Profile')}
        />
        <Button text="Another Button" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default ProfileHeader;
