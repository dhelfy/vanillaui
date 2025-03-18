import { all, call, put, takeEvery } from "typed-redux-saga";
import { instance } from "../../API/axiosInstance";
import { fetchComponents, fetchComponentsSuccess } from "./componentsSlice";

function* workFetchComponents() {
    try {
        const response = yield* call(() => {
            return instance.get("components")
        })

        const components = response.data
        yield put(fetchComponentsSuccess(components))
    } catch (error) {
        console.log(error)
    }
}

function* watchFetchComponents () {
    yield all([
        takeEvery(fetchComponents, workFetchComponents),
    ])
}

export default watchFetchComponents