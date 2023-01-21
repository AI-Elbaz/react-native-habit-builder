import {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import Home from '../home';
import Settings from '../settings';

const Main = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'home', title: 'Home', focusedIcon: 'home-outline'},
    {key: 'settings', title: 'Settings', focusedIcon: 'cog-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationEnabled
      sceneAnimationType="shifting"
    />
  );
};

export default Main;
