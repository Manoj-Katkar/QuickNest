import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
export type Ttype = (scope: string, options?: any) => string;
type Locale = 'hi' | 'en';

interface LocalizationContextProps {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
  updateLocaleAndRestart: any;
}

interface LocalizationContextWrapperProps {
  children: React.ReactNode;
}

export const LocalizationContext =
  React.createContext<LocalizationContextProps | null>(null);

const LocalizationContextWrapper: React.FC<
  LocalizationContextWrapperProps
> = props => {
  const {children} = props;

  const [locale, setLocale] = useState<Locale>('en');

  const updateLocaleAndRestart = async () => {
    if (locale === 'en') {
      setLocale('hi');
      await AsyncStorage.setItem('LanguageSelected', 'hi');
      return;
    }
    if (locale === 'hi') {
      setLocale('en');
      await AsyncStorage.setItem('LanguageSelected', 'en');
      return;
    }
  };

  const memoizedValues = useMemo(() => {
    return {
      locale,
      setLocale,
      updateLocaleAndRestart,
    };
  }, [locale]);

  const checkAppLanguageAndSet = async () => {
    const appStoredLang = await AsyncStorage.getItem('LanguageSelected'); //change done
    if (!appStoredLang) {
      if (
        RNLocalize.getLocales()[0].languageCode !== 'en' &&
        RNLocalize.getLocales()[0].languageCode !== 'hi'
      ) {
        return setLocale('hi');
      }
      setLocale(RNLocalize.getLocales()[0].languageCode as Locale);
    }
    if (appStoredLang) {
      setLocale(appStoredLang as Locale);
    }
  };

  useEffect(() => {
    checkAppLanguageAndSet();
  }, []);

  return (
    <LocalizationContext.Provider value={memoizedValues}>
      {children}
    </LocalizationContext.Provider>
  );
};

export default LocalizationContextWrapper;

const styles = StyleSheet.create({});
