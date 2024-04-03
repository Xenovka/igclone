import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
// import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import PostUploadScreen from './src/screens/PostUploadScreen';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
