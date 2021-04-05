import React from 'react'
import {
    Router,
    Switch
} from 'react-router-dom'
import { browserHistory } from '../helpers/history-helper'
import WindowFrame from './containers/frame'
import AppRoutes from './routes'

const App = () => {
    return (
        <Router history={browserHistory}>
            <WindowFrame>
                <Switch>
                    <AppRoutes/>
                </Switch>
            </WindowFrame>
        </Router>
    )
}

export default App