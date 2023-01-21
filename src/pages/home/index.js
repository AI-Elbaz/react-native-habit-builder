import Page from '../../components/Page';
import Header from '../../components/Header';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <Page>
      <Header title="Home" />
      <IconButton icon="history" onPress={() => navigate('History')} />
    </Page>
  );
};

export default Home;
