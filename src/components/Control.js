import {Component} from "react";

class Control extends Component {

    selectValue(e) {
        e.preventDefault();
        this.props.onChangeMode(e.target.value);
    }

    render() {
        return (
            <ul>
                <li>
                    <input type="button"
                           value="create"
                           onClick={this.selectValue.bind(this)}
                    />
                </li>
                <li>
                    <input type="button"
                           value="update"
                           onClick={this.selectValue.bind(this)}
                    />
                </li>
                <li>
                    <input type="button"
                           value="delete"
                           onClick={this.selectValue.bind(this)}
                    />
                </li>
            </ul>
        );
    }
}

export default Control;