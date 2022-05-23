export const getForgotPasswordRequest = async (body = null) => {
  if(body.email){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Reset email sent',
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'Reset email false',
        });
      }, 1500)
    );
  }

};
export const getResetPasswordRequest = async (body = null) => {
  if(body.password){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Password successfully reset',
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'Password reset false',
        });
      }, 1500)
    );
  }
};

export const getRegisterRequest = async (body = null) => {
  if(body.password){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            email: body.email,
            name: body.name
          },
          accessToken: 'Bearer ...',
          refreshToken: 'token',
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'Register false',
        });
      }, 1500)
    );
  }
};

export const getLoginRequest = async (body = null) => {
  if(body.password){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          accessToken: 'Bearer ...',
          refreshToken: '',
          user: {
            email: body.email,
            name: 'name',
          },
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'Login false',
        });
      }, 1500)
    );
  }
};
export const getLogoutRequest = async (body = null) => {
  if(body){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          message:'Successful logout',
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'logout false',
        });
      }, 1500)
    );
  }
}
export const getTokenRequest = async (body = null) => {
  if(body.password){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          accessToken: 'Bearer ...,',
          refreshToken: 'token',
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'refreshToken false',
        });
      }, 1500)
    );
  }
}

export const getUserRequest = async (body = null) => {
  if(body){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            email: 'email',
            name: 'name',
          },
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'user false',
        });
      }, 1500)
    );
  }
}

export const getRefreshUserRequest = async (body = null) => {
  if(body.email){
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            email: body.email,
            name: body.name,
          },
          reqBody: body,
        });
      }, 1500)
    );
  } else {
    return await new Promise(resolve =>
      setTimeout(() => {
        resolve({
          success: false,
          message: 'refreshUser false',
        });
      }, 1500)
    );
  }
}