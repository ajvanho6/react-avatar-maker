import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import PageContainer from './containers/PageContainer';
import Home from './components/Home';
import routes from './routes';
import '../scss/style.scss';

class App extends React.Component {
    render() {
        return (
            <Router key={new Date()} history={browserHistory}>
                <Route path={routes.ROOT} component={PageContainer}>
                    <IndexRoute components={{content: Home}}/>
                    <Route path={routes.HOME} components={{content: Home}}/>
                </Route>
            </Router>
        );
    }
}

export default App;
