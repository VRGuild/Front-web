import { SET_IS_LOGIN } from './AuthActions';

const initialState = {
  isLogin: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
