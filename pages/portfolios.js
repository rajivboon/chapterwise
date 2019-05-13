import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';


class Portfolios extends React.Component {

    static async getInitialProps() {
        let posts= [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch (error) {
            console.error(error);
        }       
        return { posts: posts.splice(0, 10)};
    }
    
    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <li>
                    {post.title}
                </li>
            )
        })
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
            <h1> This is Portfolios page</h1>
                <ul>
                    {this.renderPosts(posts)}
                    {/* {posts.map((post) => {
                        return (
                            <li>{post.title} </li>
                        )
                    })} */}
            </ul>
            </BaseLayout>
        )
    }
}

export default Portfolios;