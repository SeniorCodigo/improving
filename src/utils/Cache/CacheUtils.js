import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_DATA = 'USER_DATA';


type CacheType = {

  setUserData: (any) => void,
  getUserData: () => Promise<string>,
  removeAll: (any) => void,
};

const CacheUtil: CacheType = {

  setUserData: (userData: string) => {
    return AsyncStorage.setItem(USER_DATA, userData);
  },

  getUserData: async (): Promise<string> => {
    return await AsyncStorage.getItem(USER_DATA);
  },

  removeAll: (callback) => {
    let keys = [ USER_DATA];
    return AsyncStorage.multiRemove(keys, callback);
  },

};

export default CacheUtil;