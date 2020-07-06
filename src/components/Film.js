import React, {Component} from "react";

class Film extends Component {

    render(){
        return(
            <li>
                <h1>{this.props.children}</h1>
                <h1>{this.props.id}</h1> 
                <h1>{this.props.name}</h1>
                <h1>{this.props.url}</h1>
            </li>
        )
    }
}

export default Film;