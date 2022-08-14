
export type TIngredient = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number,
  uuid: string,
};

export type TIngredientsState = {
  burgerIngredients: Array<TIngredient>,
  burgerIngredientsRequest: boolean,
  burgerIngredientsFailed: boolean,
  constructorIngredients: {
    bun: TIngredient | null,
    ingredients: Array<TIngredient>,
  },
  modalIngredient: TIngredient | null,
  orderDetailsItems: Array<TIngredient> | null,
  orderDetails: number | null,

  orderDetailsRequest: boolean,
  orderDetailsFailed: boolean,
  bunsScroll: boolean,
  saucesScroll: boolean,
  mainsScroll: boolean,
};

export type TRegister = {
    success: boolean,
    user: {
        email: string,
        name: string,
    },
    accessToken: string,
    refreshToken: string
};

export type TLogin = {
  success: boolean,
  user: {
      email: string,
      name: string,
  },
  accessToken: string,
  refreshToken: string
};
export type TLogout = {
  success: boolean,
  message: string,
};
export type TToken = {
  success: boolean,
  accessToken: string,
  refreshToken: string
};
export type TAuthType = {
  success: boolean,
  user: {
      email: string,
      name: string,
  },
};
export type TUser = {
  email: string,
  name: string,
}

export type TAuthState = {
  login: TLogin | TUser | null,
  loginRequest: boolean,
  loginFailed: boolean,
  
  register: null | TRegister,
  registerRequest: boolean,
  registerFailed: boolean,
  
  logout: TLogout | null,
  logoutRequest: boolean,
  logoutFailed: boolean,
  
  token: TToken | null,
  tokenRequest: boolean,
  tokenFailed: boolean,

  user: TLogin | null,
  userRequest: boolean,
  userFailed: boolean,

  refreshUser: TLogin| null,
  refreshUserRequest: boolean,
  refreshUserFailed: boolean,
  
  auth: TToken | null,
  authRequest: boolean,
  authFailed: boolean
};

export type TForgotPasswordType = {
  success: boolean,
  message: string,
};

export type TForgotPasswordState = {
  forgotPassword: TForgotPasswordType | null,
  forgotPasswordRequest: boolean,
  forgotPasswordFailed: boolean,
  };
  
  export type TResetPasswordType = {
    success: boolean,
    message: string,
  };
  
  export type TResetPasswordState = {
    resetPassword: TResetPasswordType | null,
    resetPasswordRequest: boolean,
    resetPasswordFailed: boolean,
    };

    export type TOrders = {
      ingredients: Array<string>,
      _id: string,
      status: string,
      number: number,
      createdAt: string,
      updatedAt: string,
      name: string,
    }
    export type TUserOrders = {
      ingredients: Array<string>,
      _id: string,
      status: string,
      number: number,
      createdAt: string,
      updatedAt: string,
      name: string,
    }

    export type TWsOrdersState = { 
      wsError: string | undefined,
      wsConnected: boolean, 
      wsOrders: Array<TOrders>,
      wsOrdersTotal: number | null,
      wsOrdersTotalToday: number | null,
    };

    export type TWsUserOrdersState = { 
      wsUserError: string | undefined,
      wsUserConnected: boolean, 
      wsUserOrders: Array<TUserOrders>,
      wsUserOrdersTotal: number | null,
      wsUserOrdersTotalToday: number | null,
    };
    
    export interface Location<S = unknown> {
      pathname: string;
      search: string;
      state: S;
      hash: string;
      key?: string | undefined;
    }
  
    export interface TLocationState {
      background?: Location<TLocationState>
      from?: Location<TLocationState>
    }
  export type TRefreshUser = {
    email: string,
    password: string
  }
  export type TResetPassword = {
    password: string,
    token: string
  }