import '../assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from './contexts/theme.context';
import Navbar from './components/Navbar';
import Loader from './components/common/Loader';

const Posts = React.lazy(() => import('./components/posts'));

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
                        <div className='app__container'>
                            <Navbar />

                            <React.Suspense fallback={<Loader />}>
                                <Switch>
                                    <Route
                                        exact
                                        path='/'
                                        render={() => <Posts type='top' />}
                                    />
                                    <Route
                                        path='/new'
                                        render={() => <Posts type='new' />}
                                    />
                                    <Route render={() => <h1>404</h1>} />
                                </Switch>
                            </React.Suspense>
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