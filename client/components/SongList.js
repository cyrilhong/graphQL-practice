import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import {Link} from 'react-router'
class SongList extends Component {
    renderSongs(){
        if (this.props.data.loading) {
            return (
                <div>
                    loading
                </div>
            )
        } else {
            return (
                this.props.data.songs.map((item,index) => {
                    return (
                        <li key={index}>
                            {item.title}
                        </li>
                    )
                })
            )
            
        }
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <ul>
                    {this.renderSongs()}
                </ul>
                <Link to="/songs/create">
                 add song
                </Link>
            </div>
        )
    }
}

const query = gql`
{
    songs{
        title
    }
}
`

export default graphql(query)(SongList);