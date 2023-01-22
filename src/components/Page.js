import {StyleSheet, View, StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';

const Page = props => {
  const {colors} = useTheme();
  return <View style={styles.main(colors, props.style)}>{props.children}</View>;
};

const styles = StyleSheet.create({
  main: (colors, style) => ({
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.background,
    ...style,
  }),
});

export default Page;
