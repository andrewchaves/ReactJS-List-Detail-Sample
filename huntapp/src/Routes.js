import React from 'react'
import { 
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Main from './Pages/Main/Main'
import Product from './Pages/Product/Product'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/product/:id" component={Product}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes