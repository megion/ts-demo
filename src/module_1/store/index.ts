import { createStore, applyMiddleware, compose } from "redux"
import { Store } from "redux"
//import reducer from "../reducer"

export type CourseStore = {
  items: any[]
  searchTerm: string
}

// declare function __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
declare function __REDUX_DEVTOOLS_EXTENSION_COMPOSE__(arg: {
  name: string
}): typeof compose

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
function initStore(): Store<CourseStore> {
  const composeEnhancers: typeof compose =
    typeof window === "object" && __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          name: "CourseStore",
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const enhancer = composeEnhancers(
    applyMiddleware(),
    // other store enhancers if any
  )
  //return createStore(reducer, enhancer)
  return createStore(enhancer)
}

export const store: Store<CourseStore> = initStore()
