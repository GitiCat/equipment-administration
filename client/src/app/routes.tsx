import React from 'react'
import ProtectedRoute from './components/protected-route'
import Pages from './pages/index'

const AppRoutes: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <ProtectedRoute exact={true} path='/' component={Pages.HomePage}/>
            <ProtectedRoute exact={true} path='/tasks' component={Pages.TasksPage}/>
            <ProtectedRoute exact={true} path='/calendar' component={Pages.ShedulerCalendarPage}/>
        </React.Fragment>
    )
}

export default AppRoutes