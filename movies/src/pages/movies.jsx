import React, { PureComponent } from 'react'
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import GenresList from '../components/GenresList'
import MoviesTable from '../components/MoviesTable';
import Pagination from '../components/Pagination'

class Movies extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            renderMovies: [],
            genres: [],
            selectedGenre: "全部电影",
            currentPage: 1,  //当前页码
            pageSize: 10,     //页码大小
            pageCount: null   //页码条数
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
        console.log(movies)
        this.setState({
            movies,
            selectedGenre: val
        })
        this.handlePagination(movies)
    }
    // 处理收藏按钮
    handleLikeClike(movie) {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] }
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
        this.handlePagination(movies, this.state.currentPage)
    }

    // 处理分页的
    handlePagination(movies, currentPage = 1) {
        let moviesLength, pageCount;
        let pageSize = this.state.pageSize;

        moviesLength = movies.length;
        pageCount = Math.ceil(moviesLength / pageSize);
        this.setState({
            currentPage,
            pageCount,
            renderMovies: movies.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        })


    }

    // 点击页码，实现跳转
    handlePageJump(val) {
        console.log(val)
        this.handlePagination(this.state.movies, parseInt(val))
    }

    componentDidMount() {
        this.setState({
            movies: getMovies(),//模拟后台接口请求数据
            genres: getGenres()
        })
        this.handlePagination(getMovies())
    }
    render() {
        const { genres, movies, selectedGenre, currentPage, pageCount, renderMovies } = this.state;
        return (
            <div className="container mt-5 mb-5">
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
                            movies={renderMovies} />
                    </div>
                </div>
                {
                    movies.length &&
                    <div className="row">
                        <div className="col">
                            {/* 分页条 */}
                            <Pagination onJump={this.handlePageJump.bind(this)} currentPage={currentPage} pageCount={pageCount} />
                        </div>
                    </div>

                }

            </div>
        );
    }
}

export default Movies;