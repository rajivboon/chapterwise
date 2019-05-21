import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
// import Link from 'next/link';
import { Link } from '../routes'
import BasePage from '../components/Basepage';


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
        return posts.map((post, index) => {
            return (
                <li key={index} >
                    <Link route={`/portfolio/${post.id}`} >
                        <a>{post.title}</a>
                    </Link>
                    
                </li>
            )
        })
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Portfolios">
                <ul>
                    {this.renderPosts(posts)}
                    {/* {posts.map((post) => {
                        return (
                            <li>{post.title} </li>
                            )
                        })} */}
            </ul>
            </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios;