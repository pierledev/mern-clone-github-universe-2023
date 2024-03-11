import {
  CLEAR_FILTER,
  GET_SESSIONS_BEGIN,
  GET_SESSIONS_SUCCESS,
  GET_SPEAKERS_BEGIN,
  GET_SPEAKERS_SUCCESS,
  HANDLE_FILTER_INPUT,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_SESSION,
} from './actions';

const reducer = (state, action) => {
  if (
    action.type === GET_SESSIONS_BEGIN ||
    action.type === GET_SPEAKERS_BEGIN
  ) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === GET_SESSIONS_SUCCESS) {
    return {
      ...state,
      loading: false,
      sessions: action.payload.sessions,
    };
  }

  if (action.type === GET_SPEAKERS_SUCCESS) {
    return {
      ...state,
      loading: false,
      speakers: action.payload.speakers,
    };
  }

  if (action.type === UPDATE_SESSION) {
    return {
      ...state,
      sessions: state.sessions.map((session) =>
        session._id === action.payload.updatedSession._id
          ? action.payload.updatedSession
          : session
      ),
    };
  }

  if (action.type === LOGIN_USER) {
    localStorage.setItem('user', JSON.stringify(action.payload.user));

    return { ...state, user: action.payload.user };
  }

  if (action.type === LOGOUT_USER) {
    localStorage.removeItem('user');

    return { ...state, user: null };
  }

  if (action.type === HANDLE_FILTER_INPUT) {
    const checked = action.payload.checked;
    const name = action.payload.name;
    const value = action.payload.value;

    let filterCategories;

    if (name === 'search') {
      filterCategories = {
        ...state.filterCategories,
        search: value,
      };
    } else {
      filterCategories = {
        ...state.filterCategories,
        [name]: checked
          ? [...state.filterCategories[name], value]
          : state.filterCategories[name].filter(
              (categoryValue) => categoryValue !== value
            ),
      };
    }

    return {
      ...state,
      filterCategories,
    };
  }

  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filterCategories: {
        days: [],
        'delivery formats': [],
        'session tracks': [],
        'session types': [],
        levels: [],
        search: '',
      },
    };
  }

  return state;
};

export default reducer;
