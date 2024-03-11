import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_SESSIONS_BEGIN,
  GET_SESSIONS_SUCCESS,
  GET_SPEAKERS_BEGIN,
  GET_SPEAKERS_SUCCESS,
  UPDATE_SESSION,
  HANDLE_FILTER_INPUT,
  CLEAR_FILTER
} from './actions';
import reducer from './reducer';
import { customFetch } from '../utils';
import toast from 'react-hot-toast';

const initialState = {
  loading: false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  sessions: [],
  speakers: [],
  filterCategories: {
    days: [],
    'delivery formats': [],
    'session tracks': [],
    'session types': [],
    levels: [],
    search: '',
  },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = ({ user }) => {
    dispatch({ type: LOGIN_USER, payload: { user } });
  };

  const logout = () => {
    dispatch({ type: LOGOUT_USER });
  };

  const getSessions = async () => {
    try {
      dispatch({ type: GET_SESSIONS_BEGIN });

      const response = await customFetch('/sessions');
      const { sessions } = response.data;

      dispatch({
        type: GET_SESSIONS_SUCCESS,
        payload: { sessions },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getSpeakers = async () => {
    try {
      dispatch({ type: GET_SPEAKERS_BEGIN });

      const response = await customFetch('/speakers');
      const { speakers } = response.data;

      dispatch({
        type: GET_SPEAKERS_SUCCESS,
        payload: { speakers },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const likeSession = async ({ sessionId }) => {
    try {
      const response = await customFetch.patch(`/sessions/${sessionId}/like`);
      const { updatedSession, message } = response.data;
      dispatch({ type: UPDATE_SESSION, payload: { updatedSession } });
      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };

  const unlikeSession = async ({ sessionId }) => {
    try {
      const response = await customFetch.patch(`/sessions/${sessionId}/unlike`);
      const { updatedSession, message } = response.data;
      dispatch({ type: UPDATE_SESSION, payload: { updatedSession } });
      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };

  const scheduleSession = async ({ sessionId }) => {
    try {
      const response = await customFetch.patch(
        `/sessions/${sessionId}/schedule`
      );
      const { updatedSession, message } = response.data;
      dispatch({ type: UPDATE_SESSION, payload: { updatedSession } });
      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };

  const unscheduleSession = async ({ sessionId }) => {
    try {
      const response = await customFetch.patch(
        `/sessions/${sessionId}/unschedule`
      );
      const { updatedSession, message } = response.data;
      dispatch({ type: UPDATE_SESSION, payload: { updatedSession } });
      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };

  const handleFilterInput = (e) => {
    dispatch({
      type: HANDLE_FILTER_INPUT,
      payload: {
        name: e.target.name,
        value: e.target.value,
        checked: e.target.checked,
      },
    });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  useEffect(() => {
    getSpeakers();
    getSessions();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        logout,
        getSessions,
        getSpeakers,
        likeSession,
        unlikeSession,
        scheduleSession,
        unscheduleSession,
        handleFilterInput,
        clearFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
