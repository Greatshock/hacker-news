import React from 'react';
import PropTypes from 'prop-types';
import {fetchMainPosts} from '../utils/api';
import Loader from './common/Loader';
import PostsList from './common/PostsList';

export default class Posts extends React.Component {
    state = {
        posts: null,
        error: false,
        loading: true
    };

    componentDidMount() {
        this.getPosts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.getPosts();
        }
    }

    render() {
        const {posts, error, loading} = this.state;

        if (loading) {
            return <Loader />;
        }

        if (error) {
            return <h4>Error occurred: {error}</h4>
        }

        return (
            <React.Fragment>
                <PostsList posts={posts} />
            </React.Fragment>
        );
    }

    getPosts() {
        this.setState({
            posts: null,
            error: false,
            loading: true
        });

        fetchMainPosts(this.props.type)
            .then(posts => this.setState({
                posts,
                loading: false,
                error: null
            }))
            .catch(error => this.setState({
                loading: false,
                error
            }))
    }
}

Posts.propTypes = {
    type: PropTypes.oneOf(['top', 'new'])
};

