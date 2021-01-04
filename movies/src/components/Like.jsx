import React from 'react'
const Like = ({ doClick, movie }) => {
    const cls = movie.liked ? 'bi bi-heart-fill' : 'bi bi-heart'
    return (<span
        onClick={() => doClick(movie)}
        style={{ color: '#007bff' }}>
        <i className={cls}></i>
    </span>);
}

export default Like;