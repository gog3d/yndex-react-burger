
  it('should handle ', () => {
    expect(authReducer(authState, {
      type: ,
      login: , 
    }
      )).toEqual(
        {
          login: {},
          loginRequest: false,
          loginFailed: false,
            
          register: {},
          registerRequest: false,
          registerFailed: false,
            
          logout: {},
          logoutRequest: false,
          logoutFailed: false,
            
          token: {},
          tokenRequest: false,
          tokenFailed: false,
        
          user: {},
          userRequest: false,
          userFailed: false,
        
          refreshUser: {},
          refreshUserRequest: false,
          refreshUserFailed: false,
            
          auth: {},
          authRequest: false,
          authFailed: false
        }
      )
  })







  describe('login reducer', () => {
    it('return initil auth state', () => {
      expect(authReducer(undefined, {})).toEqual(authState)
    })
    it('should handle getLoginRequest', () => {
      expect(authReducer(authState, {
        type: getLoginRequest,
      }
        )).toEqual(
        {
            forgotPassword: {},
            forgotPasswordRequest: false,
            forgotPasswordFailed: false,
        }
      )
    })
})


it('should handle ', () => {
  expect(ingredientsReducer(initialState, {
    type: ,
  }
)).toEqual(
  {
    burgerIngredients: [],
    burgerIngredientsRequest: false,
    burgerIngredientsFailed: false,
    constructorIngredients: {
      bun: {},
      ingredients: [],
    },
    modalIngredient: {},
    orderDetailsItems: null,
    orderDetails: null,
    orderDetailsRequest: false,
    orderDetailsFailed: false,
    bunsScroll: true,
    saucesScroll: false,
    mainsScroll: false,
    
    restorePassword: {},
    restorePasswordRequest: false,
    restorePasswordFailed: false,
  })
})