import React from "react";
import {connect} from "react-redux";
import {deletePost} from "../store/postActions";


class Post extends React.Component {

    handleClick = ()=>{
        this.props.deletePost(this.props.match.params.id)
        this.props.history.push('/')
    }
    render() {
        const {posts} = this.props

        return (


            <div>

                {
                    posts ?
                        <div className={'post'}>
                            <h4 className={'center'}>{posts.title}</h4>
                            <p>{posts.body}</p>
                            <div className={'center'}>
                                <button className={'btn grey'} onClick={this.handleClick}>Delete Post</button>
                            </div>
                        </div>
                        :
                        <div className={'center'}>Loading....</div>
                }

            </div>


        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.find(val => val.id === ownProps.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        deletePost: (id)=>dispatch(deletePost(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);