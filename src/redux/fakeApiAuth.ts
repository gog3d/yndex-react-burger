export const getForgotPasswordRequestApi = async (body = null) => {
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
export const getResetPasswordRequestApi = async (body = null) => {
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

export const getRegisterRequestApi = async (body = null) => {
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

export const getLoginRequestApi = async (body = null) => {
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
export const getLogoutRequestApi = async (body = null) => {
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
export const getTokenRequestApi = async (body = null) => {
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

export const getUserRequestApi = async (body = null) => {
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

export const getRefreshUserRequestApi = async (body = null) => {
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