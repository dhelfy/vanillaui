import { all } from "redux-saga/effects";
import componentsSaga from "../state/components/componentsSaga"

// корневая сага
export default function* rootSaga() {
    yield all([
		  componentsSaga(),
    ])
}