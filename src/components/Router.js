import { Switch } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Portada } from './Portada'
import { Register } from './Register'

export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Portada}/>
            <Route exact path="/register" component={Register}/>

        </Switch>
        </BrowserRouter>
        
    )
}
