import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchData } from "./api";
import delay from '@redux-saga/delay-p'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  while(true){
    try {
      // do api call
      const data = yield call(fetchData);
      yield put(receiveApiData(data));
      //call_api_every_20_second
      yield delay(20000);
      console.log('RELOAD');
  
    } catch (e) {
      console.log(e);
    }
  }
}



/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
