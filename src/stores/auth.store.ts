import {proxy} from 'valtio';

// #region STATE TYPE
type AuthState = {
  /** Authentication Token */
  token: string | null;
  /** isLoading authentication */
  isLoading: boolean;
};
// #endregion

// #region INITIAL STATE
const initialState: AuthState = {
  token: null,
  isLoading: false,
};

const state = proxy<AuthState>({...initialState});
// #endregion

// #region ACTIONS
const actions = {
  setToken: (token: string | null) => {
    state.token = token;
  },
  setLoading: (isLoading: boolean) => {
    state.isLoading = isLoading;
  },

  login: () => {
    actions.setLoading(true);
    actions.setToken('token');
  },

  logout: () => {
    actions.setLoading(true);
    actions.setToken(null);
  },
};
// #endregion

// #region STORE
type AuthStore = {
  actions: typeof actions;
  initialState: Readonly<typeof initialState>;
  state: Readonly<AuthState>;
};

const authStore: AuthStore = {
  actions,
  initialState,
  state,
};
// #endregion

export default authStore;
