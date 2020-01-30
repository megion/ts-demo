import {
  createStore,
  applyMiddleware,
  combineReducers,
  CombinedState,
  StoreEnhancer,
  Store,
  Reducer,
} from "redux"

import { composeWithDevTools } from "redux-devtools-extension"
import { ChatState } from "../chat/types"
import { chatReducer } from "../chat/reducers"

export type CourseStore = {
  chat: ChatState
  //searchTerm: string
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
function initStore(): Store<CourseStore> {
  const rootReducer: Reducer<CombinedState<CourseStore>> = combineReducers<
    CourseStore
  >({
    //system: systemReducer,
    chat: chatReducer,
  })

  //const middlewares = []
  //const middleWareEnhancer: StoreEnhancer = applyMiddleware(...middlewares)
  const middleWareEnhancer: StoreEnhancer = applyMiddleware()

  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer))
}

export const store: Store<CourseStore> = initStore()
