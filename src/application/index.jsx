import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import { routes } from '../routes/'

export default class Application extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.liteRoute.map((route, i) =>
            <Route {...route} key={i} />
          )}
        </Switch>
      </div>
    )
  }
}
