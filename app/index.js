import '../assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from './contexts/theme.context';
import Navbar from './components/Navbar';

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
            <ThemeProvider value={this.state}>
                <Router>
                    <div className={`app__theme _${this.state.theme}`}>
                        <div className="app__container">
                            <Navbar />

                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => 'Top'}
                                />
                                <Route
                                    path="/new"
                                    render={() => 'New'}
                                />
                                <Route
                                    path="/post"
                                    render={() => 'Post'}
                                />
                                <Route
                                    path="/user"
                                    render={() => 'User'}
                                />
                                <Route render={() => <h1>404</h1>} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);