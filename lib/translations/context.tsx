import React, { createContext, useContext } from 'react';
import type { Locale } from './locales';

export const LocaleContext = createContext<Locale>("");

export const useLocaleContext = () => useContext(LocaleContext);
