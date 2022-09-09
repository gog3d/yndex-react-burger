import { 
  wsConnectionSuccess, 
  wsConnectionError, 
  wsConnectionClosed, 
  wsGetMessage
} from '../actions/wsAction';

import { initialState, wsOrders } from '../reducers/wsOrders';

describe('wsOrders reducer', () => {
  it('return wsOrder state', () => {
    expect(wsOrders(undefined, {})).toEqual(initialState)
  })
  it('should handle wsConnectionSuccess', () => {
    expect(wsOrders(initialState, {
      type: wsConnectionSuccess,
    }
      )).toEqual(
      { ...initialState, wsConnected: true }
    )
  })
  it('should handle wsConnectionError', () => {
    expect(wsOrders(initialState, {
      type: wsConnectionError,
    }
      )).toEqual(
      { ...initialState,  wsError: true }
    )
  })
  it('should handle wsConnectionClosed', () => {
    expect(wsOrders(initialState, {
      type: wsConnectionClosed,
    }
      )).toEqual(
      { ...initialState }
    )
  })
  it('should handle wsGetMessage', () => {
    expect(wsOrders(initialState, {
      type: wsGetMessage,
      payload: {
        success: true,
        orders: ['orders1', 'orders2','orders3'],
        total: 'total',
        totalToday: 'totalToday'
      }
    }
      )).toEqual(
      { ...initialState, 
        wsConnected: true,
        wsOrders: ['orders1', 'orders2','orders3'], 
        wsOrdersTotal: 'total',
        wsOrdersTotalToday: 'totalToday'
      }
    )
  })
})
