
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
  
  register: TRegister | null,
  registerRequest: boolean,
  registerFailed: boolean,
  
  logout: TLogout | null,
  logoutRequest: boolean,
  logoutFailed: boolean,
  
  token: TToken | null,
  tokenRequest: boolean,
  tokenFailed: boolean,

  user: TLogin | TUser| null,
  userRequest: boolean,
  userFailed: boolean,

  refreshUser: TUser| null,
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
