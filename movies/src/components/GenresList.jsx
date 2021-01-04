const GenresList = ({ doClick, genres, selectedGenre }) => {
    return (<div className="list-group">
        {
            genres.map((item, idx) => <a
                onClick={() => { doClick(item) }}
                className={item === selectedGenre ? 'list-group-item cp list-group-item-action active' : 'list-group-item cp list-group-item-action'}
                key={idx}
            >{item}</a>)
        }

    </div>);
}

export default GenresList;