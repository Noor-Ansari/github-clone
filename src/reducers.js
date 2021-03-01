export const initialState = {
  userName: null,
  userInfo: null,
  userRepos: [],
  darkMode: false,
};

const reducers = (state, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.userName,
      };
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case "SET_USER_REPOS":
      return {
        ...state,
        userRepos: action.userRepos,
      };
    case "SET_DARK_MODE":
      return {
        ...state,
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};

export default reducers;
