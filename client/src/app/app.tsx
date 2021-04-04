import React from 'react'
import {
    Router,
    Switch
} from 'react-router-dom'
import { browserHistory } from '../helpers/history-helper'
import WindowFrame from './containers/frame'

const App = () => {
    return (
        <Router history={browserHistory}>
            <WindowFrame>
                <Switch>
                    
                </Switch>
            </WindowFrame>
        </Router>
    )
}

export default App