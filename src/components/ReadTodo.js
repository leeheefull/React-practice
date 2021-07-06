import {Component} from "react";

class ReadTodo extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.desc}
                <hr/>
            </div>
        );
    }
}

export default ReadTodo;