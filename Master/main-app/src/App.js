import React from 'react';
import './App.css'
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import {BaseLayout} from "./layouts";
import {Home,MovieDetails} from "./pages";


export default function App() {

    const history = useHistory();

    return (
        <BaseLayout>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>

                {/*<Route>*/}
                {/*    <Redirect to='/'/>*/}
                {/*</Route>*/}

                <Route path='/movie/:id'>
                    <MovieDetails/>
                </Route>

                <Route>
                    <h1>Page not found<button onClick={() => history.push('/')}>go home</button></h1>
                </Route>

            </Switch>
        </BaseLayout>
    );

}
