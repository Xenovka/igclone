import {Image, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import FeedGridView from '../../components/FeedGridView';
import ProfileHeader from './ProfileHeader';

import {
  MyProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
} from '../../types/navigation';

import user from '../../assets/data/user.json';

const ProfileScreen = () => {
  const route = useRoute<MyProfileRouteProp | UserProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route.params?.userId;

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
