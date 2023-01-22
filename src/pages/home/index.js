import Page from '../../components/Page';
import Header from '../../components/Header';
import {IconButton, Text, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import useCounter from '../../hooks/useCounter';
import {StyleSheet, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useContext} from 'react';
import {UserDataContext} from '../../contexts/userDataContext';

const Home = () => {
  const {navigate} = useNavigation();
  const {startTime, goal} = useContext(UserDataContext);
  const {days, details} = useCounter(startTime);
  const {colors} = useTheme();

  return (
    <Page style={styles.main}>
      <Header title="Iron Will" />
      {/* <IconButton icon="history" onPress={() => navigate('History')} /> */}
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={280}
          width={15}
          fill={((days + 0.1) * 100) / goal}
          rotation={180}
          lineCap="round"
          tintColor={colors.primary}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={colors.primaryContainer}>
          {() => (
            <View style={styles.counter}>
              <Text variant="displayLarge" style={styles.days(colors.primary)}>
                {days}
              </Text>
              <Text style={styles.goal(colors.primary)}>/{goal}</Text>
            </View>
          )}
        </AnimatedCircularProgress>
        <View style={styles.counterDetails}>
          {Object.keys(details).map((key, i) => (
            <>
              {i !== 0 && <View style={styles.space} />}
              <View style={styles.countItem}>
                <Text style={styles.count(colors.primary)}>{details[key]}</Text>
                <Text style={styles.count(colors.primary)}>{key}</Text>
              </View>
            </>
          ))}
        </View>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  main: {},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    position: 'relative',
  },
  days: color => ({
    color,
  }),
  goal: color => ({
    color,
    position: 'absolute',
    right: -20,
    bottom: 10,
    opacity: 0.7,
  }),
  space: {
    width: 20,
  },
  counterDetails: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countItem: {
    alignItems: 'center',
  },
  count: color => ({
    color,
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.9,
  }),
});

export default Home;
