import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext(null);

function getInitialTheme() {
  const stored = localStorage.getItem('startup-launch-theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const initialState = {
  currentProject: null,
  currentReport: null,
  history: [],
  isGenerating: false,
  generationProgress: null,
  theme: getInitialTheme(),
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PROJECT':
      return { ...state, currentProject: action.payload };
    case 'SET_REPORT':
      return { ...state, currentReport: action.payload };
    case 'SET_HISTORY':
      return { ...state, history: action.payload };
    case 'START_GENERATION':
      return { ...state, isGenerating: true, generationProgress: null };
    case 'SET_PROGRESS':
      return { ...state, generationProgress: action.payload };
    case 'FINISH_GENERATION':
      return { ...state, isGenerating: false, generationProgress: null, currentProject: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('startup-launch-theme', state.theme);
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({ type: 'SET_THEME', payload: state.theme === 'dark' ? 'light' : 'dark' });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
