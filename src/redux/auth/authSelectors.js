const getIsAuthenticated = (state) => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.user.name;
const getUserSecondname = (state) => state.auth.user.secondName;
const getUserEmail = (state) => state.auth.user.email;
const getUserPassword = (state) => state.auth.user.password;
const getUserBirthdate = (state) => state.auth.user.birthdate;

export default {
  getIsAuthenticated,
  getUserName,
  getUserSecondname,
  getUserEmail,
  getUserPassword,
  getUserBirthdate,
};
