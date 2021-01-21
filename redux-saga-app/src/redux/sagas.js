import { takeEvery, put, call } from "redux-saga/effects";
import { GET_DATA, setData } from "./actions";

const fetchData = () => {
  return fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=20"
  ).then((response) => response.json());
};

// worker

function* loadDataWorker() {
  const data = yield call(fetchData);
  yield put(setData(data));
}

// watcher

export function* loadDataWatcher() {
  yield takeEvery(GET_DATA, loadDataWorker);
}
