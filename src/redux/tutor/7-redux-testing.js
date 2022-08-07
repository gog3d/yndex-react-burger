Тестирование Redux

В предыдущем уроке вы познакомились с библиотекой Jest и 
вспомогательными инструментами для тестирования компонентов. 
Но приложения состоят не только из компонентов, а ещё и из логики, 
которая управляет этими компонентами, порядком их отображения и работой с данными. 
В нашем приложении вся бизнес-логика хранится в Redux, так что в этом уроке 
мы подробно разберём его тестирование.

Подготовка к тестированию

В этом уроке мы протестируем редьюсеры и экшены. 
Но сперва подготовимся — установим необходимые библиотеки и создадим фальшивое 
хранилище. Тестирование редьюсеров и компонентов схоже: в обоих случаях 
применяются юнит-тесты. Поэтому здесь нам пригодится уже знакомая библиотека Jest.

Для тестирования асинхронных экшенов нам потребуется библиотека fetch-mock, 
которая «фальсифицирует» запросы к серверу (моки):

# NPM:
npm install fetch-mock --save-dev

# Yarn:
yarn add fetch-mock --dev 

Ещё нам нужна библиотека для создания фальшивого хранилища. 
С этой задачей идеально справится redux-mock-store:

# NPM:
npm install redux-mock-store --save-dev

# Yarn:
yarn add redux-mock-store --dev 

Теперь всё готово! Можем приступать к тестированию Redux.

Тестирование экшенов

Генераторы экшенов возвращают простые объекты. 
В ходе тестирования нам нужно проверить, соответствует ли эталону объект, 
возвращаемый генератором экшенов.
Разберёмся на примере. Создадим такой генератор экшена:

export function setPrice(price) {
  return {
    type: 'SET_PRICE',
    price
  }
} 

А протестировать его можно так:

import * as actions from './actions'
import * as types from './constants'

describe('Action creators', () => {
  it('should create an action with correct price', () => {
    const price = 145600;

        // Эталонный экшен
    const expectedAction = {
      type: types.SET_PRICE,
      price
    }
        
        // Проверяем экшены на равенство
    expect(actions.setPrice(price)).toEqual(expectedAction)
  })
})

В этом примере мы сравниваем результат вызова генератора экшена с эталонным экшеном, который определяем выше по коду.

Тестирование асинхронных экшенов

С генераторами экшенов разобрались, следующие на очереди — асинхронные 
генераторы экшенов. Для асинхронных действий в Redux обычно создают три 
типа экшенов: запрос отправлен, ответ получен, произошла ошибка:

function fetchTodosRequest() {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

function fetchTodosSuccess(body) {
  return {
    type: FETCH_TODOS_SUCCESS,
    body
  }
}

function fetchTodosFailure(ex) {
  return {
    type: FETCH_TODOS_FAILURE,
    ex
  }
}

// Асинхронный генератор экшена
export function fetchTodos() {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch('http://example.com/todos')
      .then(res => res.json())
      .then(body => dispatch(fetchTodosSuccess(body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)))
  }
} 

Для тестирования асинхронных генераторов экшенов нам потребуется подменить
хранилище и запросы к серверу на моки. Вот как можно это сделать:

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as types from './constants'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchTodos()).then(() => {
      // Возвращаем асинхронный экшен
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
}) 

Тестирование редьюсеров
В отличие от компонента, редьюсер — всегда чистая функция. 
Это значительно упрощает тестирование. 
Напишем простой редьюсер:

import { ADD_TODO } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    default:
      return state
  }
} 

А теперь — тест для этого редьюсера:

import reducer from '../../structuring-reducers/todos'
import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
}) 

Тестирование редьюсеров схоже с тестированием простых генераторов экшенов — мы сравниваем простые объекты. Разница лишь в том, что в случае с редьюсерами мы передаём экшен и проверяем, как отреагировало хранилище.
Тестирование Redux кому-то кажется увлекательным, а кому-то — скучным. И это нормально. Но стоит помнить, что иногда разработчики в Redux реализуют сложную логику и отправляют тяжеловесные экшены. И, если вы отважились писать тесты, такие редьюсеры и экшены не стоит оставлять без внимания.