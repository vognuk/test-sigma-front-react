import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "http://localhost:3000";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post("/api/users/register", credentials);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    console.log(
      "Добавить уведомление об ошибке регистрации и ее причине(из ответа сервера)",
      error
    );
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/api/users/login", credentials);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    // console.log(error.message, "Добавить уведомление об ошибке логина и ее причине(из ответа сервера)", error);
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post("/api/users/logout");
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    console.log(
      "Добавить уведомление об ошибке выхода и ее причине(из ответа сервера)",
      error
    );
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logOut, logIn, getCurrentUser };
