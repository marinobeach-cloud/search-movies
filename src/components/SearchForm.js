import React, { Component } from "react";


const API_KEY = '17934dc7';
class SearchForm extends Component {

    state = {
        inputMovie: ''
    }

    _handleChange = e => {
        e.preventDefault();
        this.setState({inputMovie: e.target.value});
        //console.log(this.state.inputMovie)
    }

    _handleSubmit = e => {
        e.preventDefault();
        //console.log(this.state.inputMovie);
        const { inputMovie } = this.state;
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                //console.log(results)
                const { Search = [], totalResults = 0} = results;
                this.props.onResults(Search);//llamo al componente padre al metodo onResults y le paso el Search
            })
    }



    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            onChange={this._handleChange}
                            className="input"
                            type="text"
                            placeholder="Search a movie...">
                        </input>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }

}

export default SearchForm;