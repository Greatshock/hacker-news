import React from 'react';
import {Link} from 'react-router-dom';
import Title from './Title';
import {formatDate} from '../../utils/helpers';
import PropTypes from 'prop-types';

export default function PostsList({posts}) {
    return (
        <ul className='posts-list'>
            {posts.map(post => {
                const {id, by, title, time, descendants} = post;
                return (
                    <li className='posts-list__post'
                        key={id}>
                        <Title
                            className='post-list__post-title'
                            text={title}
                            id={id}
                        />
                        <div className='posts-list__post-info'>
                                <span className='text'>
                                    by <Link className='link _underline' to={`/user?id=${by}`}>{by}</Link>
                                </span>
                            <span className='text'> on {formatDate(time)} </span>
                            {typeof post.descendants === 'number' && (
                                <span className='text'>
                                    with <Link className='link _underline' to={`/post?id=${id}`}>{descendants}</Link> comments
                                </span>
                            )}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
};