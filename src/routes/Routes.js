import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Engenheira from '../pages/Engenheira'
import MinhaPagina from '../pages/MinhaPagina/MinhasPagina'


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/engenheiras'component={Engenheira} />
                <Route exact path='/minhaPagina'component={MinhaPagina} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes