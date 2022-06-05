import React from "react";

export interface IngredientType {
  "_id": string,
  "name": string,
  "type":string,
  "proteins": number,
  "fat": number,
  "carbohydrates": number,
  "calories": number,
  "price": number,
  "image": string,
  "image_mobile": string,
  "image_large": string,
  "__v":number
}


export interface StateType {
  ingredients: {
    burgerIngredients: Array<IngredientType>,
    burgerIngredientsRequest: boolean,
    burgerIngredientsFailed: boolean,
    constructorIngredients: {
      bun: IngredientType,
      ingredients: Array<IngredientType>,
    },
    modalIngredient: IngredientType,
    orderDetailsItems: Array<IngredientType>, 
    orderDetails: React.ReactNode,
    orderDetailsRequest: boolean,
    orderDetailsFailed: boolean,
    bunsScroll: boolean,
    saucesScroll: boolean,
    mainsScroll: boolean,
  
    restorePassword: object,
    restorePasswordRequest: boolean,
    restorePasswordFailed: boolean,
  },
  auth: {
    auth: Object,
    authRequest: boolean,
    authFailed: boolean,  

    login: Object,
    loginRequest: boolean,
    loginFailed: boolean,
    
    register: {
      success: boolean,
    },
    registerRequest: boolean,
    registerFailed: boolean,
    
    logout: Object,
    logoutRequest: boolean,
    logoutFailed: boolean,
    
    token: Object,
    tokenRequest: boolean,
    tokenFailed: boolean,

    user: {
      user:{
        email: string,
        name: string,
      }
    },
    userRequest: boolean,
    userFailed: boolean,

    refreshUser: Object,
    refreshUserRequest: boolean,
    refreshUserFailed: boolean,
  }, 
  forgotPassword: {
    forgotPassword: {
      success: boolean,
    },
    forgotPasswordRequest: boolean,
    forgotPasswordFailed: boolean,
    
  },
  resetPassword: {
    resetPassword: {
      success: boolean,
    },
    resetPasswordRequest: boolean,
    resetPasswordFailed: boolean,
  },
};



export interface AuthState {
  auth: {
    auth: Object,
    authRequest: boolean,
    authFailed: boolean,
  };
};