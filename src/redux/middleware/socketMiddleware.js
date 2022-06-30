import { getCookie } from '../utils';

export const socketMiddleware = (wsUrl) => {
  return store => {
    let socket = null;
    let userSocket = null;
    return next => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      if (type === 'WS_CONNECTION_START') {
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === 'WS_USER_CONNECTION_START') {
        const accessToken = getCookie('accessToken')
//        const userWsUrl= wsUrl + `?token=${accessToken}`
        userSocket = new WebSocket(`${wsUrl}?token=${accessToken}`);
//        console.log(userSocket)
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({type: 'WS_CONNECTION_SUCCESS', pyload: event});
        };
        socket.onerror = event => {
          dispatch({type: 'WS_CONNECTION_ERROR', payload: event});
        };
        socket.onmessage = event => {
          const { data } = event;
//          console.log(JSON.parse(data));
          dispatch({type: 'WS_GET_MESSAGE', payload: JSON.parse(data)});
        };
        socket.close = event => {
           dispatch({type: 'WS_CONNECTION_CLOSED', payload: event});
        };
        if (type === 'WS_SEND_MESSAGE') {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }
      if (userSocket) {
        userSocket.onopen = event => {
          dispatch({type: 'WS_USER_CONNECTION_SUCCESS', pyload: event});
        };
        userSocket.onerror = event => {
          dispatch({type: 'WS_USER_CONNECTION_ERROR', payload: event});
        };
        userSocket.onmessage = event => {
          const { data } = event;
//          console.log(JSON.parse(data));
          dispatch({type: 'WS_USER_GET_MESSAGE', payload: JSON.parse(data)});
        };
        userSocket.close = event => {
           dispatch({type: 'WS_USER_CONNECTION_CLOSED', payload: event});
        };
        if (type === 'WS_USER_SEND_MESSAGE') {
          const message = payload;
          userSocket.send(JSON.stringify(message));
        }
      }
      next(action);
    }
  };
};


