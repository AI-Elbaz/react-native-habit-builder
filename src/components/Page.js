import {StyleSheet, View, StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';

const Page = props => {
  const {colors} = useTheme();
  return <View style={styles.main(colors)}>{props.children}</View>;
};

const styles = StyleSheet.create({
  main: colors => ({
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.background,
  }),
});

export default Page;
