const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const selectUser = state => state.auth.user;
const authSelectors = {
  getIsLoggedIn,
  getIsRefreshing,
  selectUser,
};

export default authSelectors;
