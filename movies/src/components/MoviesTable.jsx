import React from 'react'
import TableBody from './TableBody';
import TableHead from './TableHead';
import Like from './Like'
const MoviesTable = ({ movies }) => {
    const columns = [
        {
            path: "title",
            label: "标题",
            content: (movie) => (
                <a target="_blank" href={movie.alt}>
                    {movie.title}
                </a>
            ),
        },
        { path: "original_title", label: "原标题" },
        { path: "year", label: "上映时间" },
        { path: "genres", label: "分类" },
        { path: "rating.average", label: "评分" },
        {
            key: "like",
            label: "收藏",
            content: (movie) => <Like />,
        },
    ];

    return (<div>
        <table className='table tabke-hover'>
            <TableHead columns={columns} />
            <TableBody movies={movies} columns={columns}></TableBody>
        </table>

    </div>);
}

export default MoviesTable;