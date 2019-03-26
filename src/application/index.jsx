import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import { routes } from '../routes/'
import { mountAction } from './actions'

export default class Application extends Component {
  componentWillMount() {
    mountAction()
    console.log(1111)
  }
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
