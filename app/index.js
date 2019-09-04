import '../assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
    state = {
        theme: 'light',
        toggleTheme: () => {
            this.setState(({theme}) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
    };

    render() {
        return (
            <Router>
                <div className={this.state.theme}>
                    <Route exact
                           path="/"
                           render={() => 'Top'}>
                    </Route>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);