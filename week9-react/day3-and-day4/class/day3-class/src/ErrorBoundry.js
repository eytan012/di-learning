import React from "react";

export default class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: error, errorInfo:errorInfo})
    }

    render() {
        if (this.state.error){
            return (
                <>
                <div><h2>somthing went wrong</h2></div>
                    <div>{this.state.error.toString()}</div>
                    <div>{this.state.errorInfo.componentStack.toString()}</div>
                </>
            )
        }
        return (
            this.props.children
        )
    }
}