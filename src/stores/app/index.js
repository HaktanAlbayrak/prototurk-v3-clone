import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarType: 'app',
  language: 'tr',
  theme: localStorage.getItem('theme') || 'default',
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    _setSidebarType: (state, action) => {
      state.sidebarType = action.payload;
    },
    _setLanguage: (state, action) => {
      state.language = action.payload;
    },
    _setTheme: (state, action) => {
      state.theme = action.payload;

      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { _setSidebarType, _setLanguage, _setTheme } = app.actions;
export default app.reducer;
