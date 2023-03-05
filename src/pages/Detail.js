import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import { ButtonBackToHome } from "../components/ButtonBackToHome";


const API_KEY = '17934dc7';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Detail extends Component {


    state = {
        movie: {}
    }

    componentDidMount() {
        const { id } = this.props.params;
        //console.log(id)

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                //console.log(movie)
                this.setState({movie})
            })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;

        return (
            <div>
                <ButtonBackToHome/>
                <h1>{Title}</h1>
                <img src={Poster}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }

}

export default withParams(Detail);