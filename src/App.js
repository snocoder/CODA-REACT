import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Helmet} from "react-helmet";
import NotFound404 from "./pages/NotFound404/NotFound404";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Helmet title="CODA"/>
                    <Switch>
                        <Route exact path="/recipe" component={Home}/>
                        <Route exact path="/recipe/:id" component={RecipeDetail}/>
                        <Route default component={NotFound404}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
