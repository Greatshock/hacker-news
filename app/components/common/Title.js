import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Title({url, text, id}) {
    return url
        ? <a className='link title__link' href={url}>{text}</a>
        : <Link className='link title__link' to={`/post?id=${id}`}>{text}</Link>
}

Title.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
    id: PropTypes.number
};

