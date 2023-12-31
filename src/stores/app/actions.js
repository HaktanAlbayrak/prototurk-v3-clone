import store from '..';
import {
  _setTheme,
  _setLanguage,
  _setSidebarType,
  _setSidebarVisibility,
} from '.';

export const setTheme = (theme) => store.dispatch(_setTheme(theme));
export const setLanguage = (language) => store.dispatch(_setLanguage(language));
export const setSidebarType = (theme) => store.dispatch(_setSidebarType(theme));
export const setSidebarVisibility = (visibility) =>
  store.dispatch(_setSidebarVisibility(visibility));
