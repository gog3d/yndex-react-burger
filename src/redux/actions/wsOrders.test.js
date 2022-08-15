
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
      {
        wsError: undefined,
        wsConnected: true, 
        wsOrders: [],
        wsOrdersTotal: null,
        wsOrdersTotalToday: null,
      }
    )
  })
  it('should handle wsConnectionError', () => {
    expect(wsOrders(initialState, {
      type: wsConnectionError,
    }
      )).toEqual(
      {
        wsError: true,
        wsConnected: false, 
        wsOrders: [],
        wsOrdersTotal: null,
        wsOrdersTotalToday: null,
      }
    )
  })
  it('should handle wsConnectionClosed', () => {
    expect(wsOrders(initialState, {
      type: wsConnectionClosed,
    }
      )).toEqual(
      {
        wsError: undefined,
        wsConnected: false, 
        wsOrders: [],
        wsOrdersTotal: null,
        wsOrdersTotalToday: null,
      }
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
      {
        wsError: undefined,
        wsConnected: true, 
        wsOrders: ['orders1', 'orders2','orders3'],
        wsOrdersTotal: 'total',
        wsOrdersTotalToday: 'totalToday',
      }
    )
  })
})
