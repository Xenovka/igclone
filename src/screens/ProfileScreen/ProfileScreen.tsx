import {Image, FlatList} from 'react-native';

import FeedGridView from '../../components/FeedGridView';
import ProfileHeader from './ProfileHeader';

import user from '../../assets/data/user.json';

const ProfileScreen = () => {
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
