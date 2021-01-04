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

    // 处理点击列表
    handleClickList(val) {
        let movies = getMovies();
        if (val != '全部电影') {
            movies = movies.filter(item => {
                return item.genres.indexOf(val) > -1;
            })
        }
        this.setState({
            movies,
            selectedGenre: val
        })
    }
    // 处理收藏按钮
    handleLikeClike(movie) {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
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
                            doClick={this.handleClickList.bind(this)}
                        />
                    </div>
                    <div className='col'>
                        <p>一共有 {movies.length} 条相关的电影</p>
                        <MoviesTable
                            likeClick={this.handleLikeClike.bind(this)}
                            movies={movies} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;