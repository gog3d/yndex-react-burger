export const createWsMiddleware = (wsUrl, wsActions) => {
  const wsMiddleware = (store) => {
    let socket = null;
    return next => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsStart,
        onOpen,
        onError,
        onMessage,
        onClose
      } = wsActions;
      if (type === wsStart) {
        console.log(`${wsUrl}${payload}`);
        socket = new WebSocket(`${wsUrl}${payload}`);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({type: onOpen});
        };
        socket.onerror = event => {
          console.log(`ws error: ${event}`);
          dispatch({type: onError});
        };
        socket.onmessage = event => {
          const { data } = event;
          dispatch({type: onMessage, payload: JSON.parse(data)});
        };
        socket.close = event => {
           dispatch({type: onClose});
        };
      }
      next(action);
    }
  };
  return wsMiddleware;
};