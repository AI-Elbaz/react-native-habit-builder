import {createContext, useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';

export const UserDataContext = createContext();
export const storage = new MMKV();

const UserDataContextProvider = props => {
  const [startTime, setStartTime] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!storage.contains('user.startTime')) {
      storage.set('user.startTime', new Date().getTime());
    }

    if (!storage.contains('user.history')) {
      storage.set('user.history', '[]');
    }

    setStartTime(storage.getNumber('user.startTime'));
    setHistory(JSON.parse(storage.getString('user.history')));
  }, []);

  return (
    <UserDataContext.Provider value={{startTime, history}}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
