import { 
  wsUserConnectionSuccess, 
  wsUserConnectionError, 
  wsUserConnectionClosed, 
  wsUserGetMessage
} from '../actions/wsUserAction';

import { initialState, wsUserOrders } from '../reducers/wsUserOrders';

describe('wsUserOrder reducer', () => {
  it('return wsUserOrder auth state', () => {
    expect(wsUserOrders(undefined, {})).toEqual(initialState)
  })
  it('should handle wsConnectionSuccess', () => {
    expect(wsUserOrders(initialState, {
      type: wsUserConnectionSuccess,
    }
      )).toEqual(
      {
        wsUserError: undefined,
        wsUserConnected: true, 
        wsUserOrders: [],
        wsUserOrdersTotal: null,
        wsUserOrdersTotalToday: null,
      }
    )
  })
  it('should handle wsUserConnectionError', () => {
    expect(wsUserOrders(initialState, {
      type: wsUserConnectionError,
    }
      )).toEqual(
      {
        wsUserError: true,
        wsUserConnected: false, 
        wsUserOrders: [],
        wsUserOrdersTotal: null,
        wsUserOrdersTotalToday: null,
      }
    )
  })
  it('should handle wsUserConnectionClosed', () => {
    expect(wsUserOrders(initialState, {
      type: wsUserConnectionClosed,
    }
      )).toEqual(
      {
        wsUserError: undefined,
        wsUserConnected: false, 
        wsUserOrders: [],
        wsUserOrdersTotal: null,
        wsUserOrdersTotalToday: null,
      }
    )
  })
  it('should handle wsUserGetMessage', () => {
    expect(wsUserOrders(initialState, {
      type: wsUserGetMessage,
      payload: {
        success: true,
        orders: ['orders1', 'orders2','orders3'],
        total: 'total',
        totalToday: 'totalToday'
      }
    }
      )).toEqual(
      {
        wsUserError: undefined,
        wsUserConnected: true, 
        wsUserOrders: ['orders1', 'orders2','orders3'],
        wsUserOrdersTotal: 'total',
        wsUserOrdersTotalToday: 'totalToday',
      }
    )
  })
})
