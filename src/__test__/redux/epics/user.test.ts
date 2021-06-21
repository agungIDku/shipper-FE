import { ActionsObservable } from 'redux-observable'
import { of, throwError } from 'rxjs'

import * as userStockDuck from '@/redux/ducks/user'
import * as userStockEpics from '@/redux/epics/user'
import { TOTAL_DATA } from '@/constants/data'

const exampleResponse = {
  results: [
    {
      login: {
        username: 'agung'
      },
      name: {
        first: 'Agung',
        last: 'Septiyadi'
      },
      cell: '0856-1276-2373',
      email: 'agungseptiyadi.74@gmail.com',
      dob: {
        date: '2021-06-21T11:12:29.639Z'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/70.jpg'
      }
    }
  ]
}

describe('Observable:', () => {
  describe('userFetchAllEpics', () => {
    const action$ = ActionsObservable.of({
      type: userStockDuck.USER_FETCH,
      payload: TOTAL_DATA,
    })
    const state$: any = {
      value: {
        user: {
          totalResult: TOTAL_DATA
        }
      },
    }

    const dataExpected = [
      {
        username: exampleResponse.results[0].login.username,
        firstName: exampleResponse.results[0].name.first,
        lastName: exampleResponse.results[0].name?.last || '',
        phone: exampleResponse.results[0].cell,
        email: exampleResponse.results[0].email,
        dob: exampleResponse.results[0].dob.date,
        image: exampleResponse.results[0].picture.large,
      }
    ]

    it('dispatches the correct action when fetch user success', (done) => {
      const localStorage = {
        setLocalStorage: () => true,
        getLocalStorage: () => null,
      }
      const api: any = () => of({ response: {
        results: exampleResponse.results
      }})

      const expectedAction = {
        type: userStockDuck.USER_FETCH_SUCCESS,
        payload: dataExpected
      }

      userStockEpics
        .userFetchAllEpics(action$, state$, { api, localStorage })
        .pipe()
        .subscribe((actualOutputs) => {
          expect(actualOutputs).toEqual(expectedAction)
          done()
        })
    })

    it('dispatches the correct action when fetch user success (from localStorage)', (done) => {
      const dataTest: any = []
      for(let i = 0; i < 30; i++) {
        dataTest.push(dataExpected)
      }
      const localStorage = {
        setLocalStorage: () => null,
        getLocalStorage: () => JSON.stringify(dataTest),
      }
      const api: any = () => of()

      const expectedAction = {
        type: userStockDuck.USER_FETCH_SUCCESS,
        payload: dataTest
      }

      userStockEpics
        .userFetchAllEpics(action$, state$, { api, localStorage })
        .pipe()
        .subscribe((actualOutputs) => {
          expect(actualOutputs).toEqual(expectedAction)
          done()
        })
    })

    it('dispatches the correct action when fetch user failed', (done) => {
      const localStorage = {
        setLocalStorage: () => true,
        getLocalStorage: () => null,
      }
      const api = () => throwError({ message: 'failed'})

      const expectedAction = {
        type: userStockDuck.USER_FETCH_FAILED,
      }

      userStockEpics
        .userFetchAllEpics(action$, state$, { api, localStorage })
        .pipe()
        .subscribe((actualOutputs) => {
          expect(actualOutputs).toEqual(expectedAction)
          done()
        })
    })
  })
})
