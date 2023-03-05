import React, { Component } from "react";
import Title from "../components/Title";
import SearchForm from "../components/SearchForm";
import MoviesList from "../components/MoviesList";



class Home extends Component {

    state = {
        results: [],
        usedSearch: false
    }

    _handleResults = (results) => {
        this.setState({ results });
        this.setState({usedSearch: true});
    }


    _renderResults = () => {
        return this.state.results.length === 0
            ? <p>No results</p>
            : <MoviesList movies={this.state.results} />
    }

    render() {
        return (
            <div>
                <Title title="Search movies"></Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <small>Use the form to search a movie</small>
                }
            </div>
        );
    }

}

export default Home;