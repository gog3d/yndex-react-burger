import { 
  wsUserConnectionSuccess, 
  wsUserConnectionError, 
  wsUserConnectionClosed, 
  wsUserGetMessage
} from '../actions/wsUserAction';

import { initialState, wsUserOrders } from '../reducers/wsUserOrders';

describe('wsUserOrders reducer', () => {
  it('return wsUserOrder state', () => {
    expect(wsUserOrders(undefined, {})).toEqual(initialState)
  })
  it('should handle wsUserConnectionSuccess', () => {
    expect(wsUserOrders(initialState, {
      type: wsUserConnectionSuccess,
    }
      )).toEqual(
      { ...initialState, wsUserConnected: true }
    )
  })

  it('should handle wsUserConnectionError', () => {
    expect(wsUserOrders(initialState, {
      type: wsUserConnectionError,
    }
      )).toEqual(
      { ...initialState,  wsUserError: true }
    )
  })

  it('should handle wsUserConnectionClosed', () => {
    expect(wsUserOrders(initialState, {
      type: wsUserConnectionClosed,
    }
      )).toEqual(
      { ...initialState }
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
      { ...initialState, 
        wsUserConnected: true,
        wsUserOrders: ['orders1', 'orders2','orders3'], 
        wsUserOrdersTotal: 'total',
        wsUserOrdersTotalToday: 'totalToday'
      }
    )
  })
})
