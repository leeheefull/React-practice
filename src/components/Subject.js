import {Component} from "react";

class Subject extends Component {

    changeWelcome(e) {
        e.preventDefault();
        this.props.onChangePage();
    }

    render() {
        return (
            <div>
                <h1>
                    <a href="/"
                       onChange={this.changeWelcome.bind(this)}
                    >
                        {this.props.title}
                    </a>
                </h1>
                {this.props.sub}
                <hr/>
            </div>
        );
    }
}

export default Subject;