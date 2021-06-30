import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import blogImg from '../blog.png'

class Home extends React.Component {
    render() {
        const {blogPosts} = this.props
        const renderedPosts = blogPosts.map((post) => {
            return (
                <div className={'post card'} key={post.id}>
                    <img src={blogImg} alt="Blog"/>
                    <div className={'card-content'}>
                        <Link to={'/post/' + post.id}>
                            <span className={'card-title red-text'}>{post.title}</span>
                        </Link>
                        <p>{post.title}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className={'container home'}>
                {renderedPosts.length >= 1 ? renderedPosts : <div className={'center'}>No Posts to show..</div>}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        blogPosts: state.posts
    }
}

export default connect(mapStateToProps, null)(Home);