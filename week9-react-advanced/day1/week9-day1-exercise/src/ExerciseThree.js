import React from "react";
import axios from "axios";
import Post from "./components/Post";

class ExerciseThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    async componentDidMount() {
        const request = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await request.data
        this.setState({posts:data})

    }

    render() {
        const {posts} = this.state
        return (
            <div>
                <Post header={"List of posts"} posts={posts}/>
            </div>
        )
    }


}

export default ExerciseThree;