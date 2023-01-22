import Page from '../../components/Page';
import Header from '../../components/Header';
import {IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import useCounter from '../../hooks/useCounter';

const Home = () => {
  const {navigate} = useNavigation();
  const counter = useCounter();

  return (
    <Page>
      <Header title="Home" />
      <IconButton icon="history" onPress={() => navigate('History')} />
      <Text>{counter.seconds}</Text>
    </Page>
  );
};

export default Home;
