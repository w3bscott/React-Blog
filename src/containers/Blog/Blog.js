import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios';


class Blog extends Component {
    state={
        posts: [],
        selectedPostID: null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const posts = response.data.slice(0, 4)
            this.setState({posts: posts})
        })
    }



    render () {

        const postClickHandler = (id) => {
            this.setState({selectedPostID: id})
        }


        const post = this.state.posts.map((post) => {
            return   <Post 
            title={post.title} 
            authur={'Scott'} 
            key={post.id}
            clicked={() => postClickHandler(post.id)}
            />
        })
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostID}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;