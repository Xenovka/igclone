import {Image, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import FeedGridView from '../../components/FeedGridView';
import ProfileHeader from './ProfileHeader';

import user from '../../assets/data/user.json';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {userId} = route.params;

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
