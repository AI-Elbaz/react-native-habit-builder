import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, showGoBack = false}) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.main}>
      {showGoBack && <IconButton icon="arrow-left" onPress={goBack} />}
      <Text variant="headlineLarge" style={styles.title(showGoBack)}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: showGoBack => ({
    marginLeft: showGoBack ? 5 : 15,
  }),
});

export default Header;
