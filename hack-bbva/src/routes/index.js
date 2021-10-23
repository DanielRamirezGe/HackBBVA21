import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from '../pages/home'



export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/home' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
