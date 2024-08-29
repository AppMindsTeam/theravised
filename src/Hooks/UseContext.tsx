import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser, IUserContext} from '../interfaces/IUser';
import SplashScreen from 'react-native-splash-screen';
const UserContext = createContext<IUserContext | undefined>(undefined);
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
export function UserProvider({children}: {children: any}) {
  const [user, setUser] = useState<IUser>();

  const [loadingSession, setLoadingSession] = useState(true);
  const retrieveData = async () => {
    const currentUserData = await AsyncStorage.getItem('userData');
    if (currentUserData) {
      setUser(JSON.parse(currentUserData));
    }
    setLoadingSession(false);
  };
  const setCurrentUserDatalocally = (data: IUser) => {
    if (data) {
      AsyncStorage.setItem('userData', JSON.stringify(data));
    }
  };
  useEffect(() => {
    retrieveData();
  }, []);
  useEffect(() => {
    if (user) setCurrentUserDatalocally(user);
  }, [user]);
  useEffect(() => {
    if (!loadingSession) {
      SplashScreen.hide();
    }
  }, [loadingSession]);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
