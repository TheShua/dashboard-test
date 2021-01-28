import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import NotFound from './pages/NotFound';
import TaskViewer from './components/TaskViewer';

// Styles
import { World } from './styles/Base';

function App() {

    return (
        <World>
            <Header />
            <TaskViewer />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/user/:id" component={User} />
                <Route component={NotFound} />
            </Switch>
        </World>
    );
}

export default App;
