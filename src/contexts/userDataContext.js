import {createContext, useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';

export const UserDataContext = createContext();
export const storage = new MMKV();

const defaultValues = {
  'user.startTime': new Date().getTime(),
  'user.history': '[]',
  'user.goal': 30,
};

const UserDataContextProvider = props => {
  const [startTime, setStartTime] = useState(null);
  const [history, setHistory] = useState(null);
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    Object.keys(defaultValues).map(key => {
      if (!storage.contains(key)) {
        storage.set(key, defaultValues[key]);
      }
    });

    setStartTime(storage.getNumber('user.startTime'));
    setHistory(JSON.parse(storage.getString('user.history')));
    setGoal(storage.getNumber('user.goal'));
  }, []);

  return (
    <UserDataContext.Provider value={{startTime, history, goal}}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
