import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'
import {Link} from 'react-router'
class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' }
    }
    onSubmit(event){
        event.preventDefault();
        this.props.mutate({
            variables:{
                title: this.state.title
            }
        })
        
    }
    render() {
        return (
            <div>
                <Link to="/" >
                    go back
                </Link>
                <h3>Song Create</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="">Song Title:</label>
                    <input
                        onChange={(event) => { 
                            this.setState({ title: event.target.value });
                        }}
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}
const mutation = gql`
    mutation AddSong($title:String){
        addSong(title: $title){
            title
        }
    }
`;
export default graphql(mutation)(SongCreate);