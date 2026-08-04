import React from 'react'
import PropTypes from 'prop-types'

export default function LatestPosts({ post }) {

    
    return (
        <div>
            <p>{post.title}</p>
        </div>
    )
}

LatestPosts.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
}
