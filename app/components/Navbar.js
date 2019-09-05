import React from 'react';
import {NavLink} from 'react-router-dom';
import {ThemeConsumer} from '../contexts/theme.context';

export default class Navbar extends React.Component {
    render() {
        return (
            <ThemeConsumer>
                {({theme, toggleTheme}) => (
                    <nav className='navbar'>
                        <div className='navbar__group'>
                            <div className='navbar__item'>
                                <NavLink
                                    className='link'
                                    activeClassName='_active'
                                    exact
                                    to='/'>
                                        Top
                                </NavLink>
                            </div>
                            <div className='navbar__item'>
                                <NavLink
                                    className='link'
                                    activeClassName='_active'
                                    to='/new'>
                                        New
                                </NavLink>
                            </div>
                        </div>
                        <div className='navbar__group _right'>
                            <button className='navbar__item _button'
                                    onClick={toggleTheme}>
                                {theme === 'light' ? '🔦' : '💡'}
                            </button>
                        </div>
                    </nav>
                )}
            </ThemeConsumer>
        )
    }
}