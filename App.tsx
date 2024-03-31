import {StyleSheet, View} from 'react-native';

// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
// import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import PostUploadScreen from './src/screens/PostUploadScreen';
import Navigation from './src/navigation';

const App = () => {
  return <Navigation />;
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
