import React from 'react'
import {
    Route
} from 'react-router-dom'

type IProps = {
    path: string
    exact?: boolean,
    component: React.ComponentType<any>
}

const ProtectedRoute = ({ component: Component, ...otherProps}: IProps) => {
    return (
        <Route {...otherProps} render={props => {
            return <Component {...props}/>
        }}/>
    )
}

export default ProtectedRoute