import React, { PureComponent } from 'react'
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import GenresList from '../components/GenresList'
import MoviesTable from '../components/MoviesTable';

class Movies extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genres: [],
            selectedGenre: "全部电影",
        }
    }

    componentDidMount() {
        this.setState({
            movies: getMovies(),//模拟后台接口请求数据
            genres: getGenres()
        })
    }
    render() {
        const { genres, movies, selectedGenre } = this.state;
        return (
            <div className="container">
                <div>电影管理页面</div>
                <div className="row">
                    <div className='col col-2'>
                        <GenresList genres={genres}
                            selectedGenre={selectedGenre}
                        />
                    </div>
                    <div className='col'>
                        <MoviesTable movies={movies} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;