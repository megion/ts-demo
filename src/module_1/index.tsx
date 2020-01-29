import * as React from "react"
import * as ReactDOM from "react-dom"
import { Point } from "./point"
import "bootstrap/dist/css/bootstrap.css"

const point: Point = new Point(1, 2)
point.sum()

function loadModuleApp(): void {
  import("./app").then(function(appModule) {
    const App = appModule.default
    ReactDOM.render(<App />, document.querySelector("#root"))
  })
}

// TODO: call on init (it temporary)
loadModuleApp()

export { loadModuleApp }
